import React, { useState, useCallback, useEffect } from 'react';
import { Table, Select, DatePicker, Form, message } from 'antd';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { X } from 'lucide-react';

const { RangePicker } = DatePicker;

const PersonMatches = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCameras, setSelectedCameras] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [form] = Form.useForm();

  const locations = ['Ikea Junction', 'Main Gate', 'Side Entrance', 'Parking Lot'];
  const cameras = ['Main gate 3', 'Main gate 21', 'Side Camera 1', 'Parking Camera'];

  useEffect(() => {
    // Simulating initial data fetch
    setLoading(true);
    setTimeout(() => {
      setData([
        {
          key: 1,
          sno: 1,
          image: "/profile.png",
          cameraName: "Main gate 3",
          watchTime: "10-12-2024- 4:47pm",
          gender: "Male",
          location: "Ikea Junction",
          faceQuality: 33,
        },
        {
          key: 2,
          sno: 2,
          image: "/profile.png",
          cameraName: "Main gate 3",
          watchTime: "10-12-2024- 4:47pm",
          gender: "Male",
          location: "Ikea Junction",
          faceQuality: 18,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = useCallback((values) => {
    setLoading(true);
    console.log('Form values:', values);
    // Simulating an API call or data processing
    setTimeout(() => {
      setLoading(false);
      message.success('Filters applied successfully');
      // Update data or perform other actions based on filter values
    }, 1000);
  }, []);

  const handleRemoveCamera = useCallback((camera) => {
    setSelectedCameras(prev => prev.filter(cam => cam !== camera));
    form.setFieldsValue({ camera: selectedCameras.filter(cam => cam !== camera) });
  }, [selectedCameras, form]);

  const handleRemoveLocation = () => {
    setSelectedLocation(null);
    form.setFieldsValue({ location: null });
  };

  const handleRemoveDate = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    form.setFieldsValue({ startDate: null, endDate: null });
  };

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      width: 80,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      render: (text) => (
        <img 
          src={text} 
          alt="Profile" 
          style={{ 
            width: 50, 
            height: 50, 
            borderRadius: '50%',
            objectFit: 'cover'
          }} 
        />
      ),
    },
    {
      title: 'Camera Name',
      dataIndex: 'cameraName',
      key: 'cameraName',
    },
    {
      title: 'Watch Time',
      dataIndex: 'watchTime',
      key: 'watchTime',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Face Quality',
      dataIndex: 'faceQuality',
      key: 'faceQuality',
      render: (value) => (
        <div className="px-3 py-1 rounded-lg border inline-block">
          {value}
        </div>
      ),
    },
  ];

  return (
    <div className="person-matches mt-2">
      <Container fluid>
        

        <Row>
          <Col md={3}>
            <div className="filters-section bg-gray-50 p-4 pt-2 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 text-left fs-25" style={{fontSize:'25px',lineHeight:'44px'}}>Filters</h4>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="filter-form"
              >
                <Form.Item 
                  label="Start Date" 
                  name="startDate"
                  className="form-item"
                >
                  <DatePicker
                    className="w-full"
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    onChange={(date) => setSelectedStartDate(date)}
                  />
                </Form.Item>

                <Form.Item 
                  label="End Date" 
                  name="endDate"
                  className="form-item"
                >
                  <DatePicker
                    className="w-full"
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    onChange={(date) => setSelectedEndDate(date)}
                  />
                </Form.Item>

                <Form.Item 
                  label="Location" 
                  name="location"
                  className="form-item"
                >
                  <Select className="w-full" onChange={setSelectedLocation} value={selectedLocation}>
                    {locations.map((location) => (
                      <Select.Option key={location} value={location} className="location-select-boxes">
                        {location}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item 
                  label="Camera" 
                  name="camera"
                  className="form-item"
                >
                  <Select 
                    className="w-full selection-fillter"
                    mode="multiple"
                    onChange={setSelectedCameras}
                    value={selectedCameras}
                  >
                    {cameras.map((camera) => (
                      <Select.Option key={camera} value={camera} >
                        {camera}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Button 
                  type="primary"
                  htmlType="submit"
                  className="submit-button w-full bg-primary"
                  loading={loading}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

          <Col md={9}>
            <div className="results-section bg-white rounded-lg p-4">
              <div className="header-section flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Person Matches</h1>
                <div className="results-count text-gray-600">
             
                </div>
              </div>

              <div className="selected-filters flex flex-wrap gap-2 mb-4">
              <h6 className='fs-16 pl-2 pt-2'> {data.length} Results Found</h6>    
                {selectedCameras.map((camera) => (
                  <div 
                    key={camera}
                    className="filter-tag flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    <span>{camera}</span>
                    <button
                      onClick={() => handleRemoveCamera(camera)}
                      className="remove-button hover:bg-gray-200 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {selectedLocation && (
                  <div className="filter-tag flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <span>{selectedLocation}</span>
                    <button
                      onClick={handleRemoveLocation}
                      className="remove-button hover:bg-gray-200 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
                {selectedStartDate && selectedEndDate && (
                  <div className="filter-tag flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <span>
                      {selectedStartDate.format('YYYY-MM-DD HH:mm')} - {selectedEndDate.format('YYYY-MM-DD HH:mm')}
                    </span>
                    <button
                      onClick={handleRemoveDate}
                      className="remove-button hover:bg-gray-200 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}


              </div>

              <Table 
                columns={columns} 
                dataSource={data}
                pagination={{ pageSize: 10 }}
                className="results-table border rounded-lg custom-table"
                loading={loading}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonMatches;
