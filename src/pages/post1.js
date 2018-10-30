import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div key={node.id} dangerouslySetInnerHTML={{ __html: node.html }} />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
