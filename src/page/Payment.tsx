import React, { FC } from 'react';
import styled from 'styled-components';
export interface Props {}
const PaymentComponent = styled.div`
    margin-top:2rem;
	display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const Title = styled.div`
	color: #0a71f9;
	font-size: 1rem;
    font-weight:900;
`;

const PaymentAmount = styled.div`
    color:#0a71f9;
    font-weight:900;
    height:5rem;
    font-size: 2.5rem;
`;

const Payment: FC<Props> = () => {
	return (
		<PaymentComponent>
			<Title>Payment due today</Title>
			<PaymentAmount>$10.00</PaymentAmount>
		</PaymentComponent>
	);
};

export default Payment;
