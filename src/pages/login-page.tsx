import LoginForm from '../components/login/login-form';

const LoginPage: React.FC = () => {
  // TODO: Verify session, if exist redirect to dashboard

  // TODO: implement login functionality
  const onSubmit = (email: string, password: string) => {
    console.log(email, password);
  }

  // MUST: Services to be handled at page or container level
  return <LoginForm onSubmit={onSubmit} />
};

export default LoginPage;
