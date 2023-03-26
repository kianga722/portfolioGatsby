import React, { useEffect } from 'react';
import * as THREE from 'three';
import moonPic from '../assets/images/moon.jpg';
import normalPic from '../assets/images/normal.jpg';

import CanvasBackgroundStyles from '../styles/components/CanvasBackgroundStyles';

// TODO: Refactor to be more React-like
const CanvasBackground = () => {

  // To render on component mount
  function rendererInit() {

    // Functions
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.5, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
    
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(400));
    
      star.position.set(x, y, z);
      scene.add(star);
    }

    function addIntroShape() {
      // const geometry = new THREE.IcosahedronGeometry( 10 )
      const geometry = new THREE.TorusGeometry(10, 10, 10);
      const edges = new THREE.EdgesGeometry( geometry );
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const shape = new THREE.LineSegments(edges, material);

      scene.add( shape );
      return shape;
    }

    function addMoonShape() {
      const moonTexture = new THREE.TextureLoader().load(moonPic);
      const normalTexture = new THREE.TextureLoader().load(normalPic);
      const geometry = new THREE.SphereGeometry(3, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      });
      const shape = new THREE.Mesh(
        geometry,
        material
      );

      shape.position.setZ(20);
      shape.position.setX(-10);
      scene.add(shape);
      return shape;
    }


    // Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight)

    // Add stars
    Array(200).fill().forEach(addStar);

    // Add shapes
    const introShape = addIntroShape(); 
    const moonShape = addMoonShape();


    // Scroll Listener
    function handleScroll() {
      const t = document.body.getBoundingClientRect().top;

      camera.position.z = t * -0.02;
      camera.position.x = t * -0.0001;
      camera.rotation.y = t * -0.0001;
    }
    document.body.onscroll = handleScroll;
    handleScroll();

    // Resize Listener
    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      introShape.rotation.x += 0.001;
      introShape.rotation.y += 0.005;
      introShape.rotation.z += 0.001;

      moonShape.rotation.x += 0.005;

      renderer.render(scene, camera);
    }

    animate();
  }


  useEffect(() => {
    rendererInit()
  }, [])

  return (
    <CanvasBackgroundStyles id="bg">
    </CanvasBackgroundStyles>
  )
}

export default CanvasBackground;