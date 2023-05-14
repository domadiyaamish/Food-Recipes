import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-bootstrap'
export default function RegisterUser() {
    const [Firstname, setFirstName] = useState();
    const [Lastname, setLastName] = useState();
    const [Email, setEmail] = useState();

    const [Password, setPassword] = useState();

    const loginaa = async ()=>{
        window.location.href = './login';
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log(Password);
    
        fetch("https://localhost:44329/api/Users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "userID": 0,
                "firstName": Firstname,
                "lastName": Lastname,
                "email": Email,
                "password": Password
            })
        }).then((response) => {
            if(response.statusText=="Conflict"){
                alert("User with this email already exists")
            } else {
                // Set email as session value
                sessionStorage.setItem('email', Email);
                sessionStorage.setItem('isLoggedIn', true);
                alert("User create successfully")
                // Redirect to home page
                window.location.href = './home';
            }
            console.log(response); // do something with response JSON
        });
    };
    
  

    return (
        <div>
            
            <div className='container mt-6'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Enter Firstname" name="firstname" required  />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="text" onChange={(e) => { setLastName(e.target.value) }} placeholder="Enter LastName" name="lastname" required />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control  type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" name="email" required  />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">

                                <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" name="password" required />

                            </Form.Group>
                            <Button variant="primary" className='col-lg-7' style={{background:"rgb(67,187,127"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span style={{color:'blue' }} ><NavLink onClick={loginaa} to="./login">SignIn</NavLink></span></p>
                    </div>
                    <Sign_img/>
                </section>
            </div>
           
        </div>
    )
}