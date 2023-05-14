import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from '../header'
import Sign_img from '../register/Sign_img'
import { NavLink } from 'react-bootstrap'
import Sidenavbar from './Sidenavbar'
import { Link } from 'react-router-dom';
export default function Instruction() {
    const [InstructionText, setInstructionText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        const recipename = sessionStorage.getItem('recipeName');
        fetch("https://localhost:44329/api/Instructions", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "instructionID": 0,
                "instructionText": InstructionText,
                "recipeName": recipename
            })
        })
            .then((response) => {
                if (response.statusText == "Conflict") {
                    alert("Recipie with this name already exists")
                } else {
                    // Set email as session value
                    alert("instruction step create successfully")
                    // Redirect to home page
                    window.location.href = './instructions';
                }
                console.log(response);
            }).then((data) => {
                console.log(data)
            })
    };



    return (
        <div >

            <div>

                <div>

                    <section className='d-flex justify-content-between'>
                        <Sidenavbar />
                        <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                            <div>
                                <h3 className='text-center col-lg-5' style={{ color: "#FFC300" }}>Instruction</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                        <Form.Control as="textarea"
                                            rows={3} onChange={(e) => { setInstructionText(e.target.value) }} placeholder="Enter one Instruction step" name="InstructionText" required />

                                    </Form.Group>
                                    <Button variant="primary" className='mb-3 col-lg-3.5' style={{ backgroundColor: "#FFB900",marginRight:"10px" }} type="submit">
                                        Submit
                                    </Button>
                                    <Button as={Link} to="/ingredients"className='mb-3 col-lg-3.5'  variant="primary"  style={{ backgroundColor: "#FFB900" }}>
                                        Go to Another Page
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