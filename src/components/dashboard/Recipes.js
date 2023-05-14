import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from '../header'
import Sign_img from '../register/Sign_img'
import { NavLink } from 'react-bootstrap'
import Sidenavbar from './Sidenavbar'
export default function Recipe() {
    const [RecipeName, setRecipeName] = useState();
    const [Description, setDescription] = useState();
    const [PrepTime, setPrepTime] = useState();
    const [ImageUrl, setImageUrl] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        const email = sessionStorage.getItem('email');
        fetch("https://localhost:44329/api/Recipes", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "recipeID": 0,
                "recipeName": RecipeName,
                "description": Description,
                "prepTime": PrepTime,
                "imageUrl": ImageUrl,
                "userEmail": email
            })
        })
            .then((response) => {
                if (response.statusText == "Conflict") {
                    alert("Recipie with this name already exists")
                } else {
                    // Set email as session value
                    sessionStorage.setItem('recipeName', RecipeName);
                    alert("Recipie create successfully")
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
                        <div className='left_data mt-3 p-3' style={{ width: "93%" }}>

                            <h3 className='text-center col-lg-6' style={{ color: "#FFC300" }}>Recipe</h3>

                            <div style={{ marginLeft: "100px" }}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                                        <Form.Control type="text" onChange={(e) => { setRecipeName(e.target.value) }} placeholder="Recipe Name" name="RecipeName" required />

                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                            placeholder="Enter Description"
                                            name="Description"
                                            required
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">

                                        <Form.Control type="number" onChange={(e) => { setPrepTime(e.target.value) }} placeholder="Enter PrepTime in min" name="PrepTime" required />

                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicPassword">

                                        <Form.Control type="text" onChange={(e) => { setImageUrl(e.target.value) }} placeholder="Enter Image Url" name="ImageUrl" required />

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