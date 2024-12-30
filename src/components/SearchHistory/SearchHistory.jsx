import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { Trash2 } from 'lucide-react';

const SearchHistory = () => {
  const [history, setHistory] = useState([
    {
      sno: 1,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
    {
      sno: 2,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
    {
      sno: 3,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
    {
      sno: 4,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
    {
      sno: 5,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
    {
      sno: 6,
      image: "profile.png",
      cameraName: "Main gate 3",
      watchName: "4:47pm",
      gender: "Male",
      location: "Ikea Junction",
      faceQuality: 33,
    },
  ]);

  const handleDelete = (sno) => {
    setHistory(history.filter((item) => item.sno !== sno));
  };

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Image" style={{ width: 50, height: 50 ,borderRadius:'50px' }} />,
    },
    {
      title: 'Camera Name',
      dataIndex: 'cameraName',
      key: 'cameraName',
    },
    {
      title: 'Watch Time',
      dataIndex: 'watchName',
      key: 'watchName',
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
      render: (text) => <span className="face-quality">{text}</span>, // Wrap Face Quality value in <span>

      className: 'face-quality-header'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (

        <Space size="middle">
            <Button className="view-btn" >View</Button>
            <Button className="view-h-btn btn btn-dark" >View History</Button>
          <Button onClick={() => handleDelete(record.sno)} type="danger">  

          <img src="delete.svg" alt="img" className="delete-btn"/>
</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container">
      <h2 className="mt-2 mb-2">Search History</h2>
      <Table className="custom-table"  columns={columns} dataSource={history} rowKey="sno" />
    </div>
  );
};

export default SearchHistory;
