import Introduction from './Introduction';
import { render, screen } from '@testing-library/react';

describe('test introduction component', () => {
	test('check Plan Setup pick the plan that best for you and your budget. on the page', () => {
		render(<Introduction />);
		const mainTitleElement = screen.getByText(/Plan Setup/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(
			/Pick the plan that best for you and your budget/i
		);
		expect(secondaryTitleElement).toBeInTheDocument();
	});
});
