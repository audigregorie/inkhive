import { ReactNode, useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { ImageKitMediaResponse, NewPost } from '../utils/interfaces';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { MoonLoader } from 'react-spinners';
import UploadMedia from '../components/UploadMedia';
import { toast } from 'sonner';

const CreatePost = () => {
  const [value, setValue] = useState<string>('');
  const [cover, setCover] = useState<ImageKitMediaResponse | null>(null);
  const [image, setImage] = useState<ImageKitMediaResponse | null>(null);
  const [video, setVideo] = useState<ImageKitMediaResponse | null>(null);
  const [progress, setProgress] = useState<number>(0);

  // testing fix Error span in multiple places
  const [onErrorSpanCover, setOnErrorSpanCover] = useState<ReactNode | null>(null);
  const [onErrorSpanImage, setOnErrorSpanImage] = useState<ReactNode | null>(null);
  const [onErrorSpanVideo, setOnErrorSpanVideo] = useState<ReactNode | null>(null);

  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('general');
  const [description, setDescription] = useState<string>('');

  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost: NewPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onSuccess: (res) => {
      navigate(`/${res.data.slug}`);
    },
    onError: (err) => {
      toast.error('Error creating post');
      console.error('Error creating post:', err);
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: NewPost = {
      image: cover?.filePath || '',
      title: title.trim(),
      category: category,
      description: description,
      content: value
    };

    mutation.mutate(formData);
  };

  useEffect(() => {
    image && setValue((prev) => prev + `<p><img src="${image.url}" /></p>`);
  }, [image]);

  useEffect(() => {
    video && setValue((prev) => prev + `<p><iframe src="${video.url}" class="ql-video" /></p>`);
  }, [video]);

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded && !isSignedIn) return <div>Login Component</div>;

  return (
    <div className="md:[calc(100vh-80px)] flex h-[calc(100vh-64px)] flex-col gap-6">
      <h1 className="mb-4 text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="mb-8 flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <UploadMedia setProgress={setProgress} setData={setCover} setOnErrorSpan={setOnErrorSpanCover} type="image">
            <button type="button" className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">
              Add a cover image
            </button>
          </UploadMedia>

          {progress > 0 && progress < 100 && <span className="text-sm text-gray-600">Uploading... {progress}%</span>}
          {onErrorSpanCover}
        </div>

        <input
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          className="bg-transparent text-4xl font-semibold outline-none"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select
            onChange={(e) => setCategory(e.currentTarget.value)}
            value={category}
            name="category"
            id="category"
            className="rounded-xl bg-white p-2 shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          onChange={(e) => setDescription(e.currentTarget.value)}
          value={description}
          name="description"
          id="description"
          placeholder="A short description"
          className="rounded-xl bg-white p-4 shadow-md"
        />

        <div className="flex flex-col">
          <div className="mb-2 flex gap-2">
            <div>
              <UploadMedia setProgress={setProgress} setData={setImage} setOnErrorSpan={setOnErrorSpanImage} type="image">
                <button type="button" className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">
                  Import image
                </button>
              </UploadMedia>
            </div>
            <div>
              <UploadMedia setProgress={setProgress} setData={setVideo} setOnErrorSpan={setOnErrorSpanVideo} type="video">
                <button type="button" className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">
                  Import video
                </button>
              </UploadMedia>
            </div>
            {progress > 0 && progress < 100 && <span className="text-sm text-gray-600">Uploading... {progress}%</span>}
            {onErrorSpanImage}
            {onErrorSpanVideo}
          </div>
        </div>

        <ReactQuill theme="snow" value={value} onChange={setValue} readOnly={progress > 0 && progress < 100} className="flex-1 rounded-xl bg-white shadow-md" />

        {/* // testing fix moonloader */}
        <button
          disabled={mutation.isPending || (progress > 0 && progress < 100)}
          className="mt-4 w-1/12 rounded-xl bg-blue-800 p-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-blue-400">
          {mutation.isPending ? <MoonLoader size={20} /> : 'Send'}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default CreatePost;
