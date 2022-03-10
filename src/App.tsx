import React, { FC, useEffect, useState } from 'react';
import Frequency from './page/Frequency';
import Introduction from './page/Introduction';
import Plan from './page/Plan';
import TopBar from './page/TopBar';
import Payment from './page/Payment';
import Step from './page/Step';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import data from './store/API.json';
import { DataType, FormatedDataType, FrequencyType } from './types';
import { tablet } from './responsive';

const MainPageContainer = styled.div`
	margin: 1rem 5rem;
	${tablet({ margin: '1rem 2rem' })}
`;
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
`;
export interface Props {}
const totalAmount: number = 123.45;
const frequencyArray: Array<string> = ['weekly', 'fortnightly', 'monthly'];

const App: FC<Props> = () => {
	const [currentFrequency, setCurrentFrequency] =
		useState<FrequencyType>('weekly');
	const [formatedData, setFormatedData] = useState<FormatedDataType>({});
	useEffect(() => {
		let weekly: Array<number> = [];
		let fortnightly: Array<number> = [];
		let monthly: Array<number> = [];
		data.map((item: DataType) => {
			if (item.interval === 'weekly') {
				weekly.push(item.paymentCount);
			}
			if (item.interval === 'fortnightly') {
				fortnightly.push(item.paymentCount);
			}
			if (item.interval === 'monthly') {
				monthly.push(item.paymentCount);
			}
		});
		weekly.sort((a, b) => b - a);
		fortnightly.sort((a, b) => b - a);
		monthly.sort((a, b) => b - a);
		return setFormatedData({ weekly, fortnightly, monthly });
	}, []);

	return (
		<>
			<TopBar totalAmount={totalAmount} />
			<MainPageContainer>
				<Introduction />
				<Payment />
				<Step
					primaryTitle="Step 1"
					secondaryTitle=" Pick your repayment frequency"
				/>
				<Frequency
					frequencyArray={frequencyArray}
					setCurrentFrequency={setCurrentFrequency}
				/>
				<Step primaryTitle="Step 2" secondaryTitle=" Pick your Plan" />
				<Plan formatedData={formatedData} currentFrequency={currentFrequency} />
				<ButtonContainer>
					<Button variant="contained" sx={{ width: '13rem' }}>
						Submit Plan
					</Button>
				</ButtonContainer>
			</MainPageContainer>
		</>
	);
};

export default App;
