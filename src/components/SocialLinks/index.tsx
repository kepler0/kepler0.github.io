import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { SocialLink } from "../SocialLink";

const ProfileLinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface Platform {
  name: string;
  id: string;
  url: string;
}

interface AboutPageQuery {
  site: {
    siteMetadata: {
      social: {
        name: string;
        id: string;
        url: string;
      }[];
    };
  };
}

export const SocialLinks = (
  props: React.ComponentProps<"section">
): React.ReactElement => {
  const {
    site: {
      siteMetadata: { social }
    }
  } = useStaticQuery<AboutPageQuery>(graphql`
    query AboutPageQuery {
      site {
        siteMetadata {
          social {
            name
            id
            url
          }
        }
      }
    }
  `);

  return (
    <ProfileLinksContainer {...props}>
      {social.map(
        (platform): React.ReactElement => (
          <SocialLink
            key={platform.id}
            name={platform.name}
            id={platform.id}
            url={platform.url}
          />
        )
      )}
    </ProfileLinksContainer>
  );
};