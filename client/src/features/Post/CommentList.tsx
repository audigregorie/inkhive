import CommentListItem from './CommentListItem';

const CommentList = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="mb-4 flex w-full items-center justify-between gap-8">
        <textarea name="" id="" placeholder="Write a comment..." className="w-full rounded-xl p-4" />
        <button type="button" className="rounded-xl bg-blue-800 px-4 py-3 font-medium text-white">
          Send
        </button>
      </div>
      <CommentListItem />
      <CommentListItem />
      <CommentListItem />
      <CommentListItem />
      <CommentListItem />
    </div>
  );
};

export default CommentList;
