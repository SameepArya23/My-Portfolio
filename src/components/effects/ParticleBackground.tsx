import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const count = 500;
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    
    return [positions, velocities];
  }, []);

  // Create buffer attribute
  const positionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(positions, 3);
  }, [positions]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update positions based on velocity
      positionArray[i3] += velocities[i3];
      positionArray[i3 + 1] += velocities[i3 + 1];
      positionArray[i3 + 2] += velocities[i3 + 2];
      
      // Add subtle wave motion
      positionArray[i3 + 1] += Math.sin(time * 0.5 + positionArray[i3] * 0.5) * 0.002;
      
      // Mouse interaction - gentle repulsion
      const dx = positionArray[i3] - mouseRef.current.x * 5;
      const dy = positionArray[i3 + 1] - mouseRef.current.y * 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 3) {
        const force = (3 - dist) * 0.001;
        positionArray[i3] += dx * force;
        positionArray[i3 + 1] += dy * force;
      }
      
      // Boundary wrapping
      if (positionArray[i3] > 10) positionArray[i3] = -10;
      if (positionArray[i3] < -10) positionArray[i3] = 10;
      if (positionArray[i3 + 1] > 10) positionArray[i3 + 1] = -10;
      if (positionArray[i3 + 1] < -10) positionArray[i3 + 1] = 10;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={positionAttribute} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
