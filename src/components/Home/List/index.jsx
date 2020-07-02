/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useGeneralContext } from '../../../context/General';
import { setValue } from '../../../state/actions';
import useSearch from '../../../hooks/useYoutubeSearch';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const [{ searchTerm }, dispatch] = useGeneralContext();

  const list = useSearch(searchTerm);

  const handleNewVideo = (value) => {
    const action = setValue({
      key: 'videoId',
      value,
    });

    dispatch(action);
  };

  return (
    <div className={classes.root}>
      {list.map(({ etag, id, snippet }) => (id.videoId ? (
        <Fragment key={etag}>
          <div
            className={classes.listItem}
            onClick={() => handleNewVideo(id.videoId)}
          >
            <img
              src={snippet?.thumbnails?.default?.url}
              width={snippet?.thumbnails?.default?.width}
              height={snippet?.thumbnails?.default?.height}
              alt="image"
            />
            <div className={classes.details}>
              <Typography>
                {snippet.title}
              </Typography>
            </div>
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
