const Post = ({ post }) => {
  const { title, story_title, story_url, points, author } = post;

  return (
    <div className="post">
      <h2>{title ? title : story_title}</h2>
      <p>
        Post by: <b>{author}</b> | Points <b>{points}</b>
      </p>
      <a href={story_url} target="_blank">Read More</a>
    </div>
  );
};

export default Post;
