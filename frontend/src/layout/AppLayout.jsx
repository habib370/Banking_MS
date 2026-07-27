import { Outlet } from "react-router-dom";
import {Navbar} from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useAuth } from '../context/Auth';
import SecondaryNavbar from "../components/SecondaryNavbar.jsx"
export default function AppLayout() {
  const token = localStorage.getItem("token");
  const {isAuthenticated}=useAuth();
  return (
    <>
     
     {isAuthenticated && <Navbar/>} 
     {isAuthenticated && <SecondaryNavbar/>}
      <Outlet />  

    {isAuthenticated &&  <Footer/>}
    </>
  );
}