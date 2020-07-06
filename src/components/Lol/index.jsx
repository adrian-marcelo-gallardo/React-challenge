import React, { useEffect, useState } from 'react';
import GoogleAuth from '../../auth/index';
import useGapi from '../../hooks/useGapi';

function Lol() {
  const [authInstance, setAuthInstance] = useState();
  const gapi = useGapi();
  useEffect(() => {
    if (gapi) {
      const auth = new GoogleAuth(gapi);
      const currentUser = auth.getCurrentUser();
      console.log(currentUser);
      if (currentUser) {
        // do something
      }
      auth.onAuthChange((signStatus, user) => {
        if (signStatus) {
          // User is logged in
          console.log('LOGGED IN with', user);
        } else {
          console.log('LOGGED OUT');
          // user is logged out
        }
      });
      setAuthInstance(auth);
    }
  }, [gapi]);

  const login = () => {
    authInstance.signIn();
  };

  const logout = () => {
    authInstance.signOut();
  };

  return (
    <div>

      <button type="button" onClick={login}>on click</button>
      <button type="button" onClick={logout}>bye</button>
    </div>
  );
}

export default Lol;
