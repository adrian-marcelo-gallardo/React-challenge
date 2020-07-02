/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useGeneralContext } from '../../../context/General';
import useSearch from '../../../hooks/useYoutubeSearch';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const [{ searchTerm }] = useGeneralContext();

  const list = useSearch(searchTerm);

  console.log(list);

  const handleNewVideo = (videoId) => {
    console.log(videoId);
  };

  return (
    <div className={classes.root}>
      {list.map(({ etag, id, snippet }) => (id.videoId ? (
        <Fragment key={etag}>
          <div
            className={classes.listItem}
            onClick={() => handleNewVideo(id.videoId)}
          >
            <Typography>
              {snippet.title}
            </Typography>
          </div>
          <Divider />
        </Fragment>
      ) : null))}
    </div>
  );
};

List.propTypes = {

};

export default List;
