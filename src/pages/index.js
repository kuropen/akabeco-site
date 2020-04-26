import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Description from "../components/description"
import Footer from "../components/footer"

import { graphql, Link } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <Layout className="top md:relative">
      <SEO />
      <div className="md-overlay">
        <header className="md:flex md:flex-row">
          <h1 className="text-2xl font-bold">{data.site.siteMetadata.title}</h1>
          <div className="hidden md:block md:flex-grow md:text-right md:justify-end">
            <Link to="/what" className="p-2 border border-red-600 bg-red-600 rounded inline-block">What's this? / これは何？</Link>
          </div>
        </header>
      </div>
      <Image />
      <Description className="md:hidden" />
      <Footer className="md-overlay-footer" />
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