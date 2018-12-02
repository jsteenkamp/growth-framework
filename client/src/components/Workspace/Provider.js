/**
 * Testing idea with context API and provider
 */

import React from 'react';

const WorkspaceContext = React.createContext({title: '', setTitle: null});

export const WorkspaceConsumer = WorkspaceContext.Consumer;

export class WorkspaceProvider extends React.Component {
  state = { title: '' };

  setTitle = title => this.setState(() => ({ title }));

  render() {
    const value = { title: this.state.title, setTitle: this.setTitle };
    return (
      <WorkspaceContext.Provider value={value}>
        {this.props.children}
      </WorkspaceContext.Provider>
    );
  }
}


