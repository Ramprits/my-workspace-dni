import { ForgotPassword, Login, Register, UpdatePassword } from './components';

export interface AuthProps {
  type?: string;
}

export const AuthType = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
};

export const AuthPage = (props: AuthProps) => {
  const renderView = () => {
    switch (props.type) {
      case AuthType.REGISTER:
        return <Register />;
      case AuthType.FORGOT_PASSWORD:
        return <ForgotPassword />;
      case AuthType.UPDATE_PASSWORD:
        return <UpdatePassword />;
      default:
        return <Login />;
    }
  };
  return <>{renderView()}</>;
};
