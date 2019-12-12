import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = { 
    username: this.props.username,
    dateJoined: this.props.dateJoined,
    email: this.props.email,
    firstName: this.props.firstName, 
    lastName: this.props.lastName,
   };

  handleChange = (e, {name, value}) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { username, email, firstName, lastName, } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="New Username"
        type="text"
        name="username"
        value={username}
        onChange={this.handleChange}
        />
        <Form.Input
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={this.handleChange}
        />
        <Form.Input
        label="E-mail"
        type="text"
        name="email"
        value={email}
        onChange={this.handleChange}
        />
      <Form.Button color="grey"> Save </Form.Button>
      </Form>
    );
  };
};

  const ConnectedUserForm = (props) => {
    return (
      <UserConsumer>
        { value => (
          <UserForm
          {...props}
          username={value.username}
          dateJoined={value.dateJoined}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          updateUser={value.updateUser}
          />
        )}
      </UserConsumer>
    );
};

export default ConnectedUserForm;