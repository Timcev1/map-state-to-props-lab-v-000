import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.userName}</li>);

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?

