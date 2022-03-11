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

describe('test user action', () => {
	test('if user click weekly, 16 remaing payments total plan duration 4 months $7.72 should be rendered on the page', () => {
		render(<App />);
		const weeklyButton = screen.getByRole('button', { name: 'Weekly' });
		userEvent.click(weeklyButton);
		const remainingText = screen.queryByText('16 Remaining payments');
		const monthText = screen.queryByText('Total plan duration 4 months');
		const amountText = screen.queryByText('$7.72');
		expect(remainingText).toBeInTheDocument();
		expect(monthText).toBeInTheDocument();
		expect(amountText).toBeInTheDocument();
	});

	test('if user click monthly, 3 remaing payments total plan duration 3 months $41.15 should be rendered on the page', () => {
		render(<App />);
		const monthlyButton = screen.getByRole('button', { name: 'Monthly' });
		userEvent.click(monthlyButton);
		const remainingText = screen.queryByText('3 Remaining payments');
		const monthText = screen.queryByText('Total plan duration 3 months');
		const amountText = screen.queryByText('$41.15');
		expect(remainingText).toBeInTheDocument();
		expect(monthText).toBeInTheDocument();
		expect(amountText).toBeInTheDocument();
	});

	test('if user click fortnightly, not any keywords about remaing payments total plan duration  months will be rendered on the page', () => {
		render(<App />);
		const monthlyButton = screen.getByRole('button', { name: 'Fortnightly' });
		userEvent.click(monthlyButton);
		const remainingText = screen.queryByText('Remaining payments');
		const monthText = screen.queryByText('Total plan duration');
		const amountText = screen.queryByText('$41.15');
		expect(remainingText).toBeNull();
		expect(monthText).toBeNull();
		expect(amountText).toBeNull();
	});
});
