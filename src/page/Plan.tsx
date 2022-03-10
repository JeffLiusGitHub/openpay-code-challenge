import React, { FC } from 'react';
import styled from 'styled-components';
import PlanButton from '../component/PlanButton';
import { FormatedDataType } from '../types';

export interface Props {
	formatedData?: FormatedDataType;
	currentFrequency: string | null;
}

const PlanButtonContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

const Plan: FC<Props> = ({ formatedData, currentFrequency }) => {
	let planButton;
	let monthPercentage: number;
	if (currentFrequency === 'weekly') {
		monthPercentage = 0.25;
	}
	if (currentFrequency === 'monthly') {
		monthPercentage = 1;
	}
	if (currentFrequency === 'fortnightly') {
		monthPercentage = 0.5;
	}
	if (formatedData?.[String(currentFrequency)] !== undefined) {
		planButton = formatedData?.[String(currentFrequency)].map(
			(data: number) => {
				return (
					<PlanButton
						remaining={data}
						month={data * monthPercentage}
						amount={123.45 / data}
						key={data}
					/>
				);
			}
		);
	} else {
		planButton = <p>No Data can be found</p>;
	}
	return <PlanButtonContainer>{planButton}</PlanButtonContainer>;
};

export default Plan;
