import Payment from './Payment';
import { render, screen } from '@testing-library/react';

describe('test payment component', () => {
	test('Payment due today $10.00 on the page', () => {
		render(<Payment />);
		const mainTitleElement = screen.getByText(/Payment due today/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(/10.00/i);
		expect(secondaryTitleElement).toBeInTheDocument();
	});
});
