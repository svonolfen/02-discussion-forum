import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "./App.css";
import posts from "./data/posts";
import AppPost from "./components/AddPost";
import AddPostModal from "./components/AddPostModal";
import PostThread from "./components/PostThread";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddPost = this.toggleAddPostModal.bind(this, true);
    this.handleAddPostCancel = this.toggleAddPostModal.bind(this, false);
    this.handleAddPostSubmit = this.handleAddPostSubmit.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);

    this.state = {
      isAddingPost: false,
      posts: posts["posts"]
    };
  }

  toggleAddPostModal(isAddingPost) {
    this.setState({ isAddingPost });
  }

  handleAddPostSubmit(post) {
    const posts = this.state.posts;
    const newPost = { ...post, id: posts.length + 1, tags: [] };

    // DONE add new post (newPost variable) to the list of posts
    posts.push(newPost);
    this.setState({ posts });
  }

  handleTagDelete(post, tagId) {
    const posts = this.state.posts;
    var index = post.tags.indexOf(tagId);
    if (index > -1) {
      post.tags.splice(index, 1);
    }
    this.setState({ posts });
  }

  render() {
    const { posts, isAddingPost } = this.state;
    // DONE show modal (AddPostModal) when user clicks on "Add Post"

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="React.js Forum"
            iconElementLeft={<span />}
            iconElementRight={<AppPost onTap={this.handleAddPost} />}
          />
          <PostThread posts={posts} onTagDelete={this.handleTagDelete} />
          {isAddingPost &&
            <AddPostModal
              onClose={this.handleAddPostCancel}
              onSubmit={this.handleAddPostSubmit}
            />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
