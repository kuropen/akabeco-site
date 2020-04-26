import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({className}) => {
  const data = useStaticQuery(graphql`
    query {
      bekoImage: file(relativePath: { eq: "beko1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bekoImage2: file(relativePath: { eq: "beko2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  const imageCandidates = Object.keys(data);
  console.log(imageCandidates);
  const selectedImage = imageCandidates[Math.floor(Math.random() * imageCandidates.length)];

  return (
    <Img fluid={data[selectedImage].childImageSharp.fluid} />
  );
}

export default Image
