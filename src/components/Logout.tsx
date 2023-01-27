import { signInWithPopup, signOut } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Logout: FC<Props> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウトする
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
