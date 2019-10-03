import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Page from "./index";

beforeEach((): void => {
  (useStaticQuery as jest.Mock).mockImplementation((): object => ({
    file: {
      childImageSharp: {
        fixed: {
          base64: "",
          width: 100,
          height: 100,
          src: "",
          srcSet: ""
        }
      }
    },
    image: {
      childImageSharp: {
        fixed: {
          base64: "",
          width: 100,
          height: 100,
          src: "",
          srcSet: ""
        }
      }
    },
    backdrop: {
      childImageSharp: {
        fluid: {
          base64: "",
          aspectRatio: "",
          src: "",
          srcSet: "",
          srcWebp: "",
          srcSetWebp: "",
          sizes: ""
        }
      }
    },
    site: {
      siteMetadata: {
        title: "",
        description: "",
        siteUrl: "",
        social: [
          {
            name: "Twitter",
            id: "@test",
            url: "https://twitter.com/test",
            isProfile: true
          },
          {
            name: "GitHub",
            id: "test",
            url: "https://github.com/test",
            isProfile: true
          }
        ]
      }
    }
  }));
});

describe("Index Page", (): void => {
  it("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Page
          path="/"
          data={{
            site: {
              siteMetadata: {
                title: "Kepler Sticka-Jones",
                description: "",
                siteUrl: "",
                social: [
                  {
                    name: "Twitter",
                    id: "@test",
                    url: "https://twitter.com/test",
                    isProfile: true
                  },
                  {
                    name: "GitHub",
                    id: "test",
                    url: "https://github.com/test",
                    isProfile: true
                  }
                ],
                nav: [
                  {
                    name: "Blog",
                    url: "/blog"
                  },
                  {
                    name: "Projects",
                    url: "/projects"
                  },
                  {
                    name: "About",
                    url: "/about"
                  }
                ]
              }
            },
            metadataImage: {
              childImageSharp: {
                fixed: {
                  base64: "",
                  width: 100,
                  height: 100,
                  src: "",
                  srcSet: ""
                }
              }
            }
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
