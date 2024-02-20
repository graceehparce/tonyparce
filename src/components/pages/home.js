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
                  Anthony Parce has distinguished himself in exploring the versatility and relevance of today’s classical music world. He enjoys bringing his energy and ideas to the Nashville Symphony, having joined in 2019.  In addition to the symphony’s diverse performances, community engagement, and accelerando program, Mr. Parce is also a sought after recording session artist and member of many new music organizations. Mr. Parce was one of 4 inaugural Community Embedded Musicians with the Houston Symphony, where he taught extensively in area schools from pre-k through college, did therapeutic and palliative work in healthcare settings, organized diverse concerts in community and social centers, and curated several salon-style patron engagement experiences.  Parce has recently served as guest principal violist of the Amarillo Symphony and Ashlawn opera, played with the San Francisco, Houston, and North Carolina Symphonies, and performed John Cage’s Water Walk for solo performer and bath tub for the GRAMMYs Salute to Musical Legends....                        <br></br>
                                          <br></br>
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