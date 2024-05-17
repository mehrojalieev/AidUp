import React, { useState } from 'react'
import './PatientSettings.scss'
import { FaUser } from "react-icons/fa";
import { Button, Flex, Form, Input, Checkbox, Modal } from 'antd';

const PatientSettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className='patient-settings'>
            <h2 className='patient-settings-title'>Profile</h2>
            <div className="patient-profile-info">
                <FaUser className='patient-profile-icon' />
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout='vertical'
                    className='patient-profile-form'
                    size='large'
                >
                    <Flex className='fullname-container' gap={'10px'} align="center">
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            className='patient-profile-input'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            className='patient-profile-input'
                        >
                            <Input />
                        </Form.Item>
                    </Flex>
                    <Flex className='fullname-container' gap={'10px'} align="center">
                        <Form.Item
                            label="Birth Date"
                            name="birthdate"
                            rules={[{ required: true, message: 'Please input your birthdate!' }]}
                            className='patient-profile-input'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="remember"
                            valuePropName="checked"
                            className='patient-profile-input'
                        >
                            <Checkbox>Man</Checkbox>
                        </Form.Item>
                    </Flex>
                    <Flex className='fullname-container' gap={'10px'} align='center' justify='center'>
                        <Button onClick={showModal} className='patient-profile-submit'>
                            Change Password
                        </Button>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                        <Button type="primary" htmlType="submit" className='patient-profile-submit'>
                            Submit
                        </Button>
                    </Flex>

                </Form>
            </div>
        </div>
    )
}

export default PatientSettings