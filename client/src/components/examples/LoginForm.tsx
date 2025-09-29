import LoginForm from '../LoginForm';

export default function LoginFormExample() {
  const handleLogin = (credentials: any) => {
    console.log('Login successful:', credentials);
  };

  const handleSwitchType = () => {
    console.log('Switch login type');
  };

  return (
    <LoginForm 
      type="user" 
      onLogin={handleLogin} 
      onSwitchType={handleSwitchType} 
    />
  );
}