import { AuthWrapper } from '../../auth/AuthWrapper';
import registerImage from '../../../public/img/chris-curry-WU1DEBbWz5I-unsplash.jpg';
import { RegisterForm } from '../../auth/Register';

export const RegisterPage: React.FC = () => {
  return (
    <AuthWrapper image={{ src: registerImage }}>
      <RegisterForm />
    </AuthWrapper>
  );
};
