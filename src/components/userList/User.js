import React from 'react';

const User = (props) => {
  return (
    <li className='user'>
      <p>
        <span className='user-span'>Username: </span>
        {props.user.userName}
      </p>

      {props.showGamesPlayed ? (
        <p>
          <span className='user-span'>Number of Games Played: </span>
          {props.user.numGamesPlayed}
        </p>
      ) : null}
    </li>
  );
};

export default User;
