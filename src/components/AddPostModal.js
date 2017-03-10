import React, { Component, PropTypes } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

const newPost = {
  title: "",
  message: ""
};

class AddPostModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.state = {
      errors: [],
      newPost
    };

    this.title = "Add new post";
  }

  handleSubmit() {
    const { onClose, onSubmit } = this.props;
    const errors = this.validateInput();

    if (!errors.length) {
      onSubmit(this.state.newPost);
      this.setState({ newPost });
    }

    onClose();
  }

  handleTitleChange(_e, title) {
    const newPost = this.state.newPost;

    this.setState({ newPost: { ...newPost, title } });
  }

  handleMessageChange(_e, message) {
    const newPost = this.state.newPost;

    this.setState({ newPost: { ...newPost, message } });
  }

  validateInput() {
    return []; // TODO
  }

  getActions() {
    const disabled = Boolean(this.state.errors.length);

    return [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="Submit"
        primary
        disabled={disabled}
        onTouchTap={this.handleSubmit}
      />
    ];
  }

  render() {
    const newPost = this.state.newPost;

    return (
      <div>
        <Dialog
          title={this.title}
          actions={this.getActions()}
          modal
          open
        >
          <div>
            <TextField
              fullWidth
              hintText="Title of your post"
              floatingLabelText="Title"
              value={newPost.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <TextField
              fullWidth
              hintText="Write your thoughts..."
              floatingLabelText="Message"
              multiLine
              rows={4}
              value={newPost.message}
              onChange={this.handleMessageChange}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

AddPostModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddPostModal;