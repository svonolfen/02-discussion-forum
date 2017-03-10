import React, { PropTypes } from "react";
import TextField from "material-ui/TextField";

const SearchBox = (props) => {
    return (<TextField
        hintText="Search" onChange={props.handleChange}
    />);
};

SearchBox.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default SearchBox;