import React, { Component, PropTypes } from "react";
import PostItem from './PostItem';
import tags from './../data/tags';

class PostThread extends Component {
  render() {
    const posts = this.props.posts.map((post) => {
      // DONE: map each post object to PostItem component
      // try to render list of tags for each post as well

      const postTags = post.tags.map((tagId) => tags[tagId]);

      return <PostItem key={post.id} post={post} tags={postTags} onTagDelete={this.props.onTagDelete} onEditPost={this.props.onEditPost} />
    });

    return <div>
      {posts}
    </div>;
  }
}

PostThread.propTypes = {
  posts: PropTypes.array.isRequired,
  onTagDelete: PropTypes.func.isRequired,
  onEditPost: PropTypes.func.isRequired
};

export default PostThread;