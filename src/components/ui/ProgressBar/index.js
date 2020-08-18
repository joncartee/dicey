import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const ProgressBar = ({ title, percentage,color }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Percentage>{percentage}%</Styled.Percentage>
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar percentage={percentage} color={color} />
    </Styled.BarWrapper>
  </Styled.ProgressBar>
);

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
