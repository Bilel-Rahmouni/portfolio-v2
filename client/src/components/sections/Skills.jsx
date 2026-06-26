import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Section,
  Container,
  SectionHeader,
  SectionTitle,
  Card,
  Tag,
} from "../../styles/shared";
import { roles } from "../../data/roles";

const skillsByRole = {
  "web-dev": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "AWS",
    "Firebase",
  ],
  pm: [
    "Project Management",
    "Agile / Scrum",
    "Product Development",
    "Team Leadership",
    "Startup Operations",
    "Technical Planning",
    "Client Communication",
    "Freelance Delivery",
  ],
  electronics: [
    "PLC Programming",
    "Arduino",
    "ESP32",
    "Embedded C",
    "MATLAB / Simulink",
    "LabVIEW",
    "SCADA",
    "AutoCAD Electrical",
    "KiCad",
    "Industrial Automation",
  ],
};

const skillCategories = roles
  .filter((role) => role.id !== "home")
  .map((role) => ({
    id: role.id,
    title: role.label,
    skills: skillsByRole[role.id],
  }));

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionTitle>Skills</SectionTitle>
        </SectionHeader>
        <SkillsGrid>
          {skillCategories.map((category, i) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              as={motion.div}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
};

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
`;

const CategoryCard = styled(Card)`
  padding: var(--space-lg);
  scroll-margin-top: 80px;
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-md);
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

const SkillTag = styled(Tag)``;

export default Skills;
