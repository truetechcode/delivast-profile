import React from 'react'
import '../assets/css/UserProfile.css';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
const axios = require('axios');

const UserProfile = () => {
    const [user, setUser] = React.useState({
        imageUrl: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    })

    React.useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                // handle success
                let { name, email, phone, picture } = response.data.results[0];

                setUser({ firstName: name.first, lastName: name.last, email: email, phone: phone, imageUrl: picture.medium })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    const formChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        let { firstName, lastName, email, phone } = user;

        alert(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}. Telephone: ${phone}`)
    }

    return (
        <div className="user-profile">
            <h2 className="mb-4">My profile</h2>
            <Row>
                <Col sm={2} className="text-center">
                    <Image src={user.imageUrl || "https://via.placeholder.com/150"} roundedCircle className="profile-pics" />{' '}
                    <p className="mt-2">Photo</p>
                </Col>
                <Col sm={10}>
                    <Form className="form" onSubmit={formSubmitHandler}>
                        <Form.Group as={Row} controlId="formHorizontalFirstName">
                            <Form.Label column sm={4}>
                                First name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control value={user.firstName} name="firstName" onChange={formChangeHandler} type="text" placeholder="First name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalLastName">
                            <Form.Label column sm={4}>
                                Last name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control value={user.lastName} name="lastName" onChange={formChangeHandler} type="text" placeholder="Last name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                                Email
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control value={user.email} name="email" onChange={formChangeHandler} type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPhoneNumber">
                            <Form.Label column sm={4}>
                                Phone number
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control value={user.phone} name="phone" onChange={formChangeHandler} type="tel" placeholder="Phone number" />
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
