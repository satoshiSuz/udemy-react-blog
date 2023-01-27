import { signInWithPopup } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Login: FC<Props> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
      navigate('/');
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>グーグルでログイン</button>
    </div>
  );
};
