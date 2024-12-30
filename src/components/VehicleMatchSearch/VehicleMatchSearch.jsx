import React, { useState } from 'react';
import { Input, Select } from 'antd';
import {  Button } from 'react-bootstrap';

import { useDropzone } from 'react-dropzone'; // Import useDropzone

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

const VehicleMatchSearch = () => {
  const [location, setLocation] = useState('Location');
  const [camera, setCamera] = useState('Camera');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [locationSearch, setLocationSearch] = useState('');




  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleCameraChange = (value) => {
    setCamera(value);
  };

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', { location, camera, registrationNumber, file });
  };

  // Use the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.jpeg,.png,.gif', // Define accepted file types
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);

      // Generate a preview for image files
      if (selectedFile && selectedFile.type.startsWith('image')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    },
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Vehicle Match Search</h2>
        <p className="text-gray-600">Upload an image to find matches.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="grid grid-cols-2 gap-4">
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

          <Select
            placeholder="Camera"
            value={camera}
            onChange={handleCameraChange}
            className="w-full"
          >
            {cameras.map((cam) => (
              <Select.Option key={cam.value} value={cam.value}>
                {cam.label}
              </Select.Option>
            ))}
          </Select>
        </div>

        <Input
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={handleRegistrationNumberChange}
          className="w-full"
        />

        <div className="text-center text-gray-500 my-4">OR</div>

        {/* Dropzone area for file input */}
        <div
          {...getRootProps()}
          className="drop-zone p-6 border-2 border-dashed border-gray-300 rounded-md text-center"
        >
          <input {...getInputProps()} className="hidden" />
          <label className="cursor-pointer text-gray-600">
                <img src='/upload-icon.svg'alt='img' className='upload-icon m-auto' style={{margin:'auto'}}/>
                <span>Drop files or click here</span>
                      </label>
        </div>
        <p className="text-center text-muted mt-2 mb-2">JPG, JPEG, PNG, GIF</p>  
        {/* File Preview */}
        {filePreview && (
          <div className="my-4">
            <img src={filePreview} alt="File Preview" className="w-70 h-70 object-cover mx-auto" />
          </div>
        )}
              <div className='text-center'>
               <Button type="submit" className="submit-btn text-center mt-2 pt-2">
                    Submit
                  </Button>
                  </div>
      </form>
    </div>
  );
};

export default VehicleMatchSearch;
