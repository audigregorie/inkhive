import { IKImage } from 'imagekitio-react';
import { ImageProps } from '../utils/common';

const Image: React.FC<ImageProps> = ({ urlEndpoint, path, alt, className }) => {
  return <IKImage urlEndpoint={urlEndpoint} path={path} alt={alt} lqip={{ active: true, quality: 20 }} className={className} />;
};

export default Image;
