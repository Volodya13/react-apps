import { Image, Group } from 'react-konva';
import useImage from 'use-image';

type PlatformProps = {
  level?: number;
  isIntermediate?: boolean;
  isStart?: boolean;
  isFinish?: boolean;
  flag?: boolean;
  treesAndRocks?: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
};

function Platform({ flag = false, width, height, x, y }: PlatformProps) {
  const [platformThumb] = useImage('./src/assets/platform.png');
  const [flagImage] = useImage('./src/assets/flag.png');

  return (
    <Group x={x} y={y}>
      {platformThumb && <Image image={platformThumb} width={width} height={height} />}
      {flag && flagImage && (
        <Image image={flagImage} width={20} height={20} x={width / 2 - 10} y={-20} />
      )}
    </Group>
  );
}

export default Platform;
