import Step from './Step';
import { render, screen } from '@testing-library/react';

describe('test Step component', () => {
	test('if no prop input, display', () => {
		render(<Step />);
		const mainTitleElement = screen.getByText(/primary title/i);
		const secondaryTitleElement = screen.getByText(/secondary title/i);
		expect(mainTitleElement).toBeInTheDocument();
		expect(secondaryTitleElement).toBeInTheDocument();
	});

	test('input props step 1 Pick your repayment frequency,expect correct output on the screen', () => {
		render(
			<Step
				primaryTitle={'Step 1'}
				secondaryTitle={'Pick your repayment frequency'}
			/>
		);
		const mainTitleElement = screen.getByText(/Step 1/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(
			/Pick your repayment frequency/i
		);
		expect(secondaryTitleElement).toBeInTheDocument();
	});

	test('input props Step 2 Pick your Plan, expect correct output on the screen', () => {
		render(<Step primaryTitle={'Step 2'} secondaryTitle={'Pick your Plan'} />);
		const mainTitleElement = screen.getByText(/Step 2/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(/Pick your Plan/i);
		expect(secondaryTitleElement).toBeInTheDocument();
	});
});
