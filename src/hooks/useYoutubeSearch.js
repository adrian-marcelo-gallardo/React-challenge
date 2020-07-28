import { useState, useEffect } from 'react';

export default (term) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function searchTerm() {
      try {
        const { result } = await window.gapi.client.youtube.search.list({
          part: [
            'id',
            'snippet',
          ],
          maxResults: 25,
          q: term,
        });
        const { items } = result;

        console.log(items);
        setResponse(items);
      } catch (e) {
        console.log(e);
      }
    }

    if (window?.gapi?.client?.youtube) {
      searchTerm();
    }
  }, [term]);

  return response;
};
