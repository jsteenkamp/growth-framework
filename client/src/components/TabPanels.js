import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import Box from './Box';
import Text from './Text';
import Tab from './Tab';
import Tabs from './Tabs';

const PanelTab = ({ children, ...rest }) => (
  <Tab {...rest}>
    <Box m={0} p={2}>
      <Text
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {children}
      </Text>
    </Box>
  </Tab>
);

const Panel = ({ selected, children }) => (
  <Box m={2} p={2} display={selected ? 'block' : 'none'}>
    {children}
  </Box>
);

const Header = ({ tabs, selectedTabIndex, selectTab }) =>
  tabs.map((tab, index) => (
    <PanelTab
      key={`tab-${index}`}
      selected={index === selectedTabIndex}
      onClick={() => selectTab(index)}
    >
      {tab}
    </PanelTab>
  ));

Header.displayName = 'TabHeader';

const Panels = ({ panels, selectedTabIndex }) =>
  panels.map((panel, index) => (
    <Panel key={`tab-panel-${index}`} selected={index === selectedTabIndex}>
      {panel}
    </Panel>
  ));

Panels.displayName = 'TabPanels';

const TabsPure = ({ tabs, children, selectedTabIndex, selectTab }) => {
  // get tab panel content
  const panels = React.Children.toArray(children);

  return (
    <React.Fragment>
      <Tabs>
        <Header
          tabs={tabs}
          selectedTabIndex={selectedTabIndex}
          selectTab={selectTab}
        />
      </Tabs>
      <Box width={[1, '28em']}>
        <Panels panels={panels} selectedTabIndex={selectedTabIndex} />
      </Box>
    </React.Fragment>
  );
};

const TabPanels = compose(
  withState('selectedTabIndex', 'selectTab', props => props.startTabIndex)
)(TabsPure);

TabPanels.displayName = 'Tabs';

TabPanels.propTypes = {
  startTabIndex: PropTypes.number,
};

TabPanels.defaultProps = {
  startTabIndex: 0,
};

export default TabPanels;
