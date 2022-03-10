import React, { FC } from 'react';
import styled from 'styled-components';
import { FrequencyType } from '../types';
export interface Props {
	frequency: string;
	setCurrentFrequency: React.Dispatch<React.SetStateAction<FrequencyType>>;
}
const FrequencyButtonContainer = styled.button`
	margin-top: 1rem;
	border-radius: 3px;
	border-color: grey;
	background-color: transparent;
	width: 9rem;
	height: 2.2rem;
	font-weight: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	margin-right: 1rem;
	:hover {
		border-color: #0a71f9;
	}
`;

const FrequencyButton: FC<Props> = ({ frequency, setCurrentFrequency }) => {
	const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const button: HTMLButtonElement = event.currentTarget;
		setCurrentFrequency(button.value as FrequencyType);
	};

	return (
		<FrequencyButtonContainer
			value={frequency}
			type="button"
			onClick={buttonHandler}
			data-testid={frequency}
		>
			{frequency[0].toUpperCase() + frequency.slice(1)}
		</FrequencyButtonContainer>
	);
};

export default FrequencyButton;
