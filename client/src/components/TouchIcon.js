import React from 'react';
import { Box, Icon } from '@components';

const TouchIcon = props => (
  <Box p={3}>
    <Icon {...props} />
  </Box>
);

TouchIcon.displayName = 'TouchIcon';

export default TouchIcon;