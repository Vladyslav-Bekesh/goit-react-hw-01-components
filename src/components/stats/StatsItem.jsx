import PropTypes from 'prop-types';
import { StatsItemCss } from './stats.styled';

function StatItem({ label, percentage}) {
  return (
    <StatsItemCss>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatsItemCss>
  );
}

export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
