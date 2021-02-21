/* eslint-disable no-console */
/* eslint-disable max-len */
import dynamic from 'next/dynamic'
import { Fragment, useRef } from 'react'
import Head from 'next/head'

const IsotopeDynamic = dynamic(
  () => import('@components/Isotope'),
  { ssr: false }
)

export default function Home() {
  //
  const refGrid = useRef()
  return (
    <Fragment>
      <Head>
        {(typeof window !== 'undefined') && (<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js" />)}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
      </Head>
      <main className="container py-5">
        {(typeof window !== 'undefined') && <IsotopeDynamic inputRef={refGrid} />}
        <div
          className="row"
          ref={refGrid}
        >
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="1" data-order="8" data-group="[1]">
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
                <title>Placeholder 1 5</title>
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="2" data-order="6" data-group="[2,3]">
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="3" data-order="7" data-group="[1,2,3]">
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="4" data-order="2" data-group="[1,2]">
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="5" data-order="4" data-group="[1]">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has a regular title and short paragraph of text below it.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="6" data-order="3" data-group="[1,2]">
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="7" data-order="5" data-group="[2,3]">
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
          <div className="col-sm-6 col-lg-4 mb-4 grid-item" data-id="8" data-order="1" data-group="[3]">
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
