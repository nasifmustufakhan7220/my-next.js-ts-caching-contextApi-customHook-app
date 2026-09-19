import IPostType from "@/types/posts";
import PostCard from "../components/PostCard/PostCard";

const getPost = async()=>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'force-cache'});
        return res.json();
    } catch (error) {
        throw new Error(`${error} found`);
    }
}


const PostsPage = async() => {

    const posts : IPostType[] = await getPost();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostsPage;