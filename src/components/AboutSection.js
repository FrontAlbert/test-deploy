import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Looking for a Website?</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I am a <span>Front-End Web Developer</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Lets work together.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Are you a freelance designer or developer and am in need of a portfolio website? Contact me and we can work together!
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
