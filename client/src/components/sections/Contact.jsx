import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";
import {
  Section,
  Container,
  SectionHeader,
  SectionTitle,
  Card,
} from "../../styles/shared";

const EMAIL = "bilelrahmouni914@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/bilel-rahmouni-058816369/";

const contactLinks = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "bilel-rahmouni",
    href: LINKEDIN,
    icon: FiLinkedin,
    external: true,
  },
];

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionTitle>Contact</SectionTitle>
        </SectionHeader>
        <ContactActions>
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <ContactAction
                key={link.label}
                as="a"
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <Icon />
                <ActionText>
                  <ActionLabel>{link.label}</ActionLabel>
                  <ActionValue>{link.value}</ActionValue>
                </ActionText>
              </ContactAction>
            );
          })}
        </ContactActions>
      </Container>
    </Section>
  );
};

const ContactActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  max-width: 480px;
`;

const ContactAction = styled(Card)`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  text-decoration: none;
  color: var(--text);
  cursor: pointer;

  svg {
    font-size: 20px;
    color: var(--text-muted);
    flex-shrink: 0;
  }

  &:hover svg {
    color: var(--accent);
  }
`;

const ActionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const ActionLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const ActionValue = styled.span`
  font-size: 15px;
  color: var(--text-subtle);
  word-break: break-word;
`;

export default Contact;
