import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-bootstrap'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registeraa = async ()=>{
    window.location.href = './register';
  }
  const handleSubmit = async (e) => {
   e.preventDefault();

   console.log("Form Submitted!..");
      console.log(email,password);
      fetch("https://localhost:44329/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              firstName:'n',
              lastName:'n',
              email:email,  
              password:password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("amish")
                if(data=="invalid"){
                    alert("Invalid Email or Password")
                }
                else {
                    sessionStorage.setItem('name', data.firstName);
                    alert(sessionStorage.getItem('name'))
                    // Set email as session value
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('isLoggedIn', true);
                    alert("Login successfull");
                    // Redirect to home page
                    window.location.href = './home';
                  }
            });
  };

  return (
    <>
    {/* <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div> */}
    <div>
            
            <div className='container mt-6'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" name="firstname" required  />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" name="lastname" required />

                            </Form.Group>

                            
                            <Button  variant="primary" className='col-lg-7' style={{background:"rgb(67,187,127"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Go for Register <span style={{color:'blue' }} ><NavLink onClick={registeraa} to="/register">SignUp</NavLink></span></p>
                    </div>
                    <Sign_img/>
                </section>
            </div>
           
        </div>
    
    </>
  );
}





