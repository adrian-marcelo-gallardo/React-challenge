import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function MediaCard(props) {
  const {
    img,
    title,
    description,
    publishTime,
    videoId,
    onClick,
  } = props;

  const classes = useStyles();

  function handleClick() {
    onClick({
      img,
      title,
      description,
      publishTime,
      videoId,
    });
  }

  return (
    <Card onClick={handleClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {publishTime}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
