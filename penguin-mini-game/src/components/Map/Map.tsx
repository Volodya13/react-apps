import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import { useEffect, useState } from 'react';
import Platform from '../../utils/ui/Platform/Platform.tsx';
import Char from '../Char/Char.tsx';

const Map = () => {
  const [backgroundImage] = useImage('./src/assets/Map.jpg');
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const calculateDimensions = () => {
    if (backgroundImage) {
      const imgRatio = backgroundImage.width / backgroundImage.height;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const screenRatio = screenWidth / screenHeight;

      if (imgRatio > screenRatio) {
        return {
          width: screenWidth,
          height: screenWidth / imgRatio,
        };
      } else {
        return {
          width: screenHeight * imgRatio,
          height: screenHeight,
        };
      }
    }
    return { width: window.innerWidth, height: window.innerHeight };
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions(calculateDimensions());
    };

    setDimensions(calculateDimensions());

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [backgroundImage]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {backgroundImage && (
          <Image
            image={backgroundImage}
            x={(window.innerWidth - dimensions.width) / 2}
            y={(window.innerHeight - dimensions.height) / 2}
            width={dimensions.width}
            height={dimensions.height}
          />
        )}
        <Platform x={225} y={660} width={40} height={20} />
        <Char x={215} y={625} />
      </Layer>
    </Stage>
  );
};

export default Map;
