import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faEnvelope,
  faFilePen,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  isAuth: boolean;
};

export const Navbar: FC<Props> = ({ isAuth }) => {
  return (
    <nav css={styles.nav}>
      <Link to='/' css={styles.link}>
        <FontAwesomeIcon icon={faHouse} css={styles.icon} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to='/login' css={styles.link}>
          <FontAwesomeIcon icon={faArrowRightToBracket} css={styles.icon} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to='/createpost' css={styles.link}>
            <FontAwesomeIcon icon={faFilePen} css={styles.icon} />
            記事投稿
          </Link>
          <Link to='/logout'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  nav: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #cb8c54;
    gap: 45px;
  `,

  link: css`
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    &:hover {
      color: cadetblue;
    }
  `,

  icon: css`
    margin-right: 5px;
  `,
};
