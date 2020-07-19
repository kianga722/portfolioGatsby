import React, {useEffect} from 'react';
import Project from './Project';
import workout531 from '../images/531workout.png'
import playlistAnalyze from '../images/playlistAnalyze.png'
import layoutscroll from '../images/layoutscroll.png'
import motivator from '../images/motivator.png'
import nsong from '../images/nsong.png'
import ytshuffle from '../images/ytshuffle.png'
import cnotify from '../images/cnotify.png'
import statusw from '../images/statusw2.png'
import yourinfo from '../images/yourinfo.png'

import ProjectContainerStyles from '../styles/components/ProjectContainerStyles';

const ProjectContainer = () => {
  // Mobile slide-in effect
  useEffect(() => {
    const scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
    
    const eles = document.querySelectorAll('.show-on-scroll');

    const isElementInViewport = el => {
      const rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      )
    }

    const loop = () => {
      eles.forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      })

      scroll(loop)
    }

    loop()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProjectContainerStyles>

      <h1 className='title'>Projects</h1>
      <div className='projects-display'>
        <Project
          site='https://workout531.herokuapp.com/'
          repo='https://github.com/kianga722/531workout'
          image={workout531}
          title='531workout'
          description='Generates workouts for the 5/3/1 lifting program using React, Node, and MongoDB '
        />
        <Project
          site='https://nsong.herokuapp.com'
          repo='https://github.com/kianga722/nsong'
          image={nsong}
          title='nsong'
          description='Displays recent songs from popular Youtube channels using React, Express, and the Youtube API'
        />
        <Project
          site='https://d3analyze.herokuapp.com/'
          repo='https://github.com/kianga722/playlistAnalyze'
          image={playlistAnalyze}
          title='playlistAnalyze'
          description='Displays the artist distribution by song count in a Spotify playlist using D3 and React'
        />
        <Project
          site='https://statuspog.herokuapp.com/'
          repo='https://github.com/kianga722/statusw'
          image={statusw}
          title='statusw'
          description='Using React and Express, displays the online status of Twitch streamers and updates live'
        />
        <Project
          site='https://dudejustdoit.herokuapp.com'
          repo='https://github.com/kianga722/motivator'
          image={motivator}
          title='motivator'
          description='Uses React, Express, and MongoDB to display random motivational quotes and videos'
        />
        <Project
          site='https://cnotify.herokuapp.com/'
          repo='https://github.com/kianga722/cnotify'
          image={cnotify}
          title='cnotify'
          description='Made using Rails and JavaScript, this project helps find events personalized to my tastes'
        />
        <Project
          site='https://kianga722.github.io/yourinfo/'
          repo='https://github.com/kianga722/yourinfo'
          image={yourinfo}
          title='yourinfo'
          description='Created with React, displays info that can be obtained from a user simply visiting a website'
        />
        <Project
          site='https://ytshuffle.herokuapp.com/'
          repo='https://github.com/kianga722/ytshuffle'
          image={ytshuffle}
          title='ytshuffle'
          description='Built primarily using Rails, this project shuffles and plays Youtube playlists'
        />
        <Project
          site='https://kianga722.github.io/layoutscroll'
          repo='https://github.com/kianga722/layoutscroll'
          image={layoutscroll}
          title='layoutscroll'
          description='Infinitely scrolling layout generator using HTML, CSS, and JavaScript'
        />
      </div>

    </ProjectContainerStyles>
  )
}


export default ProjectContainer;