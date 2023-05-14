// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from './components/register/registeruser';
import Header from './components/header';
import { Routes, Route } from "react-router-dom"
import Login from './components/login/login';
import Home from './components/home/Home';
import Recipes from './components/dashboard/Recipes';
import Instructions from './components/dashboard/instructions';
import Ingredients from './components/dashboard/ingredients';
import Viewrecipe from './components/dashboard/viewrecipe';
import Abo from './components/home/about';
import More from './components/more/More';
import Updateuser from './components/dashboard/userupdate';
import Search from './components/home/search';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterUser></RegisterUser>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Home" element={<Home></Home>}/>
        <Route path="/recipes" element={<Recipes></Recipes>}/>
        <Route path="/instructions" element={<Instructions></Instructions>}/>
        <Route path="/ingredients" element={<Ingredients></Ingredients>}/>
        <Route path="/viewrecipe" element={<Viewrecipe></Viewrecipe>}/>
        <Route path="/about" element={<Abo></Abo>}/>
        <Route path="/more" element={<More></More>}/>
        <Route path="/update" element={<Updateuser></Updateuser>}/>
        <Route path="/search" element={<Search></Search>}/>
      </Routes>
    </>
  );
}

export default App;
