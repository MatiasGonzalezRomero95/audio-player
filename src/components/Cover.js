import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import MusicNote from '@material-ui/icons/MusicNote';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  defaultCover: {
    minHeight: '400px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: theme.palette.secondary.background,
  },
}));

const Cover = ({ currentMusic }) => {
  const classes = useStyles();

  if (!currentMusic.imageUrl) {
    return (
      <Box id="image-box" className={classes.defaultCover}>
        <MusicNote fontSize="large" />
      </Box>
    );
  }
  return <Image src={currentMusic.imageUrl} alt="Example Alt" />;
};

Cover.propTypes = {
  currentMusic: PropTypes.object,
};

Cover.defaultProps = {
  currentMusic: {},
};

export default Cover;
