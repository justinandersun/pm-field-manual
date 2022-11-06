module.exports = {
  siteMetadata: {
    title: `PM Field Manual`,
    siteUrl: `https://pmfieldmanual.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "dfhfdghfgh"
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-mdx",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images",
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "resources",
      "path": "./resources",
    },
    __key: "resources"
  }]
};
