import { Image, Text, Button } from "@mantine/core"
import teachImg from "../images/teaching1.JPG"
import "./teaching.css"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';




export const TeachingPage = () => {

    return (<div className="wholePageT">
        <div className="teachBox">
          <Image src={teachImg} className="ncmsPic">
          </Image>
          <Text className="teachText">
              <h2>Take your playing to the next level!</h2>
              <h3>Private Viola Lessons</h3>
              Mr. Parce's teaching philosophy is one of meeting the student's needs and encouraging them to pursue their goals with joy and enthusiasm. His focus is strengthening technique and fluency while building deep interpretations and love for the repertoire. The first lesson is always free so please contact by phone or email to set up a trial.
              <br></br><br></br>
              <Button
              className="buttonZZZ"
                  radius={20}>
              <ButtonMailto  className="emailButton" class="emailButton" label="Contact" mailto="mailto:tony.parce@gmail.com" />
          </Button>
          </Text>
        </div>
        <div className="bottomSectionT">
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