import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image , Modal, Offcanvas } from 'react-bootstrap';
import { MoreVertical, Upload, Edit, Eye } from 'lucide-react';
import { X } from 'lucide-react';
import { MapPin } from 'lucide-react';

import { Select,Input } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamResults.css';
import MatchedPhotoUI from './MatchedPhotoUI';
import MatchedResults from './MatchedResults';
const { Option } = Select;



const locations = [
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'madhapur', label: 'Madhapur' },
  { value: 'banjara-hills', label: 'Banjara Hills' },
  { value: 'jubilee-hills', label: 'Jubilee Hills' },
  { value: 'begumpet', label: 'Begumpet' },
  { value: 'red-hills', label: 'Red Hills' },
  { value: 'mehdipatnam', label: 'Mehdipatnam' },
  { value: 'tolichowki', label: 'Tolichowki' },
  { value: 'nanal-nagar', label: 'Nanal Nagar' },
  { value: 'secunderabad', label: 'Secunderabad' },
];

const cameras = [
  { value: 'camera1', label: 'Camera 1' },
  { value: 'camera2', label: 'Camera 2' },
  { value: 'camera3', label: 'Camera 3' },
];



const styles = `
.result-card {
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid #eee;
}

.result-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.result-image-large {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.image-container {
  position: relative;
  width: fit-content;
}

.eye-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 4px;
  display: flex;
  justify-content: center;
}

.info-group {
  margin-bottom: 0;
}

.info-label {
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 4px;
}

.info-value {
  font-weight: 500;
  font-size: 15px;
}

.face-quality-box {
  background-color: #f8f9fa;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.more-options-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
}

.subject-image-card {
  margin-bottom: 1.5rem;
}

.upload-section {
    margin-bottom: 1.5rem;
    border: 1px dashed #263f43;
    padding: 23px;
    border-radius: 10px;
}
.expanded-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}
`;

function TeamResults() {
  const [results] = useState([
    {
      id: 1,
      image: "/profile.png",
      dateTime: "27/7/2024|12:39 pm",
      location: "Madhapur",
      age: 32,
      gender: "Male",
      camera: "Main gate 1",
      beard: "NIL",
      faceQuality: 62,
      expanded: true
    },
    {
      id: 2,
      image: "/profile.png",
      dateTime: "27/7/2024|12:39 pm",
      location: "Mindspace Junction",
      age: 40,
      gender: "Male",
      faceQuality: 23,
      expanded: false
    },
    {
      id: 3,
      image: "/profile.png",
      dateTime: "27/7/2024|12:39 pm",
      location: "Mindspace Junction",
      age: 40,
      gender: "Male",
      faceQuality: 23,
      expanded: false
    }
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [subjectImage, setSubjectImage] = useState("/placeholder.png");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [locationSearch, setLocationSearch] = useState('');
  const [cameraSearch, setCameraSearch] = useState('');
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setSubjectImage(URL.createObjectURL(file));
    }
  };



  const handleEyeClick = (result) => {
    setModalData(result);
    setShowModal(true);
  };

  const ExpandedCard = ({ result }) => (
    <Card className="result-card">

<div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Matched - Results</h2>
            <span className="text-muted">{results.length} Results Found</span>
          </div>
      <Card.Body className="p-0">
        <Row>
          <Col md={3}>
            <div className="image-container">
              <Image
                src={result.image}
                alt={`Result ${result.id}`}
                roundedCircle
                className="result-image-large"
              />
              <div className="eye-overlay"
                onClick={() => handleEyeClick(result)}
                style={{ cursor: "pointer" }}>
                <Eye size={20} color="white" />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <div className="info-label">Date/Time</div>
                  <div className="info-value" style={{display:'flex',gap:'5px'}}>
                  <img src='/date-icon.svg' alt='img' className='map-icon' />
                    {result.dateTime}</div>
                </div>
                <div className="mb-3">
                  <div className="info-label">Location</div>
                  <div className="info-value" style={{display:'flex',gap:'5px'}}> 
                    
                  <img src='/map-location.svg' alt='img' className='map-icon' />

                  
                  {result.location}</div>
                </div>
                <div>
                  <div className="info-label">Gender</div>
                  <div className="info-value" style={{display:'flex',gap:'5px'}}>
                  <img src='/Gender.svg' alt='img' className='gender-icon' />

                    
                    {result.gender}</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <div className="info-label">Camera</div>
                  <div className="info-value" style={{display:'flex',gap:'5px'}}>
                    
                  <img src='/date-icon.svg' alt='img' className='map-icon' />
                    
                    {result.camera}</div>
                </div>
                <div className="mb-3">
                  <div className="info-label">Age</div>
                  <div className="info-value">{result.age}</div>
                </div>
                <div>
                  <div className="info-label">Beard</div>
                  <div className="info-value">{result.beard}</div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={3} className="text-end">
            <div className="face-quality-box mb-3">
              <div className="info-label">Face Quality</div>
              <div className="info-value" style={{ fontSize: '24px' }}>{result.faceQuality}</div>
            </div>
            <Button className='view-h-btn' onClick={handleShow} variant="dark">View History</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  const SimpleCard = ({ result }) => (
    <Card className="result-card">


      
      <Card.Body className="p-0">
        <Row className="align-items-center">
          <Col xs="auto">
            <Image
              src={result.image}
              alt={`Result ${result.id}`}
              roundedCircle
              className="result-image"
            />
          </Col>
          
          <Col>
            <div className="info-group">
              <div className="info-label">Date/Time</div>
              <div className="info-value" style={{display:'flex',gap:'5px'}}> 
                    
                    <img src='/date-icon.svg' alt='img' className='map-icon' />
                
                
                {result.dateTime}</div>
            </div>
          </Col>

          <Col>
            <div className="info-group">
              <div className="info-label">Location</div>
              <div className="info-value" style={{display:'flex',gap:'5px'}}> 
                    
                    <img src='/map-location.svg' alt='img' className='map-icon' />
                
                
                {result.location}</div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="info-group">
              <div className="info-label">Age</div>
              <div className="info-value">{result.age}</div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="info-group">
              <div className="info-label">Gender</div>
              <div className="info-value" style={{display:'flex',gap:'5px'}}>
                  <img src='/Gender.svg' alt='img' className='gender-icon' />
                
                
                
                {result.gender}</div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="face-quality-box">
              <div className="info-label">Face Quality</div>
              <div className="info-value">{result.faceQuality}</div>
            </div>
          </Col>

          <Col xs="auto">
          
          <Button className='view-h-btn compare-btn-tr'  onClick={() => handleEyeClick(result)} variant="dark">Compare</Button>

     
        </Col>

          <Col xs="auto">
          
            <Button className='view-h-btn' onClick={handleShow} variant="dark">View History</Button>

       
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );


  const ModalContent = () => (
    modalData && (
      <Modal className='model-team-results'  size='lg'
      show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header className='matched-ui-header-result' >
        <button
          type="button"
          className="btn-close custom-close-btn"
          onClick={() => setShowModal(false)}
          aria-label="Close"
        >
         {/* <img src='/close-icon.svg' alt='close' className='close-icon'/> */}
         <X  className='icon-svg-close'/>

        </button>
        </Modal.Header >
        <MatchedPhotoUI/>
    
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    )
  );

  return (
    <Container fluid className="p-4">
      <style>{styles}</style>
      <Row>
        {/* Left Column */}
        <Col md={3}>
      
        <Card className="subject-image-card">
            <Card.Header>Subject Image</Card.Header>
            <Card.Body className="text-center">
              <Image src={subjectImage} alt="Subject" fluid />
            </Card.Body>
          </Card>
          <div className="upload-section">

          <Select
                placeholder="Select Location"
                style={{ width: "100%" }}
                dropdownRender={(menu) => (
                  <>
                    <div style={{ padding: "8px" }}>
                      <Input
                        placeholder="Search location"
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                      />
                    </div>
                    {menu}
                  </>
                )}
                options={locations.filter((loc) =>
                  loc.label.toLowerCase().includes(locationSearch.toLowerCase())
                )}
              />

          <Select placeholder="Camera" className="w-100 mb-3 mt-2">
            {cameras.map((camera) => (
              <Option key={camera.value} value={camera.value}>
                {camera.label}
              </Option>
            ))}
          </Select>
            <input type="file" id="photoUpload" accept="image/*" onChange={handleFileUpload} hidden />
            <label htmlFor="photoUpload" style={{ width: '100%' }}>
              <Button variant="dark" className="w-100 mb-2" as="div">
                {/* <Upload size={18} className="me-2" /> */}
                {uploadedFile ? uploadedFile.name : 'Upload New Photo'}
              </Button>
            </label>
            <small className="text-muted d-block text-center">JPG, JPEG, PNG, GIF</small>
          </div>

    
        </Col>


        {/* Right Column */}
        <Col md={9}>
      

          {results.map((result) => (
            result.expanded ? 
              <ExpandedCard key={result.id} result={result} /> :
              <SimpleCard key={result.id} result={result} />
          ))}
        </Col>
      </Row>
      <ModalContent />

      <Offcanvas show={show} onHide={handleClose} placement="end"  style={{ width: '60%' }}>
        <Offcanvas.Header className='matched-ui-header' closeButton>
          <Offcanvas.Title>Matched - Results
         </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <MatchedResults/>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default TeamResults;