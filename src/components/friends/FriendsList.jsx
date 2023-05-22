import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import {FriendsListCss} from './friends.styled';

function FriendsList({ friends }) {
  return (
    <FriendsListCss>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendItem>
        );
      })}
    </FriendsListCss>
  );
}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.array
};