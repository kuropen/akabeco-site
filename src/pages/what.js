import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Description from "../components/description"
import Footer from "../components/footer"

import { graphql, Link } from "gatsby"

export default ({data}) => {
    return (
      <Layout>
        <SEO title="What is Akabeko?" />
        <header className="md:flex md:flex-row">
          <h1 className="text-2xl font-bold">{data.site.siteMetadata.title}</h1>
        </header>
        <Description />
        <footer>
          <div className="my-4">
            <Link to="/" className="p-2 border border-red-600 bg-red-600 rounded">Back / 戻る</Link>
          </div>
          <Footer />
        </footer>
      </Layout>
    );
};

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`;