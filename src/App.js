import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "./App.css";
import posts from "./data/posts";
import AppPost from "./components/AddPost";
import AddPostModal from "./components/AddPostModal";
import EditPostModal from "./components/EditPostModal";
import PostThread from "./components/PostThread";
import SearchBox from "./components/SearchBox";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddPost = this.toggleAddPostModal.bind(this, true);
    this.handleAddPostCancel = this.toggleAddPostModal.bind(this, false);
    this.handleAddPostSubmit = this.handleAddPostSubmit.bind(this);

    this.handleEditPost = this.toggleEditPostModal.bind(this);
    this.handleEditPostCancel = this.toggleEditPostModal.bind(this, null);
    this.handleEditPostSubmit = this.handleEditPostSubmit.bind(this);

    this.handleTagDelete = this.handleTagDelete.bind(this);

    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      searchTerm: "",
      editedPost: null,
      isEditingPost: false,
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

  toggleEditPostModal(editedPost) {
    this.setState({ editedPost });
  }

  handleEditPostSubmit(post) {
    const posts = this.state.posts;

    var index = posts.findIndex((p) => p.id === post.id);
    posts[index] = post;

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

  handleSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { posts, isAddingPost, editedPost, searchTerm } = this.state;
    // DONE show modal (AddPostModal) when user clicks on "Add Post"

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="React.js Forum"
            iconElementLeft={<span />}
            iconElementRight={<AppPost onTap={this.handleAddPost} />}
          />
          <SearchBox handleChange={this.handleSearchChange} />
          <PostThread posts={posts}
            onTagDelete={this.handleTagDelete}
            onEditPost={this.handleEditPost}
            filter={searchTerm} />
          {isAddingPost &&
            <AddPostModal
              onClose={this.handleAddPostCancel}
              onSubmit={this.handleAddPostSubmit}
            />
          }
          {editedPost &&
            <EditPostModal
              post={editedPost}
              onClose={this.handleEditPostCancel}
              onSubmit={this.handleEditPostSubmit}
            />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
