import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = { 
    username: "johnny-test",
    dateJoined: "12-8-19",
    email: "test@test.com",
    firstName: "John",
    lastName: "Test",
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({...user});
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  };
};

export default UserProvider;