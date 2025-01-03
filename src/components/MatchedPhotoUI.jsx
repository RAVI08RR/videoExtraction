import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MatchedPhotoUI() {
  const [subjectZoom, setSubjectZoom] = useState(1);
  const [matchedZoom, setMatchedZoom] = useState(1);
  const [subjectPosition, setSubjectPosition] = useState({ x: 0, y: 0 });
  const [matchedPosition, setMatchedPosition] = useState({ x: 0, y: 0 });

  const matchedPhotoMetadata = {
    dateTime: '2/7/2024 | 12:39 pm',
    camera: 'Main gate 1',
    gender: 'Male',
    location: 'Madhapur',
    age: 32,
    beard: 'NIL',
    faceQuality: 62,
  };

  const handleZoom = (zoomType, imageType) => {
    const setZoom = imageType === 'subject' ? setSubjectZoom : setMatchedZoom;
    const currentZoom = imageType === 'subject' ? subjectZoom : matchedZoom;
    const newZoom = zoomType === 'in' ? Math.min(currentZoom + 0.5, 3) : Math.max(currentZoom - 0.5, 1);
    setZoom(newZoom);

    if (newZoom === 1) {
      imageType === 'subject' ? setSubjectPosition({ x: 0, y: 0 }) : setMatchedPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseMove = (e, imageType) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const zoom = imageType === 'subject' ? subjectZoom : matchedZoom;
    if (zoom > 1) {
      const setPosition = imageType === 'subject' ? setSubjectPosition : setMatchedPosition;
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
          style={{ height: '505px', overflow: 'hidden' }}
          onMouseMove={(e) => handleMouseMove(e, imageType)}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              transform: `scale(${zoom}) translate(${position.x}%, ${position.y}%)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <img
              src={src}
              alt={title}
              className="img-fluid rounded w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
            <Button
              variant="light"
              size="sm"
              style={{ backgroundColor: '#beb2b200', border: 'none' }}
              onClick={() => handleZoom('in', imageType)}
            >
              <img src="/pluse-zoom-icon.svg" alt="zoom in" className="image-zomm-btn" />
            </Button>
            <Button
              variant="light"
              size="sm"
              style={{ backgroundColor: '#beb2b200', border: 'none' }}
              onClick={() => handleZoom('out', imageType)}
            >
              <img src="/minus-icon.svg" alt="zoom out" className="image-zomm-btn" />
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-muted mb-1">Date/Time</p>
          <p className="fw-medium">{matchedPhotoMetadata.dateTime}</p>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="py-4">
      <Row className="g-4">
        <Col md={6}>
          <ImageCard
            title="Subject Image"
            src="/match-1.png"
            zoom={subjectZoom}
            position={subjectPosition}
            imageType="subject"
          />
        </Col>
        <Col md={6}>
          <ImageCard
            title="Matched - Photo"
            src="/profile.png"
            zoom={matchedZoom}
            position={matchedPosition}
            imageType="matched"
          />
          <div className="mt-3">
            <Row className="g-3">
              {Object.entries(matchedPhotoMetadata).map(([key, value]) => (
                <Col xs={3} key={key}>
                  <p className="text-muted mb-1">{key}</p>
                  <p className="fw-medium">{value}</p>
                </Col>
              ))}
              <Col xs={3}>
              <div className="mt-0 bg p-3 rounded" style={{backgroundColor:'#C0EDF4'}}>
            <div className="flex justify-content-between align-items-center" style={{flexDirection:'column'}}>
              <span className="fw-medium">Face Quality</span>
              <span className="fs-4 fw-bold">{matchedPhotoMetadata.faceQuality}</span>
            </div>
          </div>
              </Col>
            </Row>
          </div>
     
        </Col>
      </Row>
    </Container>
  );
}

export default MatchedPhotoUI;

