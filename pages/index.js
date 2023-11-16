import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

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

function URLForm() {
  const [textInForm, setTextInForm] = React.useState("");


  function handleShorten() {
   if (textInForm) {
      alert('Shortening url: ' + textInForm);
      setTextInForm("");
    } else {
      alert('Please enter a url');
    }
  }

  return (

    <div>
      <input value={textInForm} placeholder="enter url" type="text" onChange={(e) => setTextInForm(e.target.value)}/>
      <button onClick={handleShorten}>Shorten</button>
    </div>

  );
}