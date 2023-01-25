import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faEnvelope,
  faFilePen,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to='/createpost'>
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      <Link to='/login'>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン
      </Link>
    </nav>
  );
};
