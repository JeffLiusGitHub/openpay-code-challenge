import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo-primary.svg';
import Cart from '../assets/IconCart.svg';
import { tablet } from '../responsive';
const TopBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15px 5rem;
	${tablet({ margin: '15px 10px' })}
`;
const LogoContainer = styled.div``;
const RightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
	flex-direction: row;
`;
const AmountContainer = styled.div`
	margin-left: 0.7rem;
	font-weight: 500;
	display: inline-block;
	font-size: 1.5rem;
	width: 6rem;
	vertical-align: super;
`;
export interface Props {
	totalAmount: number;
}

const TopBar: FC<Props> = ({ totalAmount }) => {
	return (
		<TopBarContainer>
			<LogoContainer>
				<img
					src={Logo}
					style={{ fill: '#ffad32', width: '200px' }}
					alt="OpenPayLogo"
				/>
			</LogoContainer>
			<RightContainer>
				<LogoContainer>
					<img
						src={Cart}
						style={{ width: '40px', display: 'inline-block' }}
						alt="CartLogo"
					/>
					<AmountContainer>${totalAmount?totalAmount:'0.00'}</AmountContainer>
				</LogoContainer>
			</RightContainer>
		</TopBarContainer>
	);
};

export default TopBar;
