import { useEffect } from 'react';
import { useGeneralContext } from '../context/General';
import { setValue } from '../state/actions';

export default () => {
  const context = useGeneralContext();
  const dispatch = context[1];

  useEffect(() => {
    async function initGoogle() {
      try {
        const response = await window.gapi.auth2.init({
          client_id: process.env.REACT_APP_CLIENT_ID,
        });

        console.log({ response });

        await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');

        const action = setValue({
          key: 'searchTerm',
          value: 'wizeline',
        });
        dispatch(action);
      } catch (e) {
        console.log('-->', e);
      }
    }

    window.gapi.load('client:auth2', initGoogle);
  }, [dispatch]);
};
