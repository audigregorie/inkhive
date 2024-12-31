import Image from '../../components/Image';

const CommentListItem = () => {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-4">
        <Image
          path="/public/christian-engineer-upsplash.jpg"
          alt="User profile image"
          className="h-10 w-10 rounded-full object-cover"
          imageWidth="40"
          imageHeight="40"
        />
        <span className="font-medium">Yves Saint Laurent</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>

      <div className="mt-4">
        <p>
          Architecto harum enim in sint nihil magni, nisi quia, asperiores perspiciatis est laudantium sapiente! Libero nostrum veniam, quos minima aperiam
          dolor nesciunt?
        </p>
      </div>
    </div>
  );
};

export default CommentListItem;
