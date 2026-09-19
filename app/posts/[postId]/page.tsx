import IPostType from "@/types/posts";

export const generateStaticParams = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok){
        throw new Error("Data is not found");
    }

    const posts: IPostType[] = await res.json();

    return posts.slice(0, 10).map(post => ({postId: post.id.toString()}));
}


interface IParamsProps{
    params : Promise<{postId: string}>
}

const PostDeatailsPage = async({params}:IParamsProps) => {
    const {postId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if(!res.ok){
        throw new Error("Error found");
    }

    const post: IPostType = await res.json();

    const {body, userId} = post

    return (
        <div className="border-2 border-amber-400 p-4">
            <h1>{userId}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDeatailsPage;