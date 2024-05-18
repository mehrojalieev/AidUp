import { Flex, Input, Button, Row, Col, Badge } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { FaPhoneAlt, FaCalendarAlt, FaStar } from 'react-icons/fa'
import './BookAppointment.scss'

const BookAppoinment = () => {

    type doctorType = {
        name: String,
        img: String,
        rate: Number,
        specialization: String,
        experience: String,
        location: String,
        description: String,
        language: String,
        price: String,
    }
    const doctors: doctorType[] = []

for (let index = 0; index < 12; index++) {
    doctors.push({
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: 4.5,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `1${index} 000 so'm`,
    })

}

    return (
        <div>
            <Flex justify='space-between' align='center'>
                <Input placeholder="Search for doctor" size='large' style={{ width: '300px' }} />
                <Button type='primary' size='large'><FilterOutlined /> Filter</Button>
            </Flex>
            <Row className='doctor-row-container'>
                {
                    doctors.map((doctor: any) => (
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