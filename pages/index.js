import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import URLForm from '../components/URLForm';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Enter a url to shorten</h2>
        <URLForm />
      </section>
    </Layout>
  );
}
