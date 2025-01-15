import { format } from 'timeago.js';
// import Image from '../../components/Image';
import { CommentListItemProps } from '../../utils/common';
import { Avatar } from '@mui/material';
import { getInitials } from '../../utils/helpers';

const CommentListItem = ({ comment }: CommentListItemProps) => {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-4">
        {/* <Image */}
        {/*   path={comment.user.image || '/public/default-avatar.png'} */}
        {/*   alt={comment.user.username} */}
        {/*   className="h-10 w-10 rounded-full object-cover" */}
        {/*   imageWidth="40" */}
        {/*   imageHeight="40" */}
        {/* /> */}
        {comment.user.username ? (
          <Avatar src={comment.user.image} alt={comment.user.username} />
        ) : (
          <Avatar alt={comment.user.username}>{getInitials(comment.user.username)}</Avatar>
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
      </div>

      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default CommentListItem;
