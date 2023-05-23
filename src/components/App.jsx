import Stats from './Stats/Stats';
import Profile from './Profile/Profile';
import Friends from './Friends/Friends';
import Transaction from './Transactions/Transaction';

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
      <Transaction></Transaction>
    </>
  );
}
