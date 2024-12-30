import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { DatePicker, Select, Input } from "antd"; // Import Ant Design components
import moment from "moment"; // Import moment for date formatting

const { Option } = Select;

const PersonMatchSearch = () => {
  const [locationSearch, setLocationSearch] = useState("");
  const [cameraSearch, setCameraSearch] = useState("");

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

  return (
    <Container className="text-center p-20" style={{ backgroundColor: "#F5F9F6", padding: "20px" }} fluid>
      <Form>
        <Row className="justify-content-center">
          <Col md={2}>
            <Form.Group controlId="fromDate">
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="From Date Time"
                defaultValue={moment()} // default value as current time
                style={{ width: "100%" }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="toDate">
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="To Date Time"
                defaultValue={moment()} // default value as current time
                style={{ width: "100%" }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="location">
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
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="camera">
              <Select
                placeholder="Select Camera"
                style={{ width: "100%" }}
            
                options={cameras.filter((cam) =>
                  cam.label.toLowerCase().includes(cameraSearch.toLowerCase())
                )}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          className="mt-4 px-5 submit-btn btn btn-primary"
          style={{ backgroundColor: "#344E41", border: "none" }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PersonMatchSearch;
