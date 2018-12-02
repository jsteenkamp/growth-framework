import compose from 'recompose/compose';
import jwtDecode from 'jwt-decode';
import { withUser } from '@store';

const UserFromTokenPure = ({
  savedUser,
  clearUserMutation,
  updateUserMutation,
  roles = [],
  children,
}) => {
  // if browser reloaded and valid token available then update local user
  if (savedUser === null && sessionStorage.getItem('token') !== null) {
    try {
      const { id, email, roles } = jwtDecode(sessionStorage.getItem('token'));
      // update client store
      updateUserMutation({ variables: { id, email, roles } });
    } catch (error) {
      // InvalidTokenError handle silently
      sessionStorage.removeItem('token');
      clearUserMutation();
    }
  }

  let hasRole = false;
  if (savedUser !== null && roles.length) {
    for (let role of roles) {
      hasRole = hasRole || savedUser.roles.includes(role);
    }
  }

  // render prop (FaaC)
  return children({ hasRole, savedUser });
};

export default compose(withUser)(UserFromTokenPure);
