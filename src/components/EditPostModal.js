import { PropTypes } from "react";
import AddPostModal from "./AddPostModal";

class EditPostModal extends AddPostModal {
  constructor(props) {
    super(props);

    this.title = "Edit post";

    const post = props.post;

    this.state = {
      errors: [],
      newPost: { ...post }
    };
  }
}

EditPostModal.propTypes = {
  ...AddPostModal.propTypes,
  post: PropTypes.object.isRequired
};

export default EditPostModal;