import React from 'react';
import Layout from '../components/layout';
import CanvasBackground from '../components/CanvasBackground';
import Navbar from '../components/Navbar';
import ResumeBtn from '../components/ResumeBtn';
import Profile from '../components/Profile';
import ProjectContainer from '../components/ProjectContainer';

import Helmet from "react-helmet"

export default function Home() {
  return ( 
    <Layout>
      <Helmet>
        <title>Andrew Kiang's Cool Amazing Site</title>
      </Helmet>

      <CanvasBackground />
      
      <main className='content'>
        <Navbar />

        <section className='content-top'>
          <ResumeBtn />
        </section>
      
        <Profile />
        
        <ProjectContainer />
      </main>
      
    </Layout>
  )
}
