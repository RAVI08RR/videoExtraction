import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Select, Input, Skeleton, notification } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FaceMatchSearch.css';
import TeamResults from './TeamResults';
import { fetchVideoUpload } from '../Apis/callbacks';

function FaceMatchSearch() {
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [camera, setCamera] = useState('camera');
  const [location, setLocation] = useState('Location');
  const [locationSearch, setLocationSearch] = useState('');
  const [cameraSearch, setCameraSearch] = useState('');
  const [loading, setLoading] = useState(false);

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
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      let data = await fetchVideoUpload(formData);
      if (data) {
        notification.success({
          message: "Upload Successful",
          description: "Your video has been uploaded successfully.",
        });
        // Set submitted to true to show TeamResults component
        setSubmitted(true);
      } else {
        notification.error({
          message: "Upload Failed",
          description: "Failed to upload video. Please try again.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Unexpected Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
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
        <>
          <h2 className="text-center mb-2 mt-5">Face Match Search</h2>
          <p className="text-center text-muted mb-4">Upload an image to find matches.</p>
          <Form className="upload-form" onSubmit={handleSubmit}>
            <div className="container select-box-dropdown p-0">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  {loading ? (
                    <Skeleton.Input active size="large" block />
                  ) : (
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
                  )}
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="camera" className="form-label">Camera</label>
                  {loading ? (
                    <Skeleton.Input active size="large" block />
                  ) : (
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
                      dropdownRender={(menu) => (
                        <>
                          <div style={{ padding: '8px' }}>
                            <Input
                              placeholder="Search camera"
                              value={cameraSearch}
                              onChange={(e) => setCameraSearch(e.target.value)}
                            />
                          </div>
                          {menu}
                        </>
                      )}
                      style={{ width: '100%' }}
                    />
                  )}
                </div>
              </div>
            </div>
            {loading ? (
              <Skeleton.Image active style={{ width: '100%', height: '200px' }} />
            ) : (
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
                  <img src="/upload-icon.svg" alt="Upload" className="upload-icon m-auto" />
                  <span>Drop files or click here</span>
                </label>
                {file && <p className="selected-file mt-2">{file.name}</p>}
              </div>
            )}
            <p className="text-center text-muted mt-2">JPG, JPEG, PNG, GIF</p>
            <div className="text-center mt-4">
              <Button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Processing...' : 'Submit'}
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <TeamResults />
      )}
    </Container>
  );
}

export default FaceMatchSearch;