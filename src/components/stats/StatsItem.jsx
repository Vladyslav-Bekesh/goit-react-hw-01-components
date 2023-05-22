import PropTypes from 'prop-types';
import { StatsItemCss } from './stats.styled';

function StatItem({ label, percentage}) {
  return (
    <StatsItemCss>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </StatsItemCss>
  );
}

export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
