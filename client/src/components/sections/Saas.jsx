import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import iconmakerImage from "../../assets/saas/iconmakert.png";

const Saas = () => {
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Section id="saas">
      <Container>
        <SectionTitle
          as={motion.h2}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Saas
        </SectionTitle>
        <ProjectGrid>
          {saas.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <ProjectImage
                as={motion.img}
                src={project.image}
                alt={project.title}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <FeatureList>
                  {project.features?.map((feature, i) => (
                    <Feature key={i} as={motion.li} whileHover={{ x: 5 }}>
                      {feature}
                    </Feature>
                  ))}
                </FeatureList>
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechTag
                      key={i}
                      as={motion.span}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    as={motion.a}
                    href={project.demo}
                    target="_blank"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "white",
                      color: "black",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: rgba(30, 30, 30, 0.5);
  padding: 20px;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding-left: 0;
`;

const Feature = styled.li`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--neon-blue);
  }
`;

// Sample project data
const saas = [
  {
    title: "IconMaker",
    description:
      "A powerful SaaS platform for creating, customizing, and managing icon sets using AI. Features include AI-powered icon generation with DALL-E 3, collaborative workspaces, and seamless export options with premium subscriptions.",
    image: iconmakerImage,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "AWS",
      "Stripe",
      "OpenAI API",
    ],
    demo: "https://iconmaker.pro",
    features: [
      "Real-time icon customization and preview",
      "AI-powered icon generation using DALL-E 3",
      "Subscription-based premium features using Stripe",
      "Cloud storage and sharing capabilities",
      "Export in multiple formats and sizes",
    ],
  },
];

export default Saas;
