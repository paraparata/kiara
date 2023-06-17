import { Canvas } from '@react-three/fiber';
import { Center, Text3D, OrbitControls, Stage } from '@react-three/drei';

const Kirara = () => {
  return (
    <Canvas orthographic camera={{ position: [0, 10, 100], zoom: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Center rotation={[-0.5, -0.25, 0]}>
        <Stage
          shadows='accumulative'
          adjustCamera={0.9}
          intensity={0.5}
          environment='city'
        >
          <Text3D
            castShadow
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1.5}
            font='/Inter_Bold.json'
          >
            {`kiara`}
            <ambientLight intensity={0.1} />
            <meshMatcapMaterial color='#d1efc3' />
          </Text3D>
        </Stage>
      </Center>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Kirara;
