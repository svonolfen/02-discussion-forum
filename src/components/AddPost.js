import React, { PropTypes } from "react";
import FlatButton from "material-ui/FlatButton";

const AddPost = (props) => {
  //const onTap = () => props.onTap(true);
  //const onTap = props.onTap;
  // DONE onTouchTap should invoke the "onTap" callback

  return (<FlatButton label="Add post" onTouchTap={props.onTap} />);
};

AddPost.propTypes = {
  onTap: PropTypes.func.isRequired
};

export default AddPost;