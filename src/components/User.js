import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    { value => (
        <Card>
        <Image src='https://robohash.org/avatartest.png?set=set5' wrapped ui={false} />
        <Card.Content>
          <Card.Header> { value.username }  </Card.Header>
          <Card.Meta>
            Date Joined: { value.dateJoined }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p> First Name: { value.firstName } </p>
        </Card.Content>
        <Card.Content>
          <p> Last Name: { value.lastName } </p>
        </Card.Content>
        <Card.Content>
          <p> E-mail: { value.email } </p>
        </Card.Content>
      </Card>
      
    )}
  </UserConsumer>
);

export default User;