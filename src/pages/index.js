import React, { Component } from "react"


class Homepage extends Component {

  
  render() {

    fetch('https://wp_gatsby.test/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            {
                generalSettings {
                    url
                    title
                }
            }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data))

    // const data = this.props.data

    return (
      <>
        <div>
          <h1>Pages</h1>
          {/* {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))} */}
        </div>

        <h1>Posts</h1>
        {/* {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div> 
        ))} */}
      </>
    )
  }
}

export default Homepage
