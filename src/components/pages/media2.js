import "./media2.css"
import { Text, Image, Button, ScrollArea } from "@mantine/core"
import juniper11 from "../images/juniper3.jpeg"
import juniper1 from "../images/juniper1.jpeg"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';



export const MediaPage2 = () => {

    return (<div className="mediaWhole">
        <div className="mediaHome3">
        <Text className="mediaTitle">Media</Text>
        </div >
        <div className="directionsM">
          <Text className="largerDirectionsM">Follow Me 
          </Text>
          <a className="instaIcon" target="_blank" href="https://www.youtube.com/user/Tonestro/featured">
              <IconBrandYoutube />
          </a> 
        </div>
        <ScrollArea className="scrollAreaM">
          <div className="scrollVidsM">
            <iframe className="vid" src="https://www.youtube.com/embed/ROuBwF4UV10?si=Spgr2RwCF6VPhn9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/bI_0ApjGjVs?si=po75yJ5fTAFQtKc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/_5AnaqEmNJ0?si=8s6SAQGUb0kMnGuS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/xwXAetof4GQ?si=ncYYgDbUf6mrFmSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/9V7hMaMpZ4k?si=S_-szoMQDjrlFWYb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/hGt7UszxoYA?si=Np-yCX0_EaJFO1pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid" src="https://www.youtube.com/embed/OOuUQGsEWjg?si=HgJy25TTuKfP3F6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </ScrollArea>
        <div className="directionsM">
          <Text className="largerDirectionsM">Check out Juniper Duo 
          </Text>
          <a className="instaIcon" target="_blank" href="https://www.youtube.com/playlist?list=PLRH7TZXLLKdvgOqGOdcNdDlf3frxO21Od">
              <IconBrandYoutube />
          </a> 
        </div>
        <ScrollArea className="scrollAreaM">
        <div className="scrollVidsM">
        <iframe className="vid" src="https://www.youtube.com/embed/3SryOiV4ieg?si=bqYYGrfvM0rSl6gC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/bH-9PDwa-8w?si=ryxPT1CzKoNyzYbn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/vLO8yKSOtsU?si=uFqpn5OajGRDfgBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/mdkPMW9J-bs?si=8mZe2oKepCYI2Hic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/5slv7kUG4Qw?si=t2G2xWOXdPMxX6Cr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/0zbue1sWufg?si=6N8hMV0B32GgwZem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/9doA_ppWWto?si=Ae93V7Ej-6FFY4pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/5wBliX0DHao?si=vCRCD9mmJjNmhdOB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </ScrollArea>
    <div className="articles">
    <h2 className="articlesHeading">Articles</h2>
    <div className="lastMediaBox">
      <div className="box1">
          <div className="box3">
            <h2 className="articleHeading">Journal of the American Viola Society</h2>
            <Text className="articleText">An article about how to plan an interactive concerts and educational philosophy, as published in JAVS, Vol. 34 no. 2.</Text>
            <a className="boxButton" href="https://www.anthonyparce.com/_files/ugd/1036d8_e75933fe54bc4caca781c599797bc59e.pdf" >Read Me!</a>
          </div>
      </div>
      <div className="box2">
          <div className="box3">
            <h2 className="articleHeading">Michael Tilson-Thomas</h2>
            <Text className="articleText">An interview with MTT on Finding your musical mission in an orchestra:</Text>
            <a className="boxButton" href="https://musaic.nws.edu/videos/finding-your-musical-mission-in-a-symphony-orchestr" >Read Me!</a>
          </div>
      </div>
      <div className="box4">
          <div className="box3">
            <h2 className="articleHeading">New World Symphony</h2>
            <Text className="articleText">A conversation about diverse career options in music:</Text>
            <a className="boxButton" href="https://musaic.nws.edu/videos/virtual-hangouts-careers-in-music" >Read Me!</a>
          </div>
      </div>
      <div className="box5">
          <div className="box3">
            <h2 className="articleHeading">Retune with Maya</h2>
            <Text className="articleText">A conversation about the use of Beta Blockers in auditions:</Text>
            <a className="boxButton" href="https://www.retunewithmaya.com/index/tonyparce" >Read Me!</a>
          </div>
      </div>
    </div>
    </div>
    <div className="bottomSectionM">
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
  </div >
    )}