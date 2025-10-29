import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useTheme } from 'next-themes';

const FloatingShape = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Scene3D = () => {
  const { theme } = useTheme();
  
  const colors = theme === 'dark' 
    ? ['#0ea5e9', '#3b82f6', '#10b981']
    : ['#ec4899', '#f97316', '#a855f7'];

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <FloatingShape position={[-2, 1, 0]} color={colors[0]} />
        <FloatingShape position={[2, -1, -1]} color={colors[1]} />
        <FloatingShape position={[0, 2, -2]} color={colors[2]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
