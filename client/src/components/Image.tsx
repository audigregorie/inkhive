import { IKImage } from 'imagekitio-react';
import { ImageProps } from '../utils/common';

const Image: React.FC<ImageProps> = ({ path, alt, imageWidth, imageHeight, className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      lqip={{ active: true, quality: 20 }}
      className={className}
      transformation={[
        {
          width: imageWidth,
          height: imageHeight
        }
      ]}
    />
  );
};

export default Image;
