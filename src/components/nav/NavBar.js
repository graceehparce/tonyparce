import './NavBar.css'
import { Text, Menu, Button, Image } from "@mantine/core"
import { Link, useNavigate } from 'react-router-dom'
import { IconMenu, IconPhone, IconMail, IconMenu2 } from '@tabler/icons-react';
import ButtonMailto from '../pages/Mailto';

export const NavBar = () => {
    const navigate = useNavigate()

    
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }

    return (
        <nav className="navbar">
            <section className='titleSection'>
                <Link className="titleLink" to="">
                <h2 className="navTitleLink">ANTHONY PARCE</h2>
                </Link>
            </section>
            <section className='navLinks'>
                <Link className='navLink' to="">Home</Link>
                <Link className='navLink' to="about">About</Link>
                <Link className='navLink' to="teach">Teaching</Link>
                <Link className='navLink' to="juniper">Juniper Duo</Link>
                <Link className='navLink' to="media">Media</Link>
            </section>
            <section className="navDropDown">
              <div class="popup">
                <a onClick={() => {
                    myFunction();
                    }} class="dropbtn"> 
                  <IconMenu2 />
                </a>
                <div className="popuptext" id="myPopup">
                  <a className='forLinksPadding' onClick={() => {
                    navigate("");
                    }}>Home</a>
                  <a className='forLinksPadding'  onClick={() => {
                    navigate("/about");
                    }}>About</a>
                  <a  className='forLinksPadding' onClick={() => {
                    navigate("/teach");
                    }}>Teaching</a>
                    <a className='forLinksPadding'  onClick={() => {
                    navigate("/juniper");
                    }}>Juniper Duo</a>
                    <a className='forLinksPadding'  onClick={() => {
                      navigate("/media");
                      }}>Media</a>
                </div>
              </div>
            </section>
          </nav >
    )
}