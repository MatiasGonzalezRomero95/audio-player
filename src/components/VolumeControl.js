import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

const VolumeControl = ({ onChangeVolume, initialVolume }) => {
  const [volume, setVolume] = useState(initialVolume);
  const classes = useStyles();

  useEffect(() => {
    setVolume(initialVolume);
  }, [initialVolume, setVolume]);

  const handleChange = (event, newValue) => {
    setVolume(newValue);
    onChangeVolume(newValue);
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

VolumeControl.propTypes = {
  onChangeVolume: PropTypes.func,
  initialVolume: PropTypes.number,
};

VolumeControl.defaultProps = {
  initialVolume: 0,
};

export default VolumeControl;
