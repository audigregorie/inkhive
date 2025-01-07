import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { PostData } from '../utils/common';

const ManagePost = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState<string>('');
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost: PostData) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onError: (error) => {
      console.error('Error creating post:', error);
    },
    onSuccess: (response) => {
      console.log('Post created successfully:', response);
    }
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded && !isSignedIn) return <div>Login Component</div>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: PostData = {
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      content: value
    };

    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="md:[calc(100vh-80px)] flex h-[calc(100vh-64px)] flex-col gap-6">
      <h1 className="mb-4 text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="mb-8 flex flex-1 flex-col gap-6">
        <button className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">Add a cover image</button>
        <input type="text" name="title" placeholder="Title" className="bg-transparent text-4xl font-semibold outline-none" />
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select name="category" id="category" className="rounded-xl bg-white p-2 shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="description" id="description" placeholder="A short description" className="rounded-xl bg-white p-4 shadow-md" />
        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="" className="flex-1 rounded-xl bg-white shadow-md" />
        <button className="mt-4 w-1/12 rounded-xl bg-blue-800 p-2 font-medium text-white">Send</button>
      </form>
    </div>
  );
};

export default ManagePost;
