import React, { FC } from 'react';
import styled from 'styled-components';

export interface Props {primaryTitle:string;secondaryTitle:string}
const StepContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
 
`;
const StepPrimaryTitle = styled.div`
	font-weight: 800;
`;
const StepSecondaryTitle = styled.div`
	margin-top: .5rem;
`;

const Step: FC<Props> = ({primaryTitle,secondaryTitle}) => {
	return (
		<StepContainer>
			<StepPrimaryTitle>{primaryTitle}</StepPrimaryTitle>
			<StepSecondaryTitle>{secondaryTitle}</StepSecondaryTitle>
		</StepContainer>
	);
};

export default Step;
