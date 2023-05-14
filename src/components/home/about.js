import React, { useEffect, useState } from 'react'
import css from "./home.module.css"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
// import Himg from '/Homeimg';
import Sign_img from './Homeimg'
import footercss from "./footer.css"
export default function About() {

  const [user, setUser] = useState(null);
  const [recipies, setRecipies] = useState([]);

  const onclickmore = (event, param) => {
    console.log("amish");
    sessionStorage.setItem('itemid', param.recipeID);
    sessionStorage.setItem('recipiesname', param.recipeName);
    window.location.href = './more';
  };
  const getUser = () => {
    fetch(`https://localhost:44329/api/Recipes`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetch(`https://localhost:44329/api/Recipes`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status != 400)
          setRecipies(data);
      });
  }, [])

  return (
    <>

      

      <section class="about_section layout_padding" style={{backgroundColor: "#222831"}}>
        <div class="container">

        <div class="row" >
  <div class="col-md-6 bg1" style={{backgroundColor: "#222831"}}>
    <div class="img-box detail1">
      <Sign_img />
    </div>
  </div>
  <div class="col-md-6">
    <div class="detail-box">
      <div class="heading_container">
        <h2 style={{color: "white",marginTop:"40%"}}>
          We Are Feane
        </h2>
      </div>
      <p style={{color: "white"}}> 
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injected humour, or randomised words which don't look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
        the middle of text. All
      </p>
      
    </div>
  </div>
</div>







        </div>
      </section>
     








<section class="about_section layout_padding" style={{backgroundColor: "#222831"}}>
        <div class="container">

        <div class="row" >
  <div class="col-md-6 bg1" style={{backgroundColor: "#222831",width: "33%"}}>
    <div class="img-box detail1">
    <div class="detail-box">
      <div class="heading_container">
        <h2 style={{color: "white",marginTop:"40%"}}>
          Contact Us
        </h2>
      </div>
      <div style={{textAlign:"center" ,marginTop:"30px"}}>
      <p style={{color: "white"}}> 
        location
        
      </p>
      <p style={{color: "white"}}> 
        
        9662846045
        
      </p>
      <p style={{color: "white"}}> 
        doamdiyaamish@gmail.com
      </p>
      </div>
      
    </div>
    </div>
  </div>
  <div class="col-md-6 bg1" style={{backgroundColor: "#222831",width: "33%"}}>
    <div class="img-box detail1">
    <div class="detail-box">
      <div class="heading_container">
        <h2 style={{color: "white",marginTop:"40%"}}>
          Feane
        </h2>
      </div>
      <p style={{color: "white",textAlign:"center" }}> 
      Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
      </p>
      
    </div>
    </div>
  </div><div class="col-md-6 bg1" style={{backgroundColor: "#222831",width: "33%"}}>
    <div class="img-box detail1">
    <div class="detail-box">
      <div class="heading_container">
        <h2 style={{color: "white",marginTop:"40%"}}>
          We Are Feane
        </h2>
      </div>
      <p style={{color: "white"}}> 
      </p>
      
    </div>
    </div>
  </div>

</div>







        </div>
      </section>
     

    </>
  )
}