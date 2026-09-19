import IPostType from "@/types/posts";
import Link from "next/link";

interface IPostProps {
    post: IPostType
}

const PostCard = ({post}:IPostProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post.id}`}><button className="btn btn-primary">Post Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
