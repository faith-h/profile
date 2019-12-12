import React from 'react';

const PetContext = React.createContext();

export const PetConsumer = PetContext.Consumer;

class PetProvider extends React.Component {
  state = { 
    name: "Fluffy",
    age: "3",
    species: "Cat",
    talent: "Ripping up couches",
    updatePet: (pet) => this.updatePet(pet),
  };

  updatePet = (pet) => {
    this.setState({...pet});
  }

  render() {
    return (
      <PetContext.Provider value={this.state}>
        {this.props.children}
      </PetContext.Provider>
    );
  };
};

export default PetProvider;