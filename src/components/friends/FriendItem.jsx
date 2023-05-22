import PropTypes from 'prop-types';
import { FriendsItemCss } from './friends.styled'
import css from '../status/status.module.css'

function FriendItem({ avatar, name, isOnline }) {
  return (
    <FriendsItemCss className="item">
      <span
        className={`${isOnline ? css.isOnlineCss : css.isOfflineCss}`}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItemCss>
  );
}

export default FriendItem;


FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline:PropTypes.bool,
};