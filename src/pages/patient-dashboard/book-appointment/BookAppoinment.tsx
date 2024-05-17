import React from 'react'
import { Flex, Input, Button, Row, Col, Badge } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { doctors } from '../doctors-data';
import { FaPhoneAlt, FaCalendarAlt, FaStar } from 'react-icons/fa'
import './BookAppointment.scss'
const BookAppoinment = () => {
    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Input placeholder="Search for doctor" size='large' style={{ width: '300px' }} />
                <Button type='primary' size='large'><FilterOutlined /> Filter</Button>
            </Flex>
            <Row className='doctor-row-container'>
                {
                    doctors.map((doctor) => (
                        <Col className="gutter-row">
                            {doctor.rate >= 4 && <Badge.Ribbon text="Top Rated" className='doctor-badge' ></Badge.Ribbon>}
                            <Flex className="doctor-box">
                                <img alt="example" src={doctor.img} style={{ height: "110px", width: "110px", borderRadius: "8px" }} />
                                <div className='doctor-in-info'>
                                    <h3 className='doctor-in-name'>{doctor?.name}</h3>
                                    <p className='doctor-in-text-info'>{doctor?.specialization}</p>
                                    <p className='doctor-in-text-info'>Experience: {doctor?.experience} </p>
                                    <p className='doctor-in-text-info' style={{ display: "flex", alignItems: "center", gap: "4px" }}><FaStar color='orange' /> {doctor?.rate} </p>
                                    <Flex className='doctor-in-chat' align='center' justify='space-between'>
                                        <p className='doctor-in'>1 min: {doctor?.price}</p>
                                        <Flex align='center' gap='5px'>
                                            <div className='doctor-phone-icon'>
                                                <FaPhoneAlt />
                                            </div>
                                            <div className="doctor-phone-icon">
                                                <FaCalendarAlt />
                                            </div>
                                        </Flex>
                                    </Flex>
                                </div>
                            </Flex>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default BookAppoinment