import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <GridSection>
            <LogoSection>
              <Logo>
                <span>&lt;</span>BR<span>/&gt;</span>
              </Logo>
              <TagLine>Building the future, one pixel at a time.</TagLine>
            </LogoSection>
          </GridSection>

          <GridSection>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#startups">Startups</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#accomplishments">Accomplishments</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </GridSection>

          <GridSection>
            <FooterTitle>Connect</FooterTitle>
            <SocialLinks>
              <SocialIcon
                as={motion.a}
                href="https://github.com/Bilel-Rahmouni"
                target="_blank"
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiGithub />
              </SocialIcon>
              <SocialIcon
                as={motion.a}
                href="https://www.linkedin.com/in/bilel-rahmouni001/"
                target="_blank"
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon
                as={motion.a}
                href="https://x.com/bilelrahmouni01"
                target="_blank"
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FaXTwitter />
              </SocialIcon>
              <SocialIcon
                as={motion.a}
                href="mailto:bilelrahmouni914@gmail.com"
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiMail />
              </SocialIcon>
            </SocialLinks>
          </GridSection>
        </FooterGrid>

        <Divider />

        <BottomBar>
          <Copyright>
            © {new Date().getFullYear()} Bilel Rahmouni. All rights reserved.
          </Copyright>
          <TechStack>
            Built with React + Vite <GlowingDot />
          </TechStack>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  background: var(--dark-bg);
  padding: 60px 0 20px;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const GridSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;

  span {
    color: var(--neon-blue);
    text-shadow: 0 0 10px var(--neon-blue);
  }
`;

const TagLine = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  max-width: 200px;
`;

const FooterTitle = styled.h3`
  color: white;
  font-size: 18px;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    color: var(--neon-blue);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--neon-blue),
    transparent
  );
  margin: 20px 0;
  opacity: 0.3;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

const TechStack = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GlowingDot = styled.span`
  width: 6px;
  height: 6px;
  background: var(--neon-blue);
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 10px var(--neon-blue);
`;

export default Footer;
