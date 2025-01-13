import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';

// Animated floating sphere component
const FloatingSphere = ({ position, color, size }) => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.position.y = position[1] + Math.sin(t) * 0.5; // Floating animation
        }
    });

    return (
        <Sphere ref={sphereRef} position={position} args={[size, 32, 32]}>
            <meshPhongMaterial
                color={color}
                transparent
                opacity={0.6}
                emissive={color}
                emissiveIntensity={0.3}
            />
        </Sphere>
    );
};

// Scene content
const SceneContent = () => {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />

            {/* Floating Spheres */}
            <FloatingSphere position={[-10, 5, -8]} color="#4299e1" size={2} />
            <FloatingSphere position={[10, -5, -9]} color="#9f7aea" size={4} />
            <FloatingSphere position={[0, 8, -12]} color="#38b2ac" size={3} />

            {/* Starry Background */}
            <Stars
                radius={150}
                depth={60}
                count={5000}
                factor={4}
                saturation={0.2}
                fade
                speed={1.5}
            />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 20], fov: 60 }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <SceneContent />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
