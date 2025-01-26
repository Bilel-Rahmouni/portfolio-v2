import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("saas");

  const handleNavClick = (section) => {
    setActiveTab(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Nav>
      <LogoSection>
        <Logo
          onClick={() => handleNavClick("home")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ cursor: "pointer" }}
        >
          <span>&lt;</span>BR<span>/&gt;</span>
        </Logo>
      </LogoSection>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>

      <NavGroup $isOpen={isOpen}>
        <NavItem
          href="#skills"
          $active={activeTab === "skills"}
          onClick={() => handleNavClick("skills")}
        >
          Skills
        </NavItem>
        <NavItem
          href="#saas"
          $active={activeTab === "saas"}
          onClick={() => handleNavClick("saas")}
        >
          Saas
        </NavItem>
        <NavItem
          href="#startups"
          $active={activeTab === "startups"}
          onClick={() => handleNavClick("startups")}
        >
          Startups
        </NavItem>
        <NavItem
          href="#accomplishments"
          $active={activeTab === "accomplishments"}
          onClick={() => handleNavClick("accomplishments")}
        >
          Accomplishments
        </NavItem>
        <BuyNowButton onClick={() => handleNavClick("contact")}>
          Contact Me
        </BuyNowButton>
      </NavGroup>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 30px 50px;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  position: relative;
  margin-right: auto;
  padding: 0 25px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 25px;
    width: calc(100% - 50px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    opacity: 0.5;
  }

  span {
    color: var(--neon-blue);
    text-shadow: 0 0 10px var(--neon-blue);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  letter-spacing: 1px;
  padding: 20px 25px;
  transition: all 0.2s ease;
  font-weight: 600;
  text-transform: uppercase;
  background: transparent;
  color: ${(props) => (props.$active ? "white" : "rgba(255, 255, 255, 0.8)")};
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: 25px;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    &::after {
      width: calc(100% - 50px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    justify-content: center;

    &::after {
      bottom: 10px;
      left: 15px;
    }

    &:hover::after {
      width: calc(100% - 30px);
    }
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  background: transparent;
  gap: 2px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px;
    gap: 10px;
    height: auto;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BuyNowButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  padding: 20px 25px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: white;
    transform: translate(-50%, -50%) rotate(45deg) translateY(100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    &::before {
      transform: translate(-50%, -50%) rotate(45deg) translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export default Navbar;
