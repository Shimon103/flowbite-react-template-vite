import { DarkThemeToggle } from "flowbite-react";
import Navigation from "./Componants/Navigation";
import Card from "./Componants/Card";
import axios from "axios";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from './Componants/pages/Home';
import About from './Componants/pages/About';
import {Button} from 'flowbite-react';






export default function App() {
  const [users, setUsers] = useState([])
  const login = async () => {
    try {
      const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',
        {
          "email": "admin@gmail.com",
          "password": "Abc!123Abc",
        },
      )
      localStorage.setItem('token', response.data)
      toast.success('well done')
      console.log(response.data)
    }
    catch (error) {
      console.error('Error during login:', error);
      toast.error('very bad')
    }
  
  }
  const getAllUsers = async () => {
    try{
      const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users',
        {
          headers: {
            'x-auth-token': `${localStorage.getItem('token')}`
          }
        }
      )
      setUsers(response.data)
      console.log(response.data)
      
      toast.success('Users fetched successfully')
  
    }
    catch(error){
      console.error('Error fetching users:', error);
      toast.error('Error fetching users')
    }
  }
  




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
        <button type="button" style={{ background: 'black' }} onClick={login}>login</button>
        {localStorage.getItem('token') ?  <Button onClick={getAllUsers} color='dark' className='m-2'>Get users</Button> : ''}
       

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
