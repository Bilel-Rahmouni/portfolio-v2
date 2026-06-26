import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "accomplishments", label: "Timeline" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleNavClick = (section) => {
    setActiveTab(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 64;
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
      <NavInner>
        <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <NavGroup $isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              href={`#${item.id}`}
              $active={activeTab === item.id}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </NavItem>
          ))}
          <ContactButton onClick={() => handleNavClick("contact")}>
            Contact
          </ContactButton>
        </NavGroup>
      </NavInner>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(12, 12, 14, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
`;

const NavInner = styled.div`
  max-width: var(--content-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 20px;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    padding: var(--space-md) var(--space-lg);
    gap: var(--space-xs);
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;

const NavItem = styled.a`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--text-muted)")};
  padding: 8px 14px;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--text);
    background: var(--bg-subtle);
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;

const ContactButton = styled.button`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--text);
  border: 1px solid var(--text);
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
    padding: 12px 14px;
  }
`;

export default Navbar;
