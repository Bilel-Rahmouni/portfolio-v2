import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import meImage from "../assets/me.jpg";

const Hero = () => {
  const titles = [
    "ENTREPRENEUR",
    "FULL STACK DEVELOPER",
    "ELECTRONIC & AUTOMATION ENGINEER",
    "TECH ENTHUSIAST",
  ];
  const [typewriterText, setTypewriterText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(currentTitle.substring(0, typewriterText.length + 1));
        if (typewriterText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypewriterText(currentTitle.substring(0, typewriterText.length - 1));
        if (typewriterText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, titleIndex, isDeleting]);

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              <span>I'm</span>
            </Title>
            <Name>BILEL RAHMOUNI</Name>
            <Title>
              <TypewriterText>
                <TypewriterContent>
                  {typewriterText}
                  <Cursor>|</Cursor>
                </TypewriterContent>
              </TypewriterText>
            </Title>
            <Description>
              When I'm not e-biking or trying to make a robot, I'm developing software, or trying to change the world sometimes.
            </Description>
          </motion.div>
          <ButtonContainer>
            <PrimaryButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "#contact")}
            >
              GET IN TOUCH
            </PrimaryButton>
            <SecondaryButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://github.com/Bilel-Rahmouni", "_blank")
              }
            >
              VIEW GITHUB
            </SecondaryButton>
          </ButtonContainer>
        </HeroContent>
        <ImageContainer
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
        >
          <ProfileImage src={meImage} alt="Bilel Rahmouni" />
        </ImageContainer>
      </HeroContainer>
      <GlowingOrb />
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  background: var(--dark-bg);

  @media (max-width: 968px) {
    padding-top: 100px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  z-index: 1;
  padding: 0 20px;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: left;
  z-index: 1;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin-right: 20px;
  margin-left: 30px;

  @media (max-width: 968px) {
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
  }
`;

const ProfileImage = styled.img`
  width: 70%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(157, 0, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 968px) {
    width: 50%;
  }
`;

const Greeting = styled.h2`
  color: var(--neon-blue);
  font-size: 24px;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
  color: #fcee0a;
  letter-spacing: 4px;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff;
  animation: glitch 725ms infinite;

  &::before,
  &::after {
    content: "BILEL RAHMOUNI";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    color: #00fffc;
    animation: glitch 2000ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, 0);
    opacity: 0.75;
  }

  &::after {
    color: #fc00ff;
    animation: glitch 2500ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.025em, 0);
    opacity: 0.75;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff;
    }
    15% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff;
    }
    16% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff;
    }
    50% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff;
    }
    99% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff;
    }
    100% {
      text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff;
    }
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`;

const Description = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  position: relative;
  clip-path: polygon(
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 10px
  );

  &:hover {
    background: #fcee0a;
    color: black;
  }
`;

const PrimaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid var(--neon-blue);
  letter-spacing: 2px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--neon-blue);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    border-color: var(--neon-blue);

    &::before {
      width: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid var(--neon-purple);
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--neon-purple);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    border-color: var(--neon-purple);

    &::before {
      width: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const GlowingOrb = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(157, 0, 255, 0.1) 0%,
    rgba(0, 243, 255, 0.1) 100%
  );
  filter: blur(100px);
  animation: float 10s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
`;

const TypewriterContent = styled.div`
  min-height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cursor = styled.span`
  display: inline-block;
  color: var(--neon-blue);
  font-size: 24px;
  font-weight: 100;
  margin-left: 4px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export default Hero;
