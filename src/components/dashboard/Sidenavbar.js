
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react'
import './header.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
const Sidenavbar = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const name = sessionStorage.getItem('name');
    console.log(name)
    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);

    return (<>
            <nav className="navbar navbar-expand-lg navbar-mainbg" style={{ textAlign:"center",height:"754px", display: "flex", flexWrap: "wrap" }}>
            <center><NavLink className="navbar-brand navbar-logo" style={{textAlign:"center"}} to="/" exact >
                {name}
            </NavLink>
            </center>
            
            <div className="flex-column" id="navbarSupportedContent">
            <ul className="navbar-nav flex-column">
 
  <li className="nav-item">
    <NavLink className="nav-link" to="/recipes" exact>
      <i className="far fa-address-book"></i>Add Recipes
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/viewrecipe" exact>
      <i className="far fa-clone"></i>View Recipe
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/update" exact>
      <i className="far fa-chart-bar"></i>User Update
    </NavLink>
  </li>
  <li className="nav-item" style={{paddingBottom:"220%"}}>
    
  </li>
</ul>

            </div>
        </nav>
        
</>
    )
}

export default Sidenavbar


