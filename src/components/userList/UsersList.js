import React, { Component } from 'react';
import './UsersList.css';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState((currentState) => ({
      showGamesPlayed: !currentState.showGamesPlayed,
    }));
  };

  render() {
    const users = this.props.users;
    const showGamesPlayed = this.state.showGamesPlayed;

    const gamesPlayedButton = (
      <div>
        <button className='small-button' onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide' : 'Show'} the number of Games Played
        </button>
      </div>
    );

    return (
      <div className='user-list-wrapper'>
        <h1>Users Card</h1>
        {users && users.length > 0 ? gamesPlayedButton : ''}

        <ol className='user-order-list'>
          {users.map((user) => (
            <User
              key={user.userName}
              user={user}
              showGamesPlayed={showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
