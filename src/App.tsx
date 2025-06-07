import { DarkThemeToggle } from "flowbite-react";
import Navigation from "./Componants/Navigation";
import Card from "./Componants/Card";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from './Componants/pages/Home';
import About from './Componants/pages/About'




const login = async () => {
  try {
    const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',
      {
        "email": "admin@gmail.com",
        "password": "Abc!123Abc",
      },
    )
    toast.success('well done')
    console.log(response.data)
  }
  catch (error) {
    console.error('Error during login:', error);
    toast.error('very bad')
  }

}



export default function App() {
  let renderID = 1
  const welcome = () => {
    toast('Welcome to my app', { toastId: renderID })
  }
  useEffect(() => {
    welcome()
  })
  // }

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <ToastContainer />
        <Card />
        <button type="button" style={{ background: 'black' }} onClick={login}>login
        </button>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
