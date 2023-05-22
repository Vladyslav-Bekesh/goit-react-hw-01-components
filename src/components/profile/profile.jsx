import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Description,
  Stats,
} from '../profile/profile.styled.jsx';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileContainer>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </Stats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
