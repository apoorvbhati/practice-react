const Post = ({posts}) => {
    return (
        posts && posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))
    );
}

export default Post;