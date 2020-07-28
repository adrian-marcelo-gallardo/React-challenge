import { useEffect, useState } from 'react';
import { useGeneralContext } from '../context/General';
import { setValue } from '../state/actions';

export default () => {
  const [gapi, setGAPI] = useState(null);
  const context = useGeneralContext();
  const dispatch = context[1];

  useEffect(() => {
    async function initGoogle() {
      try {
        await window.gapi.auth2.init({
          client_id: process.env.REACT_APP_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        });

        await window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);

        await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');

        const action = setValue({
          key: 'searchTerm',
          value: 'wizeline',
        });
        setGAPI(window.gapi);
        dispatch(action);
      } catch (e) {
        console.log('-->', e);
      }
    }

    if (window.gapi.client) {
      setGAPI(window.gapi);
    } else {
      window.gapi.load('client:auth2', initGoogle);
    }
  }, [dispatch]);

  return gapi;
};
