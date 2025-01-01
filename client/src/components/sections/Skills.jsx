import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import javascriptIcon from "../../assets/skills/javascript.png";
import reactIcon from "../../assets/skills/react.png";
import reactNativeIcon from "../../assets/skills/react-native.png";
import nodeIcon from "../../assets/skills/nodejs.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import awsIcon from "../../assets/skills/aws.png";
import firebaseIcon from "../../assets/skills/firebase.png";
import tailwindIcon from "../../assets/skills/tailwind.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <img src={htmlIcon} alt="HTML" /> },
        { name: "CSS", icon: <img src={cssIcon} alt="CSS" /> },
        {
          name: "JavaScript",
          icon: <img src={javascriptIcon} alt="JavaScript" />,
        },
        { name: "React", icon: <img src={reactIcon} alt="React" /> },
        {
          name: "React Native",
          icon: <img src={reactNativeIcon} alt="React Native" />,
        },
        { name: "Tailwind", icon: <img src={tailwindIcon} alt="Tailwind" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <img src={nodeIcon} alt="Node.js" /> },
        { name: "MongoDB", icon: <img src={mongodbIcon} alt="MongoDB" /> },
      ],
    },
    {
      title: "Cloud & Services",
      skills: [
        { name: "AWS", icon: <img src={awsIcon} alt="AWS" /> },
        { name: "Firebase", icon: <img src={firebaseIcon} alt="Firebase" /> },
      ],
    },
  ];

  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          as={motion.h2}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <CategoryCard
              key={categoryIndex}
              as={motion.div}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skillIndex}
                    as={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: "rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    {skill.name}
                  </SkillTag>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </SkillsGrid>
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 25px;
  transition: transform 0.3s ease;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  color: var(--neon-blue);
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    padding: 2px;
  }

  img[alt="AWS"] {
    width: 55px;
    height: 28px;
    margin-right: -8px;
    padding: 0;
  }
`;

const SkillTag = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: default;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  min-width: 140px;
  justify-content: flex-start;
`;

export default Skills;
