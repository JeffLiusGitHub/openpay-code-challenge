import React, { FC } from 'react';
import styled from 'styled-components';
import FrequencyButton from '../component/FrequencyButton';
import { FrequencyType } from '../types';

export interface Props {
	frequencyArray: string[];
	setCurrentFrequency:React.Dispatch<React.SetStateAction<FrequencyType>>;
}
const FrequencyContainer = styled.div`
	margin-top: 0.7rem;
	margin-bottom: 1.5rem;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;
const FrequencyButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Frequency: FC<Props> = ({ frequencyArray,setCurrentFrequency }) => {
	return (
		<FrequencyContainer>
			<FrequencyButtonContainer>
				{frequencyArray?frequencyArray.map((frequency: string) => (
					<FrequencyButton key={frequency} frequency={frequency} setCurrentFrequency={setCurrentFrequency} />
				)):<p>Loading data error...</p>}
			</FrequencyButtonContainer>
		</FrequencyContainer>
	);
};

export default Frequency;
