module.exports = {
  siteMetadata: {
    title: "Kepler Sticka-Jones",
    description:
      "Kepler Sticka-Jones is a computer programmer and college student based out of Salt Lake City, with experience in entrepreneurship, student leadership, and open source software development.",
    siteUrl: "https://keplersj.com",
    social: [
      {
        name: "Email",
        id: "kepler@stickajones.org",
        url: "mailto:kepler@stickajones.org"
      },
      {
        name: "PGP",
        id: "BD03 EB59 2620 3455 CF0A 838E F711 C2D5 38D9 CF6C",
        url:
          "https://keybase.io/keplersj/pgp_keys.asc?fingerprint=bd03eb5926203455cf0a838ef711c2d538d9cf6c"
      },
      {
        name: "GitHub",
        id: "keplersj",
        url: "https://github.com/keplersj",
        isProfile: true
      },
      {
        name: "Twitter",
        id: "@realKeplerSJ",
        url: "https://twitter.com/realKeplerSJ",
        isProfile: true
      },
      {
        name: "LinkedIn",
        id: "keplersj",
        url: "https://www.linkedin.com/in/keplersj/",
        isProfile: true
      },
      {
        name: "Keybase",
        id: "keplersj",
        url: "https://keybase.io/keplersj",
        isProfile: true
      },
      {
        name: "Instagram",
        id: "keplersj_",
        url: "https://www.instagram.com/keplersj_/",
        isProfile: true
      }
    ],
    nav: [
      {
        name: "Blog",
        url: "/blog"
      },
      {
        name: "Portfolio",
        url: "/portfolio"
      },
      {
        name: "About",
        url: "/about"
      }
    ]
  },
  plugins: [
    "gatsby-theme-kepler",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-123145115-1",
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-verify-bing",
      options: {
        userIds: ["E5D802A305BE2DD99EB4484A4B1DD90E"]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: "Kepler Sticka-Jones",
        short_name: "Kepler S-J",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#409040",
        display: "minimal-ui",
        icon: "content/assets/avatar.jpg"
        /* eslint-enable @typescript-eslint/camelcase */
      }
    },
    "gatsby-plugin-offline"
  ]
};
