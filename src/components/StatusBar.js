import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const StatusBar = ({ isPlaying, isPaused, isStopped }) => {
  return (
    <Box p={3}>
      <div className="status"></div>
    </Box>
  );
};

StatusBar.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default StatusBar;
