import React, {useState, useRef} from "react";
import "./salonIntroduction.css";
import {Rate, Collapse, Image, Flex, Tag, Carousel} from "antd";

import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { ClockCircleOutlined } from '@ant-design/icons';
import { SlLike } from "react-icons/sl";
import { IoMdShare } from "react-icons/io";


import imageData from './images.json';


const hoursOfOperation = [
    { day: 'Sunday', hours: '11am - 4:30pm' },
    { day: 'Monday', hours: '10am - 7pm' },
    { day: 'Tuesday', hours: '10am - 7pm' },
    { day: 'Wednesday', hours: '10am - 7pm' },
    { day: 'Thursday', hours: '9am - 8pm' },
    { day: 'Friday', hours: '9am - 8pm' },
    { day: 'Saturday', hours: '9am - 5pm' },
];
  
const getCurrentDayInfo = () => {
    const today = new Date().getDay();
    return hoursOfOperation[today]; // Get today's hours
};



const SalonIntroduction = ({ galleryRef }) => {
    var rateValue = 4.1; 
    var totalRate = 99;
    const currentDayInfo = getCurrentDayInfo(); // Get current day's hours
    const currentDayIndex = new Date().getDay(); // Get the current day's index



   

    const salonDescription = "Madam's Nail Spa is a modern and stylish salon offering a variety of nail care and beauty services. Known for its relaxing ambiance, skilled technicians, and high-quality products, the spa provides manicures, pedicures, nail art, and other treatments designed to pamper and rejuvenate clients. Whether you're looking for a quick touch-up or a luxurious experience, Madam's Nail Spa ensures exceptional service tailored to your needs.";
    //Toggle service description content
    const [isExpanded, setIsExpanded] = useState(false);

     const toggleDescription = () => {
      setIsExpanded(prevState => !prevState);
     }
     

     const scrollToGallery = () => {
        if (galleryRef.current) {
          galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        
        <div className="salonIntroduction" >
            <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                <Carousel 
                    autoplay
                    arrows
                    infinite
                    autoplaySpeed={1800}
                    className='carousel'
                    
                >
                    {imageData.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className='image'
                        />
                    ))}
                </Carousel>

                <button
                className='btn4'
                onClick={scrollToGallery}
                style={{
                   width:'10rem',
                   marginTop: '10px',
                   marginBottom: '60px'
                }}
                > 
                Go to Gallery </button>
             <div/>
            </div>
             <div className="salonInfo"> 
                <h1 className='title' style={{color: "black"}}> Madam's Nail Spa</h1>
                <div className="rate" onClick={() => {window.open("https://www.google.com/maps/place/Madam's+Nail+Spa/@49.8330425,-97.0491001,17z/data=!4m8!3m7!1s0x52ea7792c8e5f265:0x5fbc7702e8e4fcc1!8m2!3d49.8326043!4d-97.0458788!9m1!1b1!16s%2Fg%2F11gj0j2qrf?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D")}}>
                    <div>
                    <span style={{fontWeight:600}}> {rateValue}</span>
                    <Rate disabled allowHalf defaultValue={rateValue}/>
                    <span style={{color:'purple'}}> ({totalRate}) </span>
                    </div>
                    <div className="icon" >
                        <SlLike onClick={()=> {window.open("https://www.facebook.com/profile.php?id=100077995660238")}} />
                        <IoMdShare onClick={()=> {window.open("https://www.facebook.com/profile.php?id=100077995660238")}}/>
                    </div>
                </div>
                <div className="contact" style={{cursor:'pointer'}} onClick={() => {window.location.href = "tel:+12045896245"}} >
                    <FiPhoneCall/>
                    <span > (204) 589-6245 </span>
                    
                </div>
                <div className="location" style={{cursor:'pointer'}} onClick={()=> {window.open("https://www.google.com/maps/place/Madam's+Nail+Spa/@49.8330425,-97.0491001,17.25z/data=!4m6!3m5!1s0x52ea7792c8e5f265:0x5fbc7702e8e4fcc1!8m2!3d49.8326043!4d-97.0458788!16s%2Fg%2F11gj0j2qrf?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D")}}>
                    <FaLocationDot/>
                    <span> 50 Sage Creek Blvd #805, Winnipeg, MB R3X 0J6</span>
                </div>

                <button className='btn' onClick={() => {window.open("https://www.vagaro.com/madamsnailspa/services")}}> 
                    <IoPencilSharp />   
                    Book Now 
                </button>



                <div className="hour">
                    {/*<h1 className='title' style={{color: "black"}}> Hours</h1>*/}

                    <Collapse expandIconPosition="end" bordered={false} >

                        <Collapse.Panel className='operationStatus'
                        
                        header={
                        <div style={{
                            display:'flex',
                            justifyContent:'space-between', 
                            color:'var(--SecondaryColor)', 
                            fontSize:'1rem', 
                            fontWeight:'500',
                            border: "none",
                            }}>
                          
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ClockCircleOutlined />
                                <span>Open from:</span>
                            </div>
    
                            <div>{currentDayInfo.hours}</div>
                            
                                    
                        
                        </div>
                        
                        }
                        >
                            <div className="timeContainer">
                                {hoursOfOperation.map(({ day, hours }, index) => (
                                    <div key={day} className='timeList'>
                                        <span className='timeBox' style={{ fontWeight: currentDayIndex === index ? 'bold' : 'normal' }}>
                                            <span className='dayspan'> {day}: </span>
                                            <span className='hoursspan'> {hours} </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                        </Collapse.Panel>
                    </Collapse>
                </div>

                <div className="aboutUs">
                    <h3>  About Us  </h3>
                    <Flex gap= '10px 4px' className='serviceCategories'>
                        <Tag color='magenta' className='tag'> Nails </Tag>
                        <Tag color='orange'className='tag'> Spa </Tag>
                        <Tag color='cyan' className='tag'> Tinding </Tag>
                        <Tag color= 'green' className='tag'> Waxing </Tag>

                    </Flex>
                    <div className='descriptionContent'>
                        <p className={isExpanded ? 'fullDescription' : 'description'}>
                            {isExpanded 
                                ? salonDescription 
                                : (salonDescription.length > 200 
                                    ? salonDescription.slice(0, 190) + '...' 
                                    : salonDescription) 
                            }
                            {salonDescription.length > 200 && !isExpanded && (
                                <button onClick={toggleDescription} className="btn5">
                                    See More
                                </button>
                            )}
                            {salonDescription.length > 200 && isExpanded && (
                                <button onClick={toggleDescription} className="btn5">
                                    See Less
                                </button>
                            )}
                        </p>

                    </div>
                </div>

                      
             </div>


             
        </div>


    );
}

export default SalonIntroduction;