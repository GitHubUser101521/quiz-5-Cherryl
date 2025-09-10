"use client"
import { Form, Input, Select, Radio, DatePicker, Button, message, Card } from 'antd'

const { Option } = Select

function StudentRegisForm() {

    function onFinish(values) {
            console.log('Form data:', values)
            message.success('Registration successful! Check the console for the data.')
    }

    function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo)
        message.error('Please complete all required fields correctly.')
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            
        <Card
            title="Student Registration Form"
            bordered={false}
            className="w-full max-w-2xl shadow-lg rounded-lg"
        >
            <Form
                name="registration_form"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        { required: true, message: 'Enter your full name' },
                    ]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Enter your email' },
                        { type: 'email', message: 'Not a valid email' },
                    ]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                    label="Date of Birth"
                    name="dob"
                    rules={[
                        { required: true, message: 'Please select your date of birth!' },
                    ]}
                >
                    <DatePicker style={{ width: '100%' }} placeholder="Select Date of Birth" />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        { required: true, message: 'Please select your gender!' },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Grade"
                    name="grade"
                    rules={[
                        { required: true, message: 'Select your grade' },
                    ]}
                >
                    <Select placeholder="Select your grade">
                        <Option value="X">X</Option>
                        <Option value="XI">XI</Option>
                        <Option value="XII">XII</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Extracurricular Activity"
                    name="extracurricular"
                    rules={[
                        { required: true, message: 'Please select an extracurricular activity' },
                    ]}
                >
                    <Select placeholder="Select an activity">
                        <Option value="Basketball">Basketball</Option>
                        <Option value="Futsal">Futsal</Option>
                        <Option value="Music">Music</Option>
                        <Option value="Flag Raising Team">Flag Raising Team</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </div>
    )
}

export default StudentRegisForm
