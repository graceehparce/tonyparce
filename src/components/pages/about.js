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
        Anthony Parce has distinguished himself by exploring the versatility and relevance of today’s classical music world. Since assuming the role of Director of Education, Community Engagement, and Inclusion at Orchestra Lumos in 2023, he has infused the organization with his vibrant energy and innovative ideas. At Orchestra Lumos, Parce has spearheaded transformative initiatives, forging valuable partnerships with diverse community entities such as libraries, yoga studios, maker-spaces, and breweries. These collaborations have expanded the orchestra's reach beyond traditional venues, enriching the cultural tapestry of the community. Notably, Parce initiated the orchestra's inaugural Volunteer program and conducted educational concerts for every fourth grader in Stamford, CT. 

Prior to his time at Orchestra Lumos, Parce showcased his versatility as a musician during his tenure with the Nashville Symphony from 2019 to 2023. His contributions spanned performance, community engagement, and mentorship through programs like the Accelerando program. Additionally, he established himself as a sought-after recording artist and a vital member of various new music organizations. In 2020, Parce, alongside his wife and cellist, Grace Parce, co-founded the Juniper Duo. Their recently released video album "Emerge" showcases new transcriptions, works by emerging composers, and even an original composition. The Juniper Duo has participated in concert series including the Chamber Music Series with the Nashville Symphony and the Nashville Chamber Music Society.

As one of the four inaugural Community Embedded Musicians with the Houston Symphony, Parce immersed himself in the community, offering extensive educational outreach, therapeutic performances in healthcare settings, and diverse concert experiences from 2015-2018. His multifaceted contributions extended to his roles as guest principal violist with prestigious ensembles such as the Amarillo Symphony and Ashlawn opera, as well as performances with renowned orchestras like the San Francisco, Houston, and North Carolina Symphonies.

Parce's rich musical journey includes significant milestones such as performing John Cage's Water Walk for the GRAMMYs and organizing innovative concert formats during his fellowship at the New World Symphony. His commitment to music education and cultural enrichment has taken him across the globe, from teaching in Colombia with the SaludArte Foundation to collaborating with esteemed artists like Christian Tetzlaff and Jessye Norman.

Parce has attended the Verbier, Schleswig-Holstein, Tanglewood, Artosphere, and Britten-Piers summer festivals, as well as the National Orchestral Institute, Domaine Forget and the Music Academy of the West. He holds degrees from the New England Conservatory and Rice University’s Shepherd School of Music, studying with James Dunham, Roger Tapping and Karen Ritscher. Parce is a native of Seattle.    </Text>
    
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


