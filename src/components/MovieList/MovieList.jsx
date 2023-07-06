import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { Movie } from '..';
import useStyles from './styles';

const MovieList = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {data.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
