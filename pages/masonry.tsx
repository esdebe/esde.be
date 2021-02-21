/* eslint-disable max-len */
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        {(typeof window !== 'undefined') && (<script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossOrigin="anonymous" async />)}
      </Head>
      <main className="container py-5">
        <h1>Bootstrap and Masonry</h1>
        <p className="lead">Integrate <a href="https://masonry.desandro.com/">Masonry</a> with the Bootstrap grid system and cards
          component.
        </p>

        <p>Masonry is not included in Bootstrap. Add it by including the JavaScript plugin manually, or using a CDN like so:
        </p>

        <pre>
          <code>
            &lt;script src=&quot;https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js&quot; integrity=&quot;sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D&quot; crossorigin=&quot;anonymous&quot; async&gt;&lt;/script&gt;
          </code>
        </pre>

        <p>By adding <code>data-masonry=&quot;&quot;</code> to the <code>.row</code> wrapper, we can combine
          the powers of Bootstrap&apos;s responsive grid and Masonry&apos;s positioning.
        </p>

        <hr className="my-5" />

        <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Image cap"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image cap
                </text>
              </svg>

              <div className="card-body">
                <h5 className="card-title">Card title that wraps to a new line</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card p-3">
              <figure className="p-3 mb-0">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0 text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Image cap"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image cap
                </text>
              </svg>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card bg-primary text-white text-center p-3">
              <figure className="mb-0">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0 text-white">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has a regular title and short paragraph of text below it.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card">
              <svg
                className="bd-placeholder-img card-img"
                width="100%"
                height="260"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Card image"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Card image
                </text>
              </svg>

            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card p-3 text-end">
              <figure className="mb-0">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0 text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is another card with title and supporting text below. This card has some additional
                  content to make it slightly taller overall.
                </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </Fragment>
  )
}
