import StatItem from './StatsItem';
import { StatsListCss } from './stats.styled';

function StatsList({ stats }) {
  return (
    <StatsListCss>
      {stats.map(({ label, percentage, id }) => {
        return (
          <StatItem key={id} label={label} percentage={percentage}></StatItem>
        );
      })}
    </StatsListCss>
  );
}

export default StatsList;
