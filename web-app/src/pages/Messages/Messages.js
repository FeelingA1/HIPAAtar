import React, { Component }from 'react';
import MessageList from './MessageList'
import PropTypes from 'prop-types'

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        { body: "Connecting..." },
        { author: "You", body: "Hello!", me: true },
        { author: "Them", body: "Hey there!"  },
      ],
    }
  }

  static propTypes = {
    author: PropTypes.string,
    body: PropTypes.string.isRequired,
    me: PropTypes.bool,
  }
  
  render() {
    return (
      <div className="Messages">
        <h3>Messages Page</h3>
        <MessageList messages={this.state.messages} />
        {/* {this.state.messages.author && (
          <span className="author">{this.state.messages.author}:</span>
        )}
        {this.state.messages.body} */}
      </div>
    );
  }
}
export default Messages;
