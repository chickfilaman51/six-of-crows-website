import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ice_court from 'six-of-crows-website/src/assets/ice court.glb';

import CanvasLoader from "../Loader";

const Prototype = ({ isMobile }) => {
  const model = useGLTF(ice_court);

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <pointLight intensity={0.1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.05 : 0.2} // Adjust the scale values as needed
        position={isMobile ? [10, -20, -2.2] : [0, 0, -2]}
        rotation={[-0.01, -1, 100]}
      />

    </mesh>
  );
};
const PrototypeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (

    <div id="3d-model" className="bg-gradient1 flex flex-col items-center py-8">
      <h2 id = "ice-court" className="text-5xl text-white font-comforter rounded-2xl bg-black p-10 mt-20 font-semibold mb-4" data-aos="fade-down">
        <span className="text-green-300 font-comforter">4 )</span> The Ice Court
      </h2>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 30, 15], fov: 90 }}
        gl={{ preserveDrawingBuffer: true }}
        className="min-h-screen"
        style={{ height: '75vh', width: '100vw' }}
        data-aos="fade-up"
      >
      <Suspense fallback={<CanvasLoader />} className="min-h-screen">
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Prototype isMobile={isMobile} />
      </Suspense>
      <Preload all />
      </Canvas>
    </div>
  );
};

export default PrototypeCanvas;
