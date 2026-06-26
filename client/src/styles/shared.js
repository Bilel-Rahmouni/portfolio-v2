import styled from "styled-components";

export const Section = styled.section`
  padding: var(--section-y) 0;
  position: relative;
  background: var(--bg);
  scroll-margin-top: 80px;
`;

export const Container = styled.div`
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

export const SectionHeader = styled.div`
  margin-bottom: var(--space-xl);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

export const Card = styled.div`
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--text-subtle);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 4px;
  letter-spacing: 0.02em;
`;

export const Button = styled.button`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $primary }) => ($primary ? "var(--text)" : "transparent")};
  color: ${({ $primary }) => ($primary ? "var(--bg)" : "var(--text)")};
  border: 1px solid
    ${({ $primary }) => ($primary ? "var(--text)" : "var(--border)")};

  &:hover {
    border-color: var(--border-hover);
    background: ${({ $primary }) =>
      $primary ? "var(--text-subtle)" : "var(--bg-subtle)"};
    color: ${({ $primary }) => ($primary ? "var(--bg)" : "var(--text)")};
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-subtle);
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text);
    border-color: var(--border-hover);
    background: var(--bg-subtle);
  }
`;

export const ListItem = styled.li`
  color: var(--text-subtle);
  font-size: 14px;
  line-height: 1.6;
  padding-left: 16px;
  position: relative;
  margin-bottom: var(--space-xs);

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--text-muted);
  }
`;

export const MutedText = styled.p`
  color: var(--text-subtle);
  font-size: 15px;
  line-height: 1.7;
`;
