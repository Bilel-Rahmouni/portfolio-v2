import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Container } from "../styles/shared";
import { getCurrentYear } from "../utils/date";

const Hero = () => {
  const titles = [
    "Entrepreneur",
    "Full Stack Developer",
    "Electronic & Automation Engineer",
    "Tech Enthusiast",
  ];
  const [typewriterText, setTypewriterText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(currentTitle.substring(0, typewriterText.length + 1));
        if (typewriterText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
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
        <HeroContent
          as={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>
            Based in Denmark · {getCurrentYear()}
          </Eyebrow>
          <Name>Bilel Rahmouni</Name>
          <Role>
            {typewriterText}
            <Cursor />
          </Role>
          <Description>
            Full stack developer building SaaS products and startup platforms.
            Background in electronics and automation engineering.
          </Description>
          <ButtonRow>
            <Button
              as={motion.button}
              $primary
              onClick={() => (window.location.href = "#contact")}
            >
              Contact
            </Button>
            <Button
              as={motion.button}
              onClick={() =>
                window.open("https://github.com/Bilel-Rahmouni", "_blank")
              }
            >
              GitHub
            </Button>
          </ButtonRow>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: calc(64px + var(--space-2xl)) 0 var(--space-2xl);
  background: var(--bg);
  scroll-margin-top: 0;
`;

const HeroContainer = styled(Container)`
  width: 100%;
  align-self: stretch;
`;

const HeroContent = styled.div`
  max-width: 640px;
  text-align: left;
`;

const Eyebrow = styled.p`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
`;

const Role = styled.p`
  font-family: var(--font-mono);
  font-size: clamp(14px, 2.5vw, 16px);
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
  min-height: 1.5em;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: var(--text-subtle);
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: var(--space-xl);
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: var(--space-sm);
  flex-wrap: wrap;
`;

export default Hero;
