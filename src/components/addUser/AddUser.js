import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddUser.css';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    userExists: false,
  };

  contactExists = (currentUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.userName === currentUsername) {
        return true;
      }
    }

    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.userName);

    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists,
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((currentState) => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value,
      },
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user;
    return firstName === '' || lastName === '' || userName === '';
  };

  render() {
    const { firstName, lastName, userName } = this.state.user;

    return (
      <div className='wrapper'>
        <h1>Add user</h1>
        <form className='form-wrapper' onSubmit={this.handleSubmit}>
          <div className='form-content'>
            <label>Name</label>
            <input
              value={firstName}
              onChange={this.handleInputChange}
              name='firstName'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div className='form-content'>
            <label>Last Name: </label>
            <input
              value={lastName}
              onChange={this.handleInputChange}
              name='lastName'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div className='form-content'>
            <label>Username:</label>
            <input
              value={userName}
              onChange={this.handleInputChange}
              name='userName'
              type='text'
              placeholder='Username'
            />
          </div>

          {!this.isDisabled() ? (
            <button disabled={this.isDisabled()}>Add</button>
          ) : null}
        </form>
        {this.state.userExists ? (
          <p className='error'> You cannot add a user that already exists.</p>
        ) : null}
      </div>
    );
  }
}

AddUser.protoType = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
