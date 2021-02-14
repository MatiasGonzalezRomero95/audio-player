import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const VolumeControl = ({ increaseVolume, volume }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    increaseVolume(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={volume}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
};

VolumeControl.propTypes = {};

export default VolumeControl;
