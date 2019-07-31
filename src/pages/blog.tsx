import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import BaseLayout from "../layouts/Base";
import { Helmet } from "react-helmet";
import { BlogPostItem as Post } from "../components/BlogPostItem";

const Posts = styled.div`
  max-width: 55em;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 55em) {
    margin-left: 2em;
    margin-right: 2em;
  }
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          rawMarkdownBody: string;
          excerpt: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            date: string;
            description: string;
          };
          timeToRead: string;
          wordCount: {
            words: string;
          };
        };
      }[];
    };
  };
}

const BlogPage = ({ data }: Props): React.ReactElement<Props> => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "CollectionPage",
          name: "Blog | Kepler Sticka-Jones",
          url: "/blog",
          about: {
            "@type": "Blog | Kepler Sticka-Jones",
            url: "/blog",
            blogPosts: data.allMarkdownRemark.edges.map(({ node }): object => ({
              "@type": "BlogPost",
              // articleBody: node.rawMarkdownBody,
              wordCount: node.wordCount.words,
              name: node.frontmatter.title,
              description: node.frontmatter.description || node.excerpt,
              url: node.fields.slug
              // text: node.rawMarkdownBody
            }))
          }
        })}
      </script>
    </Helmet>

    <BaseLayout title="Blog">
      <Posts>
        <h1>Blog</h1>
        <div>
          {data.allMarkdownRemark.edges.map(
            ({ node }): React.ReactElement => (
              <Post
                key={node.id}
                location={node.fields.slug}
                title={node.frontmatter.title}
                publishDate={node.frontmatter.date}
                wordCount={node.wordCount.words}
                minutesNeededToRead={node.timeToRead}
                description={node.frontmatter.description || node.excerpt}
              />
            )
          )}
        </div>
      </Posts>
    </BaseLayout>
  </>
);

export default BlogPage;

export const query = graphql`
  query BlogPageData {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          rawMarkdownBody
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`;
