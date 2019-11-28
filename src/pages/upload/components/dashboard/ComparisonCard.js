/* eslint-disable react/prop-types */
import React from 'react';

import SuccessComparisonCard from './SuccessComparisonCard';
import FailureComparisonCard from './FailureComparisonCard';

function ComparisonCard(props) {
  const { register } = props;

  if (!register || !register.results) return null; // avoid not initialized values problem

  if (register.matched) {
    return <SuccessComparisonCard register={register} />;
  }

  return <FailureComparisonCard register={register} />;
}

export default ComparisonCard;
