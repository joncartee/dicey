import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';

import * as Styled from './styles';

const OS = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "os section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "os" } } }, sort: { fields: fileAbsolutePath }) {
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
  const os = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Skills>
        {os.map((item) => {
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

export default OS;
