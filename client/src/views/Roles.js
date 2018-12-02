import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Location, Router } from '@reach/router';
import { Layout, Spinner, MessageBox } from '@components';


const queryDiscipline = gql`
  query Discipline($id: String) {
      discipline(id: $id) {
          id
          title
          roles
      }
  }
`;

const Workspace = ({id}) => (

        <Query query={queryDiscipline} variables={{ id: 'software-engineering' }}>
          {({ loading, error, data }) => {

            if (loading) return <Spinner />;

            if (error) {
              console.error(error);
              return (
                <MessageBox title="Error">Check console for details</MessageBox>
              );
            }

            console.log(data);

            return (
              <Layout role={data.discipline.roles[id]}/>
            );
          }}
        </Query>

  );

Workspace.displayName = 'Workspace';

export default Workspace;

