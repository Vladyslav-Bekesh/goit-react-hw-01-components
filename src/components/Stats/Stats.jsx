import React from 'react';
import PropTypes from 'prop-types';

import stats from '../../data/data.json'; //data
import StatsList from './StatsList'; //component
import { StatsContainerCss, StatsTitleCss } from './Stats.styled';

function Stats({ title }) {
  return (
    <StatsContainerCss>
      <StatsTitleCss>{title}</StatsTitleCss>

      <StatsList stats={stats}></StatsList>
    </StatsContainerCss>
  );
}

export default Stats;

Stats.propTypes = {
  title: PropTypes.string.isRequired,
};
