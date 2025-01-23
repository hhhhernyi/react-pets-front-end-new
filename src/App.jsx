// src/App.jsx

import { Link, Route, Routes } from "react-router";
import PetsList from "./components/PetsList/PetsList";
import NewPet from "./components/NewPet/NewPet";
import PetDetail from "./components/PetDetail/PetDetail";

import {getPets} from './services/petService'
import { useEffect, useState } from "react";
import EditPet from "./components/editPet/editPet";

const App = () => {
  const [pets, setPets] = useState([])

    useEffect(()=>{
        const getData = async() => {
            const petsData = await getPets();
            setPets(petsData)
        };
        getData();
    },[])

  return (
    <>
    <h1><Link to='/'>Pet farm!</Link></h1>
    <Routes>
      <Route path='/pets' element={<PetsList pets={pets}/>}/>
      <Route path='/pets/:petsID' element={<PetDetail pets={pets}/>}/>
      <Route path='/pets/:petsID/edit' element={<EditPet />}/>
      <Route path='/pets/new' element={<NewPet />}/>
      
      <Route path='/' element={<h2>this is the home page</h2>}/>
    </Routes>
    <p><Link to='/pets'>view all pets</Link></p>
    </>
  );
};

export default App;
