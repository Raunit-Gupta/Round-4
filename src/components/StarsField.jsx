
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarsField = ({ count = 200 }) => {
  const groupRef = useRef();

  const stars = useMemo(() => {
    const starsArray = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(600);
      const y = THREE.MathUtils.randFloatSpread(600);
      const z = THREE.MathUtils.randFloatSpread(600);
      starsArray.push({ position: [x, y, z] });
    }
    return starsArray;
  }, [count]);

  useFrame(() => {
    groupRef.current.rotation.y += 0.0005;
    groupRef.current.children.forEach((mesh) => {
      mesh.rotation.z += 0.01; // Incrementing rotation of each star
    });
  });

  return (
    <group   ref={groupRef}>
      {stars.map((star, index) => (
        <mesh key={index} position={star.position}>
          <sphereGeometry  args={[0.5, 32, 32]} />
          <meshBasicMaterial color={0xffffff} />
          <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
        </mesh>
      ))}
    </group>
  );
};

export default StarsField;

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  void main() {
    vec4 color = vec4(1.0, 0.0, 0.0, 1.0); // Red color for example
    gl_FragColor = color;
  }
`;
