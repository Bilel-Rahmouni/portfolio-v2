import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import wyngoLogo from "../../assets/startups/wyngo.png";
import renklarLogo from "../../assets/startups/renklar.jpeg";
import dustbustersLogo from "../../assets/startups/dustbusters.png";

const Startups = () => {
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Section id="startups">
      <Container>
        <SectionTitle
          as={motion.h2}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Startups
        </SectionTitle>
        <StartupGrid>
          {startups.map((startup, index) => (
            <StartupCard
              key={index}
              as={motion.div}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CardHeader>
                <StartupLogo src={startup.logo} alt={startup.name} />
                <HeaderContent>
                  <StartupName>{startup.name}</StartupName>
                  <StartupRole>{startup.role}</StartupRole>
                </HeaderContent>
              </CardHeader>
              <StartupDescription>{startup.description}</StartupDescription>
              <Achievements>
                {startup.achievements.map((achievement, i) => (
                  <Achievement key={i} as={motion.li} whileHover={{ x: 5 }}>
                    {achievement}
                  </Achievement>
                ))}
              </Achievements>
              <TechUsed>
                {startup.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechUsed>
              {startup.websites ? (
                <WebsiteLinks>
                  {startup.websites.map((site, i) => (
                    <StartupLink
                      key={i}
                      as={motion.a}
                      href={site.url}
                      target="_blank"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit {site.name} →
                    </StartupLink>
                  ))}
                </WebsiteLinks>
              ) : startup.website ? (
                <StartupLink
                  as={motion.a}
                  href={startup.website}
                  target="_blank"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website →
                </StartupLink>
              ) : null}
              {startup.app ? (
                <WebsiteLinks>
                  <StartupLink
                    as={motion.a}
                    href={startup.app}
                    target="_blank"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "white",
                      color: "black",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit App Homepage →
                  </StartupLink>
                </WebsiteLinks>
              ) : null}
            </StartupCard>
          ))}
        </StartupGrid>
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

const StartupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StartupCard = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 25px;
  transition: transform 0.3s ease;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StartupLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 15px;
  object-fit: contain;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const StartupName = styled.h3`
  font-size: 24px;
  color: white;
  margin-bottom: 5px;
`;

const StartupRole = styled.h4`
  font-size: 16px;
  color: var(--neon-blue);
  font-weight: 500;
`;

const StartupDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Achievements = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  padding-left: 0;
`;

const Achievement = styled.li`
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

const TechUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechBadge = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const StartupLink = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
`;

const WebsiteLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

// Sample startup data
const startups = [
  {
    name: "Wyngo",
    role: "Full Stack Developer",
    description:
      "A comprehensive mobile and web platform connecting service providers with customers, featuring real-time booking, secure payments, and service tracking.",
    logo: wyngoLogo,
    achievements: [
      "Developed cross-platform mobile app with React Native",
      "Implemented real-time tracking and notification system",
      "Built scalable backend infrastructure on AWS",
    ],
    technologies: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
    website: "https://wyngo.co",
    app: "https://play.google.com/store/apps/details?id=com.foregroundserviceapplication&hl=en",
  },
  {
    name: "renklar.dk & renklar.pro",
    role: "Full Stack Developer",
    description:
      "renklar.dk: A cleaning company service for the private market.renklar.pro: A cleaning service platform for the professional business market.",
    logo: renklarLogo,
    achievements: [
      "Build the website renklar.dk",
      "Build the platform renklar.pro",
      "Developed service management workflow",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    websites: [
      { name: "renklar.dk", url: "https://renklar.dk" },
      { name: "renklar.pro", url: "https://renklar.pro" },
    ],
  },
  {
    name: "DustBusters",
    role: "Frontend Developer",
    description:
      "A modern cleaning service platform that streamlines booking and management of cleaning services with an intuitive user interface and automated scheduling.",
    logo: dustbustersLogo,
    achievements: [
      "Designed and implemented responsive UI",
      "Created dynamic booking system",
      "Integrated AWS services for media handling",
    ],
    technologies: ["React", "Tailwind CSS", "AWS"],
    website: "https://dustbusters.dk",
  },
];

export default Startups;
