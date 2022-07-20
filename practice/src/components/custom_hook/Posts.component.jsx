import useFetch from "./useFetch";

import Post from "./Post.component";

const Posts = () => {
    const {posts, error, isLoading} = useFetch('https://my-json-server.typicode.com/typicode/demo/posts');

    const loading =  (isLoading && <span>Loading...</span>);

    return (
        <div>
            {loading}
            {!isLoading && error ? (
                <span>There is some error...</span> 
            ) : (
                <ul>
                    <Post posts={posts} />
                </ul>
            )}
        </div>
    );
}

export default Posts;



