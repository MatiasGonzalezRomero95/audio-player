import React, { useState, useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import usePlayer from '../hooks/usePlayer';

import StatusBar from './StatusBar';
import ProgressBar from './ProgressBar';
import PlayerControl from './PlayerControl';
import Cover from './Cover';

const normalizeEventToMusic = (event) => {
  return {
    id: event.id,
    fileUrl: event.audio_file.url,
    imageUrl: event.audio_file.extra.background_image_url,
  };
};

const useStyles = makeStyles((theme) => ({
  player: {
    backgroundColor: theme.palette.primary.background,
  },
}));

const Player = () => {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [currentMusic, setCurrentMusic] = useState({});

  const onPlayStarted = useCallback(
    (event) => {
      console.log('onPlayStarted', event);

      setIsPlaying(true);
      setIsPaused(false);
      setIsStopped(false);

      setCurrentMusic(normalizeEventToMusic(event));
    },
    [setIsPlaying, setCurrentMusic]
  );

  const onPlayPaused = useCallback(
    (event) => {
      setIsPlaying(false);
      setIsPaused(true);
      setIsStopped(false);
      console.log('onPlayPaused', event);
    },
    [setIsPlaying]
  );

  const onPlayStopped = useCallback(
    (event) => {
      console.log('onPlayStopped', event);

      setIsPlaying(false);
      setIsPaused(false);
      setIsStopped(true);

      setCurrentMusic({});
    },
    [setIsPlaying]
  );

  const onPlayCompleted = useCallback(
    (event) => {
      console.log('onPlayCompleted', event);

      setIsPlaying(false);
      setIsPaused(false);
      setIsStopped(true);

      setCurrentMusic({});
    },
    [setIsPlaying]
  );

  const onPlayResumed = useCallback(
    (event) => {
      setIsPlaying(true);
      setIsPaused(false);
      setIsStopped(false);
      console.log('onPlayResumed', event);
    },
    [setIsPlaying]
  );

  const { play, pause, stop, increaseVolume, volume } = usePlayer({
    onPlayStarted,
    onPlayPaused,
    onPlayCompleted,
    onPlayStopped,
    onPlayResumed,
  });

  return (
    <Grid data-testid="player" id="player-view-div" className={classes.player}>
      <Box>
        <Cover currentMusic={currentMusic} />
        <StatusBar
          isPlaying={isPlaying}
          isPaused={isPaused}
          isStopped={isStopped}
        />
        <ProgressBar
          isPlaying={isPlaying}
          isPaused={isPaused}
          isStopped={isStopped}
        />
        <PlayerControl
          isPlaying={isPlaying}
          volume={volume}
          onPauseClick={pause}
          onStopClick={stop}
          onPlayClick={play}
          increaseVolume={increaseVolume}
        />
      </Box>
    </Grid>
  );
};

Player.propTypes = {};

export default Player;