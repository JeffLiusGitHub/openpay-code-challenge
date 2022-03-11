import React, { FC } from 'react';
import styled from 'styled-components';
import { tablet } from '../responsive';
import { RemainingButtonType } from '../types';

const PlanButtonContainer = styled.button`
	display: flex;
	justify-content: space-around;
	width: 45rem;
	height: 8rem;
	background-color: transparent;
	border-radius: 5px;
	border-color: lightgray;
	align-items: center;
	:hover {
		border-color: #0a71f9;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	justify-content: space-evenly;
	padding-bottom: 20px;
	${tablet({
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		padding: '3px',
	})}
`;
const RightContainer = styled.div`
	justify-content: center;
	align-items: center;
	padding-right: 10px;
`;
const RemainingPayment = styled.div`
	color: #0a71f9;
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 10px;
	${tablet({ textAlign: 'left' })}
`;

const TotalMonth = styled.div`
	color: black;
	font-size: 1.4rem;
	${tablet({ fontSize: '1.2rem' })}
`;

const TotalAmount = styled.div`
	font-size: 2.7rem;
	font-weight: 900;
	color: black;
`;

const PlanButton: FC<RemainingButtonType> = ({ remaining, month, amount }) => {
	return (
		<PlanButtonContainer>
			<LeftContainer>
				<RemainingPayment>{remaining?remaining:0} Remaining payments</RemainingPayment>
				<TotalMonth>Total plan duration {month?month:0} months</TotalMonth>
			</LeftContainer>
			<RightContainer>
				<TotalAmount>${amount?amount.toFixed(2):'0.00'}</TotalAmount>
			</RightContainer>
		</PlanButtonContainer>
	);
};

export default PlanButton;
