
import Sidenavbar from './Sidenavbar';
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react'
export default function Viewrecipe() {
  const [user, setUser] = useState(null);
  const [recipies, setRecipies] = useState([]);
  const [column, setColumns] = useState([]);
  const email = sessionStorage.getItem('email');
  const [message, setMessage] = useState("");

  const getUser = () => {
    fetch("https://localhost:44329/api/Recipes/email/"+email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status != 400)
                setRecipies(data);
            });
  }

  useEffect(() => {
    fetch("https://localhost:44329/api/Recipes/email/"+email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status != 400)
                setRecipies(data);
                console.log("amish")
                console.log(recipies)
            });
           
}, []);
    const columns = [
      {
        name: 'Recipe Name',
        selector: row => row.recipeName,
        width: "150px"
        
      },
      {
        name: 'Prep Time',
        selector: row => row.prepTime,
        width: "150px"
      },
      {
        name: 'Description',
        selector: row => row.description,
        width: "450px"
      },
      {
        name: 'Image Url',
        selector: row => row.imageUrl,
        width: "350px"
      },
      {
        name: "Delete",
        cell: (row) => (
          <button 
            style={{ 
              backgroundColor: '#ff0000', 
              color: '#fff', 
              borderRadius: '5px', 
              padding: '10px' 
            }} 
            onClick={() => handleDelete(row.recipeID)}
          >
            Delete
          </button>
        ),
      },
    ];

    const handleDelete = async (id) => {
      try {
        const response = await fetch(
          "https://localhost:44329/api/Recipes/"+id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    const data = [
      {
        id: 1,
        name: 'musa',
        email: 'yousaff@gmail.com',
        age: '27'
      }

    ]
  
  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        <div  style={{width:"169px" }}><Sidenavbar></Sidenavbar></div>
        <div className='container mt-5' style={{width:"93%" }}>
       <DataTable
  columns={columns}
  data={recipies}
  columnWidths={{ 
    name: '80px', 
    ingredients: '80px', 
    instructions: '80px' 
  }}
/>


        </div>
      </div>
    </>
  );
}
