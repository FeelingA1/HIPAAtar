import React, { Component }from 'react';
import PropTypes from 'prop-types'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Messaging extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  static propTypes = {
    author: PropTypes.string,
    body: PropTypes.string.isRequired,
    me: PropTypes.bool,
  }

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Me", body: text }],
    })
  }
  
  render() {
    return (
      <div className="Messaging">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}
export default Messaging;