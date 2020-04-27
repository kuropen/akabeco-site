import React, { useState } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Description from "../components/description"
import Footer from "../components/footer"

import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const [descriptionShown, setDescriptionShown] = useState(false);

  let buttonMessage = descriptionShown ? 'Close / 閉じる' : "What's this? / これは何？";

  return (
    <Layout className="top md:relative">
      <SEO />
      <Image />
      <div className={descriptionShown ? "md-overlay-open" : "md-overlay"}>
        <header className="md:flex md:flex-row">
          <h1 className="text-2xl font-bold">{data.site.siteMetadata.title}</h1>
          <div className="hidden md:block md:flex-grow md:text-right md:justify-end">
            <button
              className="p-2 border border-red-600 bg-red-600 rounded"
              onClick={() => setDescriptionShown(!descriptionShown)}>
              {buttonMessage}
            </button>
          </div>
        </header>
        <Description className={descriptionShown ? "" : "md:hidden"} />
      </div>
      <Footer className="md-overlay-footer" style={descriptionShown ? {'display':'none'} : null} />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`;