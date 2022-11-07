import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as home from '../components/home.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h2>Product management is hard.</h2>
      <h3>Learn <span className={home.emphasis}>when</span> and <span className={home.emphasis}>how</span> to use the right method.</h3>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
