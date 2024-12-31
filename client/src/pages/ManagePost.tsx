import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const ManagePost = () => {
  return (
    <div className="md:[calc(100vh-80px)] flex h-[calc(100vh-64px)] flex-col gap-6">
      <h1 className="mb-4 text-xl font-light">Create a New Post</h1>
      {/* <form onSubmit={handleSubmit} className="mb-8 flex flex-1 flex-col gap-6"> */}
      <form className="mb-8 flex flex-1 flex-col gap-6">
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
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="" className="flex-1 rounded-xl bg-white shadow-md" /> */}
        <ReactQuill theme="snow" placeholder="" className="flex-1 rounded-xl bg-white shadow-md" />
        <button className="mt-4 w-1/12 rounded-xl bg-blue-800 p-2 font-medium text-white">Send</button>
      </form>
    </div>
  );
};

export default ManagePost;
