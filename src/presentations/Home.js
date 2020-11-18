import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import APP_PATH from '../constants/paths';

class Home extends Component {
  render() {
    return (
      <div>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Header size="large">Twitter Clone</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ marginTop: '2em', marginBottom: '2em' }}>
                  <Header size="medium">
                    <Link to={APP_PATH.USERS}>
                      Users
                    </Link>
                  </Header>
                  <p>View details of users</p>
                </Grid.Column>
                <Grid.Column style={{ marginTop: '2em', marginBottom: '2em' }}>
                  <Header size="medium">
                    <Link to={APP_PATH.USER_CREATE}>
                      Register
                    </Link>
                  </Header>
                  <p>Register User</p>
                </Grid.Column>              
                <Grid.Column style={{ marginTop: '2em', marginBottom: '2em' }}>
                  <Header size="medium">
                    <Link to={APP_PATH.USER_TWEETS}>
                      User Tweets
                    </Link>
                  </Header>
                  <p>Details of Tweets of a user</p>
                </Grid.Column>              
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default Home;