import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Accomplishments = () => {
  const accomplishments = [
    {
      date: "2025",
      title: "CouponsFetcher",
      description:
        "Started CouponsFetcher.com, an saas website for searching online coupons.",
    },
    // {
    //   date: "2025",
    //   title: "Dusbusters",
    //   description:
    //     "Started dusbusters.dk, a freelancing website for cleaning service.",
    // },
    {
      date: "2024",
      title: "Renklar",
      description: "Started renklar.dk, a cleaning company.",
    },
    {
      date: "2024",
      title: "Iconmaker",
      description: "Developed my first SAAS, iconmaker.pro.",
    },
    {
      date: "2024",
      title: "Wyngo",
      description:
        "Developed a web application for a local business to manage their inventory and sales.",
    },
    {
      date: "2023",
      title: "PXLZ Studio",
      description: "Started working as a Full Stack Web Developer at PXLZ Studio in Aarus, Denmark.",
    },
    {
      date: "2021",
      title: "Software Engineer",
      description: "Started my journey as a web development freelancer in Athens, Greece.",
    },
    {
      date: "2020",
      title: "Self-taught Developer",
      description:
        "Started my journey as a self-taught developer,during covid-19 pandemic periode.",
    },
    {
      date: "2016",
      title: "Electronic Engineer",
      description:
        "Started my journey as a electronic engineer at SAGEM Tunisia.",
    },
    {
      date: "2015",
      title: "Engineering Degree",
      description:
        "Graduated from the National School of Applied Sciences of Tunis, Tunisia.",
    },
  ];

  return (
    <Section id="accomplishments">
      <Container>
        <SectionTitle
          as={motion.h2}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Accomplishments
        </SectionTitle>
        <Timeline>
          <TimelineLine />
          {accomplishments.map((item, index) => (
            <TimelineItem
              key={index}
              $isEven={index % 2 === 0}
              as={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineContent $isEven={index % 2 === 0}>
                <TimelineDot $isEven={index % 2 === 0} />
                <TimelineCard
                  $isEven={index % 2 === 0}
                  as={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--neon-purple) 0%,
    var(--neon-blue) 100%
  );
  opacity: 0.3;
  transform: translateX(-50%);
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$isEven ? "flex-start" : "flex-end")};
  margin-bottom: 50px;
  padding-left: ${(props) => (props.$isEven ? "0" : "50%")};
  padding-right: ${(props) => (props.$isEven ? "50%" : "0")};
  position: relative;
`;

const TimelineDate = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: var(--neon-blue);
  font-weight: bold;
  // background: var(--dark-bg);
  padding: 0 15px;
  z-index: 2;
`;

const TimelineContent = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.$isEven ? "0 30px 0 0" : "0 0 0 30px")};
`;

const TimelineDot = styled.div`
  position: absolute;
  ${(props) => (props.$isEven ? "right: -6px " : "left: -6px")};
  top: 50%;
  width: 12px;
  height: 12px;
  background: var(--neon-purple);
  border-radius: 50%;
  border: 2px solid var(--dark-bg);
  z-index: 2;
  transform: translateY(-50%);
`;

const TimelineCard = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    ${(props) => (props.$isEven ? "right: -8px" : "left: -8px")};
    top: 50%;
    width: 16px;
    height: 16px;
    background: rgba(30, 30, 30, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: ${(props) =>
      props.$isEven
        ? "translateY(-50%) rotate(225deg)"
        : "translateY(-50%) rotate(45deg)"};
  }
`;

const TimelineTitle = styled.h3`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const TimelineDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 16px;
`;

export default Accomplishments;
