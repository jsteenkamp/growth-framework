import React from 'react';
import gql from 'graphql-tag';
import { Subscription } from 'react-apollo';

const FILE_CHANGED = gql`
  subscription fileChanged($channelId: ID!) {
    fileChanged(channelId: $channelId) {
      file
      mtimeMs
    }
  }
`;

const FileChanged = () => (
  <Subscription subscription={FILE_CHANGED} variables={{ channelId: 'scans' }}>
    {({ data, loading }) => {
      if (loading) return 'No files changed';
      //console.log({ data });
      return data.fileChanged.file;
    }}
  </Subscription>
);

FileChanged.displayName = 'FileChanged';

export default FileChanged;