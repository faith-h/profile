import React from 'react';
import { Form, } from 'semantic-ui-react';
import { PetConsumer, } from '../providers/PetProvider';

class PetForm extends React.Component {
  state = { 
    name: this.props.name,
    age: this.props.age,
    species: this.props.species,
    talent: this.props.talent, 
   };

  handleChange = (e, {name, value}) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, age, species, talent } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="New Name"
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Age"
        type="text"
        name="age"
        value={age}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Species"
        type="text"
        name="species"
        value={species}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Talent"
        type="text"
        name="talent"
        value={talent}
        onChange={this.handleChange}
        />
      <Form.Button color="grey"> Save </Form.Button>
      </Form>
    );
  };
};

  const ConnectedPetForm = (props) => {
    return (
      <PetConsumer>
        { value => (
          <PetForm
          {...props}
          name={value.name}
          age={value.age}
          species={value.species}
          talent={value.talent}
          updatePet={value.updatePet}
          />
        )}
      </PetConsumer>
    );
};

export default ConnectedPetForm;