import React, {useEffect} from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import ProjectContainer from '../components/ProjectContainer';

export default function Home() {
  // Background Mousemove effect
  useEffect(() => {
    const el = document.querySelector(".page-wrap");

    var movementStrength = 25;
    var height = movementStrength / window.innerHeight;
    var width = movementStrength / window.innerWidth;
    el.addEventListener("mousemove", (e) => {
      var pageX = e.pageX - (window.innerWidth / 2);
      var pageY = e.pageY - (window.innerHeight / 2);
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
      el.style.setProperty('--x', newvalueX + "px");
      el.style.setProperty('--y', newvalueY + "px");
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( 
    <Layout>
      <div className='page-wrap'>
        <Navbar />
        <main className='content'>
          <Profile />
          <ProjectContainer />
        </main>
      </div>
    </Layout>
  )
}
