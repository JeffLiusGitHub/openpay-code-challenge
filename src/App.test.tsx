import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

describe('test component on the page', () => {
	test('brand logo, cart logo and amount on the page', () => {
		render(<App />);
		const brandLogoElement = screen.getByAltText(/OpenPayLogo/i);
		expect(brandLogoElement).toBeInTheDocument();
		const cartLogoElement = screen.getByAltText(/CartLogo/i);
		expect(cartLogoElement).toBeInTheDocument();
		const amountElement = screen.getByText(/123.45/i);
		expect(amountElement).toBeInTheDocument();
	});

	test('Step 1 Pick your repayment frequency on the page', () => {
		render(<App />);
		const mainTitleElement = screen.getByText(/Step 1/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(
			/Pick your repayment frequency/i
		);
		expect(secondaryTitleElement).toBeInTheDocument();
	});

	test('Step 2 Pick your Plan on the page', () => {
		render(<App />);
		const mainTitleElement = screen.getByText(/Step 2/i);
		expect(mainTitleElement).toBeInTheDocument();
		const secondaryTitleElement = screen.getByText(/Pick your Plan/i);
		expect(secondaryTitleElement).toBeInTheDocument();
	});

	test('Button weekly fortnightly monthly on the page', () => {
		render(<App />);
		const weeklyButton = screen.getByRole('button', { name: 'Weekly' });
		const fortnightlyButton = screen.getByRole('button', {
			name: 'Fortnightly',
		});
		const monthlyButton = screen.getByRole('button', { name: 'Monthly' });
		expect(weeklyButton).toBeEnabled();
		expect(fortnightlyButton).toBeEnabled();
		expect(monthlyButton).toBeEnabled();
	});

	test('submit plan button on the page', () => {
		render(<App />);
		const submitPlanButton = screen.getByRole('button', {
			name: 'Submit Plan',
		});
		expect(submitPlanButton).toBeEnabled();
	});
});
