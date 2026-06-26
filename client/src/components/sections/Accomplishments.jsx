import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Section,
  Container,
  SectionHeader,
  SectionTitle,
  Card,
} from "../../styles/shared";

const accomplishments = [
  {
    date: "2026",
    title: "Indigenous Tech",
    description:
      "Technology studio for web, mobile, and digital products.",
    url: "https://indigenous-tech.com",
    branches: [
      {
        label: "Mint Studio",
        focus: "Development",
        url: "https://mintstudio.io",
      },
      {
        label: "Pixels Studio",
        focus: "Digital marketing",
        url: "https://pxlz.dk",
      },
    ],
  },
  {
    date: "2024",
    title: "Renklar",
    description: "Cleaning services company.",
    branches: [
      { label: "renklar.dk", url: "https://renklar.dk" },
      { label: "lumara.hu", url: "https://lumara.hu" },
      { label: "dustbusters.dk", url: "https://dustbusters.dk" },
    ],
  },
  {
    date: "2021",
    title: "Software Engineer",
    description:
      "Started freelancing as a web developer in Athens, Greece.",
  },
  {
    date: "2020",
    title: "Self-taught Developer",
    description:
      "Began learning development during the COVID-19 pandemic.",
  },
  {
    date: "2018",
    title: "Teleperformance",
    description: "Salesman, then manager at Teleperformance.",
  },
  {
    date: "2016",
    title: "Electronic Engineer",
    description: "Started as an electronic engineer at SAGEM Tunisia.",
  },
  {
    date: "2015",
    title: "Engineering Degree",
    description:
      "Graduated from the National School of Applied Sciences of Tunis, Tunisia.",
  },
];

const Accomplishments = () => {
  return (
    <Section id="accomplishments">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionTitle>Timeline</SectionTitle>
        </SectionHeader>
        <Timeline>
          {accomplishments.map((item, i) => (
            <TimelineItem
              key={`${item.date}-${item.title}`}
              as={motion.div}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineCard>
                <TimelineTitle>
                  {item.url ? (
                    <TitleLink
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </TitleLink>
                  ) : (
                    item.title
                  )}
                </TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
                {item.branches?.length > 0 && (
                  <BranchesList>
                    {item.branches.map((branch) => (
                      <BranchItem key={branch.label}>
                        {branch.url ? (
                          <BranchLink
                            href={branch.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {branch.label}
                          </BranchLink>
                        ) : (
                          <BranchLabel>{branch.label}</BranchLabel>
                        )}
                        {branch.focus && (
                          <BranchFocus>{branch.focus}</BranchFocus>
                        )}
                      </BranchItem>
                    ))}
                  </BranchesList>
                )}
              </TimelineCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: var(--space-lg);
  padding-bottom: var(--space-lg);
  position: relative;

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 36px;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: var(--border);
    transform: translateX(-50%);
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDate = styled.span`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  padding-top: 2px;
  text-align: right;
`;

const TimelineCard = styled(Card)`
  padding: var(--space-md) var(--space-lg);
`;

const TimelineTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
`;

const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;

const TimelineDescription = styled.p`
  font-size: 14px;
  color: var(--text-subtle);
  line-height: 1.6;
`;

const BranchesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
`;

const BranchItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
  flex-wrap: wrap;
`;

const BranchLabel = styled.span`
  font-size: 13px;
  color: var(--text);
`;

const BranchLink = styled.a`
  font-size: 13px;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;

const BranchFocus = styled.span`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export default Accomplishments;
