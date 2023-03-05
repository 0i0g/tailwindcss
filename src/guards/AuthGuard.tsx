import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useRedux';
import { APP_PATH } from 'src/routes/path';

type Props = {
  children: React.ReactNode;
};
const AuthGuard = ({ children }: Props) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to={APP_PATH.auth.login} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
