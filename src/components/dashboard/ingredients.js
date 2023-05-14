import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from '../header'
import Sign_img from '../register/Sign_img'
import { NavLink } from 'react-bootstrap'
import Sidenavbar from './Sidenavbar'
export default function Ingredients() {
    const [IngredientName, setIngredientName] = useState();
    const [Quantity, setQuantityn] = useState();
    const [Unit, setUnit] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        
        const recipename = sessionStorage.getItem('recipeName');
        const email = sessionStorage.getItem('email');
        fetch("https://localhost:44329/api/Ingredients", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "ingredientID": 0,
                "ingredientName": IngredientName,
                "quantity": Quantity,
                "unit": Unit,
                "recipeName": recipename,
            })
        })
            .then((response) => {
                if(response.statusText=="Conflict"){
                    alert("Recipie with this name already exists")
                } else {
                    // Set email as session value
                    
                    // Redirect to home page
                    window.location.href = './ingredients';
                }
                console.log(response);
            }).then((data) => {
                console.log(data)
            })
    };


    return (
        <div style={{ backgroundImage: "url('')", backgroundRepeat: "no-repeat", backgroundSize: "1520px 700px", height: "100vh" }}>

            <div>

                <div>

                    <section className='d-flex justify-content-between'>
                    <Sidenavbar/>
                        <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                            
                                <h3 className='text-center col-lg-4' style={{ color: "#FFC300" }}>Ingredients</h3>
                              
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                        <Form.Control type="text" onChange={(e) => { setIngredientName(e.target.value) }} placeholder="Ingredients Name" name="RecipeName" required />

                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">

                                        <Form.Control type="number" onChange={(e) => { setQuantityn(e.target.value) }} placeholder="Ingredients Quantity" name="Description" required />

                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">

                                        <Form.Control type="text" onChange={(e) => { setUnit(e.target.value) }} placeholder="type like kg,gm,table spoon" name="PrepTime" required />

                                    </Form.Group>

                                    <Button variant="primary" className='col-lg-3.5' style={{ backgroundColor: "#FFB900" }} type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            
                        </div>
                    </section>


                </div>
            </div>
        </div>
    )
}