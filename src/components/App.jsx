import Stats from './stats/stats';
import Profile from './profile/profile';
import Friends from './friends/friends';

import user from '../../src/data/user.json';

export default function App(params) {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Stats title="Statistic"></Stats>
      <Friends></Friends>
    </>
  );
}
