import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from '../header'
import Sign_img from '../register/Sign_img'
import { NavLink } from 'react-bootstrap'
import Sidenavbar from './Sidenavbar'
export default function Recipe() {
    const [UserID, setUserID] = useState();
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        const email = sessionStorage.getItem('email');
        fetch("https://localhost:44329/api/Users/"+UserID, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "userID": UserID,
                "firstName": FirstName,
                "lastName": LastName,
                "email": Email,
                "password": Password
              })
        })
            .then((response) => {
                
                    // Set email as session value
                    
                    alert("user update successfully")
                    // Redirect to home page
                
                
                console.log(response);
            }).then((data) => {
                console.log(data)
            })
    }

    
    useEffect(() => {
        const email = sessionStorage.getItem('email');
        fetch("https://localhost:44329/api/Users/email/" + email, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {

                console.log(data);
                setUserID(data.userID)
                setFirstName(data.firstName)
                setLastName(data.lastName)
                setEmail(data.email)
                setPassword(data.password)
            });

    }, []);


    return (
        <div >




            <div>

                <div>

                    <section className='d-flex justify-content-between'>
                        <Sidenavbar />
                        <div className='left_data mt-3 p-3' style={{ width: "93%" }}>

                            <h3 className='text-center col-lg-6' style={{ color: "#FFC300" }}>Recipe</h3>

                            <div style={{ marginLeft: "100px" }}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                                        <Form.Control type="text" value={FirstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="Name" name="RecipeName" required />

                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                                        <Form.Control type="text" value={LastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Name" name="RecipeName" required />

                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">

                                        <Form.Control type="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter PrepTime in min" name="PrepTime" required />

                                    </Form.Group>

                                    <Button variant="primary" className='col-lg-5' style={{ backgroundColor: "#FFB900" }} type="submit">
                                        Submit
                                    </Button>


                                </Form>
                            </div>

                        </div>
                    </section>


                </div>
            </div>
        </div>
    )
}