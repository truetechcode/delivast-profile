import React from 'react'
import '../assets/css/UserProfile.css';
import Avatar from '../assets/images/logo.png';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <h2 className="mb-4">My profile</h2>
            <Row>
                <Col sm={2} className="text-center">
                    <Image src="https://via.placeholder.com/150" roundedCircle className="profile-pics" />{' '}
                    <p className="mt-2">Photo</p>
                </Col>
                <Col sm={10}>
                    <Form className="form">
                        <Form.Group as={Row} controlId="formHorizontalFirstName">
                            <Form.Label column sm={4}>
                                First name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" placeholder="First name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalLastName">
                            <Form.Label column sm={4}>
                                Last name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="email" placeholder="Last name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                                Email
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPhoneNumber">
                            <Form.Label column sm={4}>
                                Phone number
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" placeholder="Phone number" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-5">
                            <Col sm={{ span: 10, offset: 2 }} className="button-container">
                                <Button type="submit">Save changes</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default UserProfile
