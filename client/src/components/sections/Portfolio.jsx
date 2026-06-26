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
  LinkButton,
  MutedText,
} from "../../styles/shared";
import { portfolioGroups } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionTitle>Portfolio</SectionTitle>
        </SectionHeader>

        <GroupList>
          {portfolioGroups.map((group, i) => (
            <GroupCard
              key={group.id}
              as={motion.div}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GroupHeader>
                <div>
                  <GroupName>{group.name}</GroupName>
                  <MutedText>{group.description}</MutedText>
                </div>
                {group.url && (
                  <LinkButton
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {group.url.replace("https://", "")} →
                  </LinkButton>
                )}
              </GroupHeader>

              <BranchesBlock>
                <BranchesLabel>Branches</BranchesLabel>
                <BranchesRow>
                  {group.branches.map((branch) => (
                    <BranchCard key={branch.label}>
                      <BranchTop>
                        <BranchName>
                          {branch.url ? (
                            <BranchLink
                              href={branch.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {branch.label}
                            </BranchLink>
                          ) : (
                            branch.label
                          )}
                        </BranchName>
                        {branch.focus && (
                          <BranchFocus>{branch.focus}</BranchFocus>
                        )}
                      </BranchTop>
                    </BranchCard>
                  ))}
                </BranchesRow>
              </BranchesBlock>

              {group.projects?.length > 0 && (
                <ProjectsBlock>
                  <BranchesLabel>Projects</BranchesLabel>
                  <ProjectsRow>
                    {group.projects.map((project) =>
                      project.url ? (
                        <LinkButton
                          key={project.label}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.label} →
                        </LinkButton>
                      ) : (
                        <Tag key={project.label}>{project.label}</Tag>
                      )
                    )}
                  </ProjectsRow>
                </ProjectsBlock>
              )}
            </GroupCard>
          ))}
        </GroupList>
      </Container>
    </Section>
  );
};

const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const GroupCard = styled(Card)`
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
  flex-wrap: wrap;
`;

const GroupName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-xs);
`;

const BranchesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const ProjectsBlock = styled(BranchesBlock)``;

const BranchesLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const BranchesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-sm);
`;

const BranchCard = styled.div`
  padding: var(--space-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 4px;
`;

const BranchTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BranchName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
`;

const BranchLink = styled.a`
  color: inherit;
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

const ProjectsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

export default Portfolio;
