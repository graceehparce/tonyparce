import "./home.css"
import { Text, Menu, Button, Image, Card, ScrollArea } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom"
import aboutImg from "../images/Headshot NS 2.jpg"
import juniper1 from "../images/juniper1.jpeg"
import juniper2 from "../images/juniper2.jpeg"
import juniper3 from "../images/juniper3.jpeg"
import juniper4 from "../images/juniper4.jpeg"
import juniper5 from "../images/juniper5.jpeg"
import juniper6 from "../images/juniper6.jpeg"
import juniper7 from "../images/juniper7.jpeg"
import juniper8 from "../images/juniper8.jpeg"
import juniper9 from "../images/juniper9.jpeg"
import juniper10 from "../images/juniper10.jpeg"
import juniper11 from "../images/juniper11.jpeg"
import juniper12 from "../images/juniper12.jpeg"
import juniper13 from "../images/juniper13.jpeg"
import juniper14 from "../images/juniper14.jpeg"
import juniper15 from "../images/juniper15.jpeg"
import movie from "../images/movie.mov"

import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import teaching1 from "../images/teach1.jpg"
import teaching2 from "../images/conduct.jpg"
import teaching3 from "../images/Headshot.JPG"

import ButtonMailto from "./Mailto"





export const HomePage = () => {
    const navigate = useNavigate()

    return (<section className="homeWhole">
      <div className="homeBackground">
        <Text className="nameTitle"></Text>
      </div >
        <div className="aboutCard" px={0}>
          <div className="aboutSection0">
            <div className="imageBox1">
              <Image
                src={aboutImg}
                width={300}
                alt="With custom placeholder"
                withPlaceholder></Image>
            </div>
            <div className="aboutText1"> 
              <div className="sectionTitle">ABOUT</div>
              Anthony Parce has distinguished himself by exploring the versatility and relevance of today’s classical music world. Since assuming the role of Director of Education, Community Engagement, and Inclusion at Orchestra Lumos in 2023, he has infused the organization with his vibrant energy and innovative ideas. At Orchestra Lumos, Parce has spearheaded transformative initiatives, forging valuable partnerships with diverse community entities such as libraries, yoga studios, maker-spaces, and breweries. These collaborations have expanded the orchestra's reach beyond traditional venues, enriching the cultural tapestry of the community. Notably, Parce initiated the orchestra's inaugural Volunteer program and orchestrated educational concerts for every fourth grader in Stamford, CT. 

Prior to his time at Orchestra Lumos, Parce showcased his versatility as a musician during his tenure with the Nashville Symphony from 2019 to 2023.                                          <br></br>
                <button className="buttonZZZ"
                    onClick={() => {
                        navigate({ pathname: `/about` })
                    }}>Read More...</button>
            </div>
          </div>
        </div>
        <Link className="juniperTitleLink" to="/juniper">
            <div className="juniperTitle">THE JUNIPER DUO</div>
            <div className="juniperSection">
                <ScrollArea style={{ height: 400 }}>
                    <div className="scrollPics">
                        <Image src={juniper1} height={400}></Image>
                        <Image src={juniper6} height={400}></Image>
                        <Image src={juniper3} height={400}></Image>
                        <Image src={juniper5} height={400}></Image>
                        <Image src={juniper15} height={400}></Image>
                        <Image src={juniper8} height={400}></Image>
                        <Image src={juniper2} height={400}></Image>
                        <Image src={juniper4} height={400}></Image>
                        <Image src={juniper7} height={400}></Image>
                        <Image src={juniper11} height={400}></Image>
                        <Image src={juniper12} height={400}></Image>
                    </div>
                </ScrollArea>
            </div>
        </Link>
        <div className="teachingSection2">
          <Image className="teaching1" src={teaching1} width={900} height={600}></Image>
          <div className="innerTeaching">
            <Image className="teaching2" src={teaching2} height={400}></Image>
            <div className="innerText">
              <h3>Let's take your playing to the next level!</h3>
              <p>Read more about Tony's teaching philosophy on the teaching page, or contact him below if you're interested in setting up a trial lesson.</p>
              <div className="buttons">
                <button className="buttonZZZ"
                    onClick={() => {
                        navigate({ pathname: `/teach` })
                    }}>Teaching</button>
                <button
                  className="buttonZZZ"
                  radius={20}>
                  <ButtonMailto  className="emailButton" class="emailButton" label="Contact" mailto="mailto:tony.parce@gmail.com" />
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileInnerTeaching">
            <Image className="teaching2" src={teaching2} width="100%"></Image>
            <div className="innerText3">
              <h3>Let's take your playing to the next level!</h3>
              <p>Read more about Tony's teaching philosophy on the teaching page, or contact him below if you're interested in setting up a trial lesson.</p>
              <div className="buttons">
                <button className="buttonZZZ"
                    onClick={() => {
                        navigate({ pathname: `/teach` })
                    }}>Teaching</button>
                <button
                  className="buttonZZZ"
                  radius={20}>
                  <ButtonMailto  className="emailButton" class="emailButton" label="Contact" mailto="mailto:tony.parce@gmail.com" />
              </button>
              </div>
            </div>
          </div>
        <div className="mediaSection">
          <video muted loop autoplay="1" width="100%" height="auto" name="Video Name">
            <source src={movie}></source>
          </video>
          <div className="outerMedia">
              <div className="innerText2">
                <h3>Check out more video content here!</h3>
                <div className="buttons">
                  <button className="buttonZZZ"
                      onClick={() => {
                          navigate({ pathname: `/media` })
                      }}>Media</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mediaSection2">
          <Image className="teaching2" src={teaching3} width="100%"></Image>
          <div className="outerMedia">
              <div className="innerText2">
                <h3>Check out video content here!</h3>
                <div className="buttons">
                  <button className="buttonZZZ"
                      onClick={() => {
                          navigate({ pathname: `/media` })
                      }}>Media</button>
                </div>
              </div>
            </div>
          </div>
      
        <div className="bottomSectionH">
        <div className="iconBox">   
        <a className="instaIcon" target="_blank" href="https://www.instagram.com/anthonyparce/">
            <IconBrandInstagram />
        </a>
        <a className="instaIcon" target="_blank" href="https://www.youtube.com/user/Tonestro/featured">
            <IconBrandYoutube />
        </a>
        <a className="instaIcon" target="_blank" href="https://www.facebook.com/anthony.parce/">
            <IconBrandFacebook />
        </a>
        </div>
        <Text className="createdBy">Created by Gracie Parce</Text>
    </div>
    </section >
    )}