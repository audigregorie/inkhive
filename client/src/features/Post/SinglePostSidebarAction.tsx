import { IoBookmark, IoTrash } from 'react-icons/io5';

const SinglePostSidebarAction = () => {
  return (
    <>
      <h1 className="mb-4 mt-8 text-sm font-light">Actions</h1>
      <div className="flex cursor-pointer items-center gap-2 pb-2 text-sm">
        <IoBookmark className="h-4 w-4" />
        <span>Save this post</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 text-sm">
        <IoTrash className="h-4 w-4 text-red-700" />
        <span>Delete this post</span>
      </div>
    </>
  );
};

export default SinglePostSidebarAction;
