import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import useAuth from '../../store/auth/useAuth';

const LoginPrompt = ({ isOpen, close }) => {
  const { login, loading, error } = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    const user = await login(username, password);

    if (user) {
      close();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Login</DialogTitle>
      <DialogContent>
        { error && (
          <Alert severity="error" style={{ marginBottom: '1em' }}>{error}</Alert>
        )}
        <TextField label="Username" value={username} style={{ marginBottom: '1em' }} onChange={(e) => setUsername(e.target.value)} disabled={loading} fullWidth />
        <TextField label="Password" value={password} style={{ marginBottom: '1em' }} onChange={(e) => setPassword(e.target.value)} disabled={loading} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary" autoFocus disabled={loading}>
          {loading ? 'Login in...' : 'Login'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginPrompt.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default LoginPrompt;
