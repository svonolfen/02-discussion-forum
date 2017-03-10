import React, { PropTypes } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from 'material-ui/Chip';
import ReactMarkdown from "react-markdown";

class PostItem extends React.Component {
  render() {
    const { title, message } = this.props.post;
    let tagElements = [];

    if (this.props.tags && this.props.tags.length) {
      const styles = {
        display: "inline-block",
        marginRight: "5px"
      };

      // DONE: use Chip for tags: www.material-ui.com/#/components/chip
      tagElements = this.props.tags.map((tag) => <Chip key={tag.id} onRequestDelete={() => this.props.onTagDelete(this.props.post, tag.id)} style={styles}>{tag.label}</Chip>);
    }

    // DONE make it possible to show formatted message,
    // e.g. "Hello *world*" - world will be shown as emphasized
    // but try to keep security high by not allowing <script>alert("Heh");</script>
    // can you find the solution?

    return (
      <Card>
        <CardHeader
          title={title}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <div>
            <ReactMarkdown source={message} />
          </div>
          <div>
            {tagElements}
          </div>
        </CardText>
      </Card>
    );
  }
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  tags: PropTypes.array,
  onTagDelete: PropTypes.func.isRequired
};

export default PostItem;