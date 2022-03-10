import React, { FC } from 'react';
import styled from 'styled-components';
import { tablet } from '../responsive';
export interface Props {}

const IntroductionComponent = styled.div`
	display: flex;
	justify-content: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${tablet({ alignItems: 'flex-start' })}
`;

const PrimaryTitle = styled.div`
	font-size: 3.5rem;
	font-weight: 700;
`;

const SecondaryTitle = styled.div`
	margin-top: 10px;
	font-size: 1rem;
	font-weight: 400;
`;

const Introduction: FC<Props> = () => {
	return (
		<IntroductionComponent>
			<PrimaryTitle>Plan Setup</PrimaryTitle>
			<SecondaryTitle>
				Pick the plan that best for you and your budget.
			</SecondaryTitle>
		</IntroductionComponent>
	);
};

export default Introduction;
