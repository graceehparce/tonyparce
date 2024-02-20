import "./about.css"
import { Image, Text, Button, ScrollArea } from "@mantine/core"
import aboutPic from "../images/about.jpeg"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

export const AboutPage = () => {

    return (<div className="wholePage">
    <div className="aboutBox">
    <Image src={aboutPic} className="ncmsPic">
    </Image>
    <Text className="aboutText">
        <h2>Biography</h2>
        Anthony Parce has distinguished himself in exploring the versatility and relevance of today’s classical music world. He enjoys bringing his energy and ideas to the Nashville Symphony, having joined in 2019.  In addition to the symphony’s diverse performances, community engagement, and accelerando program, Mr. Parce is also a sought after recording session artist and member of many new music organizations. Mr. Parce was one of 4 inaugural Community Embedded Musicians with the Houston Symphony, where he taught extensively in area schools from pre-k through college, did therapeutic and palliative work in healthcare settings, organized diverse concerts in community and social centers, and curated several salon-style patron engagement experiences.  Parce has recently served as guest principal violist of the Amarillo Symphony and Ashlawn opera, played with the San Francisco, Houston, and North Carolina Symphonies, and performed John Cage’s Water Walk for solo performer and bath tub for the GRAMMYs Salute to Musical Legends. During his fellowship at the New World Symphony, Parce organized and produced innovative concert formats, lectured and performed on the early works and life of Arnold Schoenberg, produced a commemoration of Kristallnacht with testimony by Holocaust survivors, travelled many times to Medellín, Colombia, to teach through the SaludArte Foundation, and helped curate the virtual library (Musiaic). In addition to being a regular principal at NWS, Parce performed chamber music with Christian Tetzlaff, Jessye Norman, and Anne Marie McDermott. Parce has attended the Verbier, Schleswig-Holstein, Tanglewood, Artosphere, and Britten-Piers summer festivals, as well as the National Orchestral Institute, Domaine Forget and the Music Academy of the West. He holds degrees from the New England Conservatory and Rice University’s Shepherd School of Music, studying with James Dunham, Roger Tapping and Karen Ritscher. Parce is a native of Seattle.
    </Text>
    
    </div>
  
    <div className="bottomSectionA">
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
)
}


