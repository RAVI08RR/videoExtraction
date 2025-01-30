import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MatchedPhotoUI({ data }) {
  const [subjectZoom, setSubjectZoom] = useState(1);
  const [matchedZoom, setMatchedZoom] = useState(1);
  const [subjectPosition, setSubjectPosition] = useState({ x: 0, y: 0 });
  const [matchedPosition, setMatchedPosition] = useState({ x: 0, y: 0 });

  const handleZoom = (zoomType, imageType) => {
    const setZoom = imageType === "subject" ? setSubjectZoom : setMatchedZoom;
    const currentZoom = imageType === "subject" ? subjectZoom : matchedZoom;
    const newZoom = zoomType === "in" ? Math.min(currentZoom + 0.5, 3) : Math.max(currentZoom - 0.5, 1);
    setZoom(newZoom);

    if (newZoom === 1) {
      imageType === "subject" ? setSubjectPosition({ x: 0, y: 0 }) : setMatchedPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseMove = (e, imageType) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const zoom = imageType === "subject" ? subjectZoom : matchedZoom;
    if (zoom > 1) {
      const setPosition = imageType === "subject" ? setSubjectPosition : setMatchedPosition;
      setPosition({
        x: (0.5 - x) * (zoom - 1) * 100,
        y: (0.5 - y) * (zoom - 1) * 100,
      });
    }
  };

  const ImageCard = ({ title, src, zoom, position, imageType }) => (
    <Card className="card-matched-ui">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div
          className="position-relative"
          style={{
            height: "300px",
            overflow: "hidden",
            borderRadius: "0.5rem",
            width: "100%",
          }}
          onMouseMove={(e) => handleMouseMove(e, imageType)}
        >
          <img
            src={src}
            alt={title}
            className="img-fluid w-100 h-100"
            style={{
              objectFit: "cover",
              transform: `scale(${zoom}) translate(${position.x}%, ${position.y}%)`,
              transformOrigin: "center center",
              transition: "transform 0.2s ease-out",
            }}
          />
          <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
            <Button
              variant="light"
              size="sm"
              style={{ backgroundColor: "#beb2b200", border: "none" }}
              onClick={() => handleZoom("in", imageType)}
            >
              <img src="/pluse-zoom-icon.svg" alt="zoom in" className="image-zomm-btn" />
            </Button>
            <Button
              variant="light"
              size="sm"
              style={{ backgroundColor: "#beb2b200", border: "none" }}
              onClick={() => handleZoom("out", imageType)}
            >
              <img src="/minus-icon.svg" alt="zoom out" className="image-zomm-btn" />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      <Row className="g-4 justify-content-center p-0">
        <Col md={6}>
          <ImageCard
            title="Subject Image"
            src={data.image}  
            zoom={subjectZoom}
            position={subjectPosition}
            imageType="subject"
          />
        </Col>
        <Col md={6}>
          <ImageCard
            title="Matched - Photo"
            src={data.image} 
            zoom={matchedZoom}
            position={matchedPosition}
            imageType="matched"
          />

          <div className="mt-3">
            <Row>
              {Object.entries(data).map(([key, value]) => (
                key !== 'image' && key !== 'subjectImage' && key !== 'id' && key !== 'expanded' && (
                  <Col xs={6} sm={4} key={key}>
                    <p className="text-muted mb-1">{key}</p>
                    <p className="fw-medium">{value}</p>
                  </Col>
                )
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MatchedPhotoUI;
