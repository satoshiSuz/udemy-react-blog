import { css } from '@emotion/react';
import { addDoc, collection } from 'firebase/firestore';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

type Props = {
  isAuth: boolean;
};

export const CreatePost: FC<Props> = ({ isAuth }) => {
  const [title, setTitle] = useState<string>();
  const [postText, setPostText] = useState<string>();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);
  return (
    <div css={styles.createPost}>
      <div css={styles.container}>
        <h1>記事を投稿する</h1>
        <div css={styles.input}>
          <div>タイトル</div>
          <input
            type='text'
            placeholder='タイトルを記入'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div css={styles.input}>
          <div>投稿</div>
          <textarea
            placeholder='投稿内容を記入'
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button css={styles.button} onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

const styles = {
  createPost: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
  `,

  container: css`
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 500px;
    gap: 10px;
    padding: 0px 40px;
    box-shadow: 5px 9px 15px -5px #777777;
    h1 {
      margin: 0;
    }
  `,
  input: css`
    input {
      width: 100%;
      height: 30px;
      outline: none;
      padding: 0px 4px;
    }
    textarea {
      width: 100%;
      height: 120px;
      outline: none;
      padding: 4px;
    }
  `,
  button: css`
    padding: 10px 0;
    background-color: #3d77a5;
    border: none;
    box-shadow: 5px 9px 15px -5px #777777;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(5px);
      box-shadow: none;
    }
  `,
};
