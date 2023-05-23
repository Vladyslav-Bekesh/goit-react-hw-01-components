import PropTypes from 'prop-types';
import { StatsListCss, StatsItemCss } from './Stats.styled';

function StatsList({ stats }) {
  return (
    <StatsListCss>
      {stats.map(({ label, percentage, id }) => {
        return (
          <StatsItemCss key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItemCss>
        );
      })}
    </StatsListCss>
  );
}

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
