import React from 'react';

import FriendsList from './FriendsList';
import friends from '../../data/friends.json'; //data

function Friends() {
  return <FriendsList friends={friends}></FriendsList>;
}

export default Friends;
