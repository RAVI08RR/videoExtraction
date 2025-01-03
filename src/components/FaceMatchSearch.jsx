


import React, { useState } from 'react';
import { Tabs, Container, Form, Button } from 'react-bootstrap';
import { Select, Input } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FaceMatchSearch.css';
import PersonMatchSearch from './PersonMatchSearch/PersonMatchSearch';
import TeamResults from './TeamResults';
import VehicleMatchSearch from './VehicleMatchSearch/VehicleMatchSearch';

function FaceMatchSearch() {
  const [key, setKey] = useState('face');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [camera, setCamera] = useState('camera');
  const [location, setLocation] = useState('Location');
  const [locationSearch, setLocationSearch] = useState('');
  const [cameraSearch, setCameraSearch] = useState('');

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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleCameraChange = (value) => {
    setCamera(value);
  };

  return (
    <Container className="mt-0" fluid style={{ backgroundColor: '#F5F9F6', padding: '20px', height: '100vh' }}>
      {!submitted ? (
        <Tabs
          id="search-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 justify-content-center"
        >
          <Tabs.Tab eventKey="face" title="FACE">
            <h2 className="text-center mb-2 mt-5">Face Match Search</h2>
            <p className="text-center text-muted mb-4">Upload an image to find matches.</p>
            <Form className="upload-form" onSubmit={handleSubmit}>
              <div className="container select-box-dropdown p-0">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <Select
                      showSearch
                      value={location}
                      placeholder="Select a location"
                      optionFilterProp="children"
                      onChange={handleLocationChange}
                      filterOption={(input, option) =>
                        option?.label.toLowerCase().includes(input.toLowerCase())
                      }
                      options={locations.filter((loc) =>
                        loc.label.toLowerCase().includes(locationSearch.toLowerCase())
                      )}
                      dropdownRender={(menu) => (
                        <>
                          <div style={{ padding: '8px' }}>
                            <Input
                              placeholder="Search location"
                              value={locationSearch}
                              onChange={(e) => setLocationSearch(e.target.value)}
                            />
                          </div>
                          {menu}
                        </>
                      )}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="camera" className="form-label">Camera</label>
                    <Select
                      showSearch
                      value={camera}
                      placeholder="Select a camera"
                      optionFilterProp="children"
                      onChange={handleCameraChange}
                      filterOption={(input, option) =>
                        option?.label.toLowerCase().includes(input.toLowerCase())
                      }
                      options={cameras.filter((cam) =>
                        cam.label.toLowerCase().includes(cameraSearch.toLowerCase())
                      )}
                   
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  className="file-input"
                  accept=".jpg,.jpeg,.png,.gif"
                />
                <label htmlFor="fileInput" className="file-label">
                  <img src="/upload-icon.svg" alt="img" className="upload-icon m-auto" />
                  <span>Drop files or click here</span>
                </label>
                {file && <p className="selected-file mt-2">{file.name}</p>}
              </div>
              <p className="text-center text-muted mt-2">JPG, JPEG, PNG, GIF</p>
              <div className="text-center mt-4">
                <Button type="submit" className="submit-btn">
                  Submit
                </Button>
              </div>
            </Form>
          </Tabs.Tab>
          <Tabs.Tab eventKey="person" title="PERSON">
          <h2 className="text-center mb-2 mt-5">Person Match Search</h2>
            <p className="text-center text-muted mb-4">Upload an image to find matches.</p>
            <PersonMatchSearch />
          </Tabs.Tab>
          <Tabs.Tab eventKey="vehicle" title="VEHICLE">
            <VehicleMatchSearch />
          </Tabs.Tab>
        </Tabs>
      ) : (
        <TeamResults />
      )}
    </Container>
  );
}

export default FaceMatchSearch;


