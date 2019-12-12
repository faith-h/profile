import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
import { PetConsumer, } from '../providers/PetProvider';

const Pets = () => (
  <PetConsumer>
    { value => (
        <Card>
        <Image src='https://robohash.org/pet.png?set=set4' wrapped ui={false} />
        <Card.Content>
          <Card.Header> { value.name }  </Card.Header>
          <Card.Meta>
            Age: { value.age }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p> Species: { value.species } </p>
        </Card.Content>
        <Card.Content>
          <p> Talent: { value.talent } </p>
        </Card.Content>
      </Card>
      
    )}
  </PetConsumer>
);

export default Pets;