import Head from 'next/head'
import Base from '@layouts/Base'
import Carousel from '@components/Carousel2'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Personal Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Base>
        <Carousel
          clients={[
            {
              title: 'a',
              image: { url: 'https://source.unsplash.com/random/600x300?travel' },
              subtitle: 'a',
              alt: 'a',
            },
            {
              title: 'b',
              image: { url: 'https://source.unsplash.com/random/600x300?nature' },
              subtitle: 'b',
              alt: 'b',
            },
            {
              title: 'c',
              image: { url: 'https://source.unsplash.com/random/600x300?technology' },
              subtitle: 'c',
              alt: 'c',
            },
          ]}
        />
      </Base>
    </Fragment>
  )
}
