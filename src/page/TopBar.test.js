import TopBar from './TopBar';
import { render, screen } from '@testing-library/react';

describe('test TopBar component', () => {
	test('when input amount, brand logo, cart logo and amount on the page', () => {
		render(<TopBar totalAmount={543.21} />);
		const brandLogoElement = screen.getByAltText(/OpenPayLogo/i);
		expect(brandLogoElement).toBeInTheDocument();
		const cartLogoElement = screen.getByAltText(/CartLogo/i);
		expect(cartLogoElement).toBeInTheDocument();
		const amountElement = screen.getByText(/543.21/i);
		expect(amountElement).toBeInTheDocument();
	});

	test('if no input amount, amount display $0.00', () => {
		render(<TopBar />);
		const brandLogoElement = screen.getByAltText(/OpenPayLogo/i);
		expect(brandLogoElement).toBeInTheDocument();
		const cartLogoElement = screen.getByAltText(/CartLogo/i);
		expect(cartLogoElement).toBeInTheDocument();
		const amountElement = screen.getByText(/0.00/i);
		expect(amountElement).toBeInTheDocument();
	});
});
