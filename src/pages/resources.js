import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ResourcesPage = ({ data }) => {
  return (
    <Layout pageTitle="Resources">
      <p>All PM templates, tools, guides, and resources will go here.</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "resources"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Resources" />

export default ResourcesPage
