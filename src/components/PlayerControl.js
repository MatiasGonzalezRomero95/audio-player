import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Shuffle from '@material-ui/icons/Shuffle';
import Stop from '@material-ui/icons/Stop';
import VolumeControl from './VolumeControl';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  hideButton: {
    display: 'none',
  },
}));

const PlayerControl = ({
  isPlaying,
  onPlayClick,
  onStopClick,
  volume,
  increaseVolume,
  onPauseClick,
}) => {
  const classes = useStyles();

  const playClasses = clsx({
    [classes.hideButton]: isPlaying,
  });

  const pauseClasses = clsx({
    [classes.hideButton]: !isPlaying,
  });

  return (
    <div>
      {!isPlaying && (
        <IconButton
          data-testid="play-button"
          className={playClasses}
          onClick={onPlayClick}
        >
          <PlayArrow />
        </IconButton>
      )}

      {isPlaying && (
        <IconButton
          data-testid="pause-button"
          className={pauseClasses}
          onClick={onPauseClick}
        >
          <Pause />
        </IconButton>
      )}

      <IconButton className="skip-button">
        <Shuffle />
      </IconButton>

      <IconButton
        data-testid="stop-button"
        onClick={onStopClick}
        disabled={!isPlaying}
      >
        <Stop />
      </IconButton>

      <Grid container justify="center">
        <VolumeControl volume={volume} increaseVolume={increaseVolume} />
      </Grid>
    </div>
  );
};

PlayerControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onStopClick: PropTypes.func.isRequired,
};

export default PlayerControl;
