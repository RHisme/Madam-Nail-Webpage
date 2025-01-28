import React, { forwardRef } from "react";
import {Col, Row} from "antd";

import salonImages from './images.json';

const SalonGallery = forwardRef((props, ref) => {
    return (
        <div  className="gallery" ref={ref} id="gallery">
            <h1 className='title'> Gallery </h1>
            <Row gutter={[8, 16]}>
                {salonImages.map((image, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <img 
                        className='images' 
                        src={image} 
                        alt={`Nail Design ${index + 1}`} 
                         />
                    </Col>
                ))}
            </Row>

            <button className='btn' 
            onClick={()=>{window.open("https://www.google.com/maps/place/Madam's+Nail+Spa/@49.8326043,-97.0458788,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOxVpqn8QOHds846z70-dBEQviJUQFyegB3uFK4!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOxVpqn8QOHds846z70-dBEQviJUQFyegB3uFK4%3Dw560-h298-k-no!7i2460!8i1308!4m9!3m8!1s0x52ea7792c8e5f265:0x5fbc7702e8e4fcc1!8m2!3d49.8326043!4d-97.0458788!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11gj0j2qrf?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D")}}
            style={{marginBottom:'50px'}}> See more </button>


        </div>
    );
});

export default SalonGallery; 