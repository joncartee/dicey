import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';

import * as Styled from './styles';

const Skills = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
              url
              color
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const skills = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Skills>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage,url,color }
          } = item.node;
          console.log(item)

          return (
            <Styled.Skill key={id}>
              <a href={url}>
              <ProgressBar color={color} title={title} percentage={percentage} />
              </a>
            </Styled.Skill>
          );
        })}
      </Styled.Skills>
    </Container>
  );
};

export default Skills;
