import { useEffect, useState } from 'react';

export default () => {
  const [gapi, setGAPI] = useState(null);

  useEffect(() => {
    async function initGoogle() {
      try {
        await window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);

        await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');

        setGAPI(window.gapi);
      } catch (e) {
        console.error('-->', e);
      }
    }

    window.gapi.load('client:auth2', initGoogle);
  }, []);

  return gapi;
};
