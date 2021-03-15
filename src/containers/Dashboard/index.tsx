import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';

import { AppState } from '../../store';
import { getProducts } from '../../store/product/productActions';
import { ProductType } from '../../store/product/types';

import { useStyles } from './style';

export const Dashboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state: AppState) => state.productReducer);

  useEffect(() => {
    (async () => {
      dispatch(getProducts());
    })();
  }, [dispatch]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <Grid container>
      {products &&
        products.map((p: ProductType) => (
          <Grid item xs={4} component={Card} key={p.id} className={classes.root}>
            <CardHeader title={`${p.title.substr(0, 20)}...`} subheader={p.category} />
            <CardMedia className={classes.media} image={p.image} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {p.description.substr(0, 140)}...
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Typography variant="body1" component="h3">
                ${p.price}
              </Typography>
            </CardActions>
          </Grid>
        ))}
    </Grid>
  );
};
