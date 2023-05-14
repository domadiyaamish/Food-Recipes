import React, { useEffect, useState } from 'react'
import css from "./home.module.css"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
// import Himg from '/Homeimg';
import Sign_img from './Homeimg'
import footercss from "./footer.css"
export default function Home() {

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

      <div className={css.bg}>
        <div class={css.detail}>
          <h1>
            Fast Food Recipe
          </h1>
          <p>
          Make a fast food feast at home with our recipes for Burger Americana, Skinny Fries and Thick Strawberry Shakes. After just one bite you’ll never go back to drive-thru fare.
          </p>
          <div class={css.btn}>
          </div>
        </div>
      </div>
      <div className='our-menu'>
        <h2>Our Recipe</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "13%", marginRight: "0%" }}>

      {recipies.slice(0,6).reverse().map((item) => {
  return (
    <Card className="d-flex justify-content-between" style={{ 
      width: "25%", 
      borderRadius: "20px", 
      borderColor: "black", 
      borderWidth: "1px", 
      margin: "20px", 
      backgroundColor: "#222831",  // set background color to #222831
      border: "none"              // remove border
    }}>
      
      <Card.Img variant="top" src={item.imageUrl} style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "50px", height: "250px", borderBottomRightRadius: "0px"}} />
      <Card.Body >
        <Card.Title style={{ color: "white" }}>{item.recipeName}</Card.Title>
        <Card.Text style={{ color: "white" }}>
            {item.description}
        </Card.Text>
        <Button onClick={event => onclickmore(event, item)} variant="warning" className="rounded-circle" style={{ width: "50px", height: "50px", bottom: "-25px", right: "-25px", border: "none", color: "white", marginRight: "1px", marginLeft: "84%" }}><FontAwesomeIcon icon={faPlus} /></Button>
      </Card.Body>
    </Card>
  );
})}



      </div>
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
     





<section class="client_section layout_padding-bottom">
  <div class="container">
    <div class="heading_container heading_center psudo_white_primary mb_45">
      <h2>
        What Says Our Recipe
      </h2>
    </div>
    <div class="carousel-wrap row ">
      <div class="owl-carousel client_owl-carousel">
        <div class="item">
          <div class="box">
            <div class="detail-box">
              <p>
              If you’re passionate about cooking, starting a homemade or cottage food business is can be a fulfilling way to supplement your existing income. We’ve compiled a large list of cottage food business ideas here if you’re looking for inspiration on food items that work.
              </p>
              
            </div>
            <div class="img-box">
              <img src="images/client1.jpg" alt="" class="box-img"/>
            </div>
          </div>
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
      <p style={{color: "white",textAlign:"center"}}> 
      "Fresh and delicious, always the mission.
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