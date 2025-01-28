import React from 'react';
import { UpOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import './FloatButton.css';

function FloatingButton() {
  const openMessenger = () => {
    // Open the Messenger link (replace with your own page username)
    window.open('https://m.me/110130334916717', '_blank');
  };

  return (
    <FloatButton.Group 
      className='Group'
      shape='circle' 
      icon={<UpOutlined />} 
      trigger='click' 
      badge={{ dot: true }}
    > 
      <FloatButton  
        icon={<PhoneOutlined />} 
        badge={{ dot: true }}
        onClick={() => { window.location.href = "tel:+12045896245"; }}
      />

      <FloatButton  
        icon={<MessageOutlined />} 
        onClick={openMessenger} 
      />

    </FloatButton.Group>
  );
}

export default FloatingButton;
