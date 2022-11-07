import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ResourcesPage = ({ data }) => {
  return (
    <Layout pageTitle="Resources">
      <p>All PM templates, tools, guides, and resources will go here.</p>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <li>
              <Link to={`/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMM YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Resources" />

export default ResourcesPage
