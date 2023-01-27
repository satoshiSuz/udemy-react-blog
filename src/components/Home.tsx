import { css } from '@emotion/react';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';

type PostList = {
  id: string;
  title: string;
  postText: string;
  author: {
    username: string;
    id: string;
  };
};

export const Home = () => {
  const [postList, setPostList] = useState<PostList[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      //   console.log(data);
      //   console.log(data.docs);
      //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div css={styles.page}>
      <div css={styles.contents}>
        <div css={styles.header}>
          <h1>タイトル</h1>
        </div>
        <div css={styles.textContainer}>
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくおねがいします。fffffffffffffffffffffffffffffffffffffffffffffgfffdfadfafdadfkj;jkj;ljkl;j;j;jklj;ljk;lj;lkj;lkjsdfdafdfadfadfad
        </div>
        <div css={styles.nameAndDeleteButton}>
          <h3>@satoshi</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: css`
    width: 100%;
    height: calc(100vh-80px);
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  `,
  contents: css`
    width: 600px;
    height: auto;
    max-height: 600px;
    background-color: #fff;
    box-shadow: 5px 9px 15px -5px #777777;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
  `,
  header: css`
    h1 {
      text-align: center;
      margin-top: 5px;
    }
  `,
  textContainer: css`
    height: auto;
    word-wrap: break-word;
    max-height: 400px;
    width: 100%;
  `,
  nameAndDeleteButton: css`
    display: flex;
    align-items: center;
    button {
      flex: 10%;
      background-color: #d36262;
      color: white;
      padding: 7px 15px;

      border-radius: 3px;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #af2c2c;
      }
    }
    h3 {
      flex: 90%;
    }
  `,
};
