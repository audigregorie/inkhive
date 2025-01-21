import { IKContext, IKUpload } from 'imagekitio-react';
import { UploadMediaProps } from '../utils/interfaces';
import { useRef } from 'react';

const authenticator = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (err) {
    throw new Error(`Authentication request failed: ${err}`);
  }
};

const UploadMedia: React.FC<UploadMediaProps> = ({ children, setProgress, setData, setOnErrorSpan, type }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const onUploadProgress = (progressEvent: any) => {
    setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
  };

  const handleUploadError = (err: any) => {
    console.error('Upload error:', err);
    setOnErrorSpan(<span className="text-sm text-red-500">Failed to upload image. Please try again.</span>);
  };

  const handleUploadSuccess = (res: any) => {
    console.log('Upload successful:', JSON.stringify(res, null, 2));

    setData(res);
    setOnErrorSpan(null);
  };

  return (
    <IKContext publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY} urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} authenticator={authenticator}>
      <IKUpload
        useUniqueFileName
        folder="public/"
        onUploadProgress={onUploadProgress}
        onError={handleUploadError}
        onSuccess={handleUploadSuccess}
        ref={ref}
        accept={`${type}/*`}
        className="hidden"
      />
      <div onClick={() => ref.current?.click()}>{children}</div>
    </IKContext>
  );
};

export default UploadMedia;
