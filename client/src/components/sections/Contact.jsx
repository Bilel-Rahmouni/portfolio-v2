import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin,   FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          as={motion.h2}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        <ContentWrapper>
          <ContactInfo>
            <InfoText>
              Let's work together! Feel free to reach out for collaborations,
              opportunities, or just to say hello.
            </InfoText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/Bilel-Rahmouni"
                target="_blank"
                as={motion.a}
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiGithub /> GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/bilel-rahmouni001/"
                target="_blank"
                as={motion.a}
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiLinkedin /> LinkedIn
              </SocialLink>
              <SocialLink
                as={motion.a}
                href="https://x.com/bilelrahmouni01"
                target="_blank"
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FaXTwitter />
                X.com
              </SocialLink>
              <SocialLink
                href="mailto:bilelrahmouni914@gmail.com"
                as={motion.a}
                whileHover={{ y: -3, color: "var(--neon-blue)" }}
              >
                <FiMail /> Email
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <FormContainer
            as="form"
            action="https://formspree.io/f/xwpkdbak"
            method="POST"
          >
            <InputGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                required
              />
            </InputGroup>

            <SubmitButton
              as={motion.button}
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </FormContainer>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 0 100px;
  position: relative;
  background: var(--dark-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  color: white;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: white;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  svg {
    font-size: 20px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 12px 16px;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--neon-blue);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 12px 16px;
  color: white;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--neon-blue);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid var(--neon-blue);
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

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
    &::before {
      width: 100%;
    }
  }
`;

export default Contact;
