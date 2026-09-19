import IPostType from "@/types/posts";

interface IPostProps {
    post: IPostType
}

const PostCard = ({post}:IPostProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Post Details</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
