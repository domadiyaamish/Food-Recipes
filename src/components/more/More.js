import React, { useEffect, useState } from 'react'
import css from "./home.module.css"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColonSign, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
// import Himg from '/Homeimg';
import Sign_img from './Homeimg'
import footercss from "./footer.css"
export default function More() {

  const [user, setUser] = useState(null);
  const [recipiesname, setRecipiesname] = useState();
  const [description, setDescription] = useState();
  const [prepTime, setPrepTime] = useState();
  const [ImageUrl, setImageUrl] = useState();
  const [instruction, setInstruction] = useState([]);
  const [ingredient, setIngredient] = useState([]);


  const getUser = () => {
    const id = sessionStorage.getItem('itemid');
    const recipeName = sessionStorage.getItem('itemid');

    fetch("https://localhost:44329/api/Recipes/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    const i = sessionStorage.getItem('itemid');
    const re = sessionStorage.getItem('recipiesname');
    fetch("https://localhost:44329/api/Recipes/" + i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("amish");

        console.log(data);
        setRecipiesname(data.recipeName);
        setDescription(data.description);
        setPrepTime(data.prepTime);
        setImageUrl(data.imageUrl);

      });
    console.log("re")
    console.log(re)
    fetch("https://localhost:44329/api/Instructions/instruction/" + re)
      .then((res) => res.json())
      .then((data) => {
        console.log("amish doamdiya");
        setInstruction(data);
        console.log(instruction);
      });
    fetch("https://localhost:44329/api/Ingredients/ingredient/" + re)
      .then((res) => res.json())
      .then((data) => {
        console.log("ingredient");
        setIngredient(data);
        console.log(data);
      });


  }, []);
  return (
    <>


      
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "13%", marginRight: "0%" }}>





      </div>
      <section class="about_section layout_padding" style={{ backgroundColor: "#222831" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 bg1" style={{ backgroundColor: "#222831" }}>
              <div class="img-box detail1">
                <div className='right_data mt-5' style={{ width: '100%' }}>
                  <div className='sign_img mt-5'>
                    <img src={ImageUrl} alt='' />
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h1 style={{ color: "white", marginTop: "center" }}>
                    {recipiesname}
                  </h1>
                </div>
                <h5 style={{ color: "white" }}>Time: {prepTime}min</h5>
                <h4>
                  <p style={{ color: "white" }}>
                    {description}
                  </p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about_section layout_padding" style={{ backgroundColor: "#222831" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2 style={{ color: "white", marginTop: "center" }}>
                    Step are
                  </h2>
                </div >
                <div style={{ color: "white" }}>
                  {instruction.map((item) => {
                    return (
                      <p>{item.instructionText}</p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2 style={{ color: "white", marginTop: "center" }}>
                    We Are Feane
                  </h2>
                </div>
                <div style={{ color: "white" }}>
                  {ingredient.map((item) => {
                    return (
                      <p>-{item.ingredientName}   {item.quantity} {item.unit} </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}