import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "../styles/shared";
import { getCurrentYear } from "../utils/date";
import { roles } from "../data/roles";

const roleLinks = roles.map((role) => ({
  href: `#${role.id}`,
  label: role.label,
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <DisplayName>Bilel Rahmouni</DisplayName>

        <MetaRow>
          <RolesSection> 
            <RoleNav>
              {roleLinks.map((link) => (
                <RoleLink key={link.href} href={link.href}>
                  {link.label}
                </RoleLink>
              ))}
            </RoleNav>
          </RolesSection>

          <SocialLinks>
            <SocialIcon
              href="https://github.com/Bilel-Rahmouni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/bilel-rahmouni-058816369/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </SocialIcon>
            <SocialIcon
              href="https://x.com/bilelrahmouni01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </SocialIcon>
            <SocialIcon
              href="mailto:bilelrahmouni914@gmail.com"
              aria-label="Email"
            >
              <FiMail />
            </SocialIcon>
          </SocialLinks>
        </MetaRow>

        <BottomBar>
          <Copyright>© {getCurrentYear()}</Copyright>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: var(--space-2xl) 0 var(--space-lg);
`;

const DisplayName = styled.p`
  font-size: clamp(48px, 12vw, 120px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: var(--text);
  margin-bottom: var(--space-lg);
`;

const MetaRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RolesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  flex: 1;
  min-width: 0;
`;

const RolesLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const RoleNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
`;

const RoleLink = styled.a`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-subtle);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
`;

const BottomBar = styled.div`
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);
`;

const Copyright = styled.p`
  font-size: 13px;
  color: var(--text-muted);
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
`;

const SocialIcon = styled.a`
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
`;

export default Footer;
