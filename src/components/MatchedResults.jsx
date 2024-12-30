import React from 'react';
import { Card, Container, Row, Col, Image, CloseButton } from 'react-bootstrap';

function MatchedResults() {
  // Sample data for the list items
  const matchList = [
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    },
    {
      date: '27/7/2024',
      time: '12:39 pm',
      location: 'Ikea Junction',
      image: '/profile.png'
    }
  ];

  return (
    <Container className="p-4">
      <Card className="position-relative">
        
        <Card.Body>
         
          
          {/* Main Match Card */}
          <Card className="bg-light card-results-match mb-4">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <Image 
                    src="/profile.png"
                    roundedCircle
                    className="mb-3"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={8}>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Date/Time</h6>
                        <p className="mb-0">27/7/2024 | 12:39 pm</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Location</h6>
                        <p className="mb-0">Madhapur</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Gender</h6>
                        <p className="mb-0">Male</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Camera</h6>
                        <p className="mb-0">Main gate 1</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Age</h6>
                        <p className="mb-0">32</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">Beard</h6>
                        <p className="mb-0">NIL</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Match List */}
          {matchList.map((match, index) => {
            return (
              <Card key={index} className="bg-light card-results-match mb-2">
                <Card.Body className="py-2">
                  <Row className="align-items-center">
                    <Col xs={2} sm={1}>
                      <Image 
                        src={match.image} 
                        roundedCircle 
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={5} sm={6}>
                      <p className="mb-0">{`${match.date} | ${match.time}`}</p>
                    </Col>
                    <Col xs={5}>
                      <p className="mb-0 text-end">{match.location}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MatchedResults;

