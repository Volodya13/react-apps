import { Image } from 'react-konva';
import useImage from 'use-image';

type CharProps = {
  x: number;
  y: number;
};

function Char({ x, y }: CharProps) {
  const [charImage] = useImage('./src/assets/Character.png');

  return charImage && <Image image={charImage} x={x} y={y} width={50} height={50} />;
}

export default Char;
