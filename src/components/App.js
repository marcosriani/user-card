import React, { Component } from 'react';
import AddUser from './addUser/AddUser';
import UsersList from './userList/UsersList';

import './Reset.css';

class App extends Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.numGamesPlayed = 0;

    this.setState((currentState) => ({
      users: [...currentState.users, user],
    }));
  };

  render() {
    return (
      <div className='container'>
        <AddUser onAddUser={this.createUser} users={this.state.users} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
