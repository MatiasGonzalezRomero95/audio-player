import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hideButton: {
    display: 'none',
  },
  progressPlaying: {
    minHeight: 5,
    backgroundColor: theme.palette.primary.main
  },
  progressPaused: {
    minHeight: 5,
    backgroundColor: theme.palette.secondary.main
  }
}));

const ProgressBar = ({ isPlaying, isPaused, isStopped }) => {
  const classes = useStyles();

  const progressClasses = clsx('progress', {
    [classes.hideButton]: !isPlaying && isStopped,
    [classes.progressPlaying]: isPlaying && !isPaused,
    [classes.progressPaused]: !isPlaying && isPaused
  });

  return (
    <div className={progressClasses}></div>
  );
};

ProgressBar.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default ProgressBar;
