import React from 'react';
import _ from "lodash";
import SuccessComparisonCard from "./SuccessComparisonCard";
import FailureComparisonCard from "./FailureComparisonCard";

function ComparisonCard(props) {

    const { register } = props;

    if (!register || !register.results) return null; //avoid not initialized values problem

    const successRegisters = register.results.filter(el => el.similarity > 75)
    if(successRegisters.length > 0) {
        return <SuccessComparisonCard register={_.maxBy(successRegisters, (reg) => reg.similarity)} reference={register.reference} />
    }
    
    return <FailureComparisonCard register={_.maxBy(register.results, (reg) => reg.distance)} reference={register.reference} />
    
}

export default ComparisonCard;

