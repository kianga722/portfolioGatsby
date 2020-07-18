import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import ProjectContainer from '../components/ProjectContainer';

import Helmet from "react-helmet"

export default function Home() {
  return ( 
    <Layout>

      <Helmet>
        <title>Andrew Kiang's Cool Amazing Site</title>
      </Helmet>
      
      <Navbar />
      <main className='content'>
        <Profile />
        <ProjectContainer />
      </main>
      
    </Layout>
  )
}
