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
    const amountElement = screen.getByText(/123.45/i)
    expect(amountElement).toBeInTheDocument();
	});

	test('check Plan Setup pick the plan that best for you and your budget. on the page', () => {
		render(<App />);
		const mainTitleElement = screen.getByText(/Plan Setup/i);
		expect(mainTitleElement).toBeInTheDocument();
    const secondaryTitleElement = screen.getByText(/Pick the plan that best for you and your budget/i);
    expect(secondaryTitleElement).toBeInTheDocument();
	});

  test('Payment due today $10.00 on the page', () => {
		render(<App />);
		const mainTitleElement = screen.getByText(/Payment due today/i);
		expect(mainTitleElement).toBeInTheDocument();
    const secondaryTitleElement = screen.getByText(/10.00/i);
    expect(secondaryTitleElement).toBeInTheDocument();
	});

  test('Step 1 Pick your repayment frequency on the page', () => {
		render(<App />);
		const mainTitleElement = screen.getByText(/Step 1/i);
		expect(mainTitleElement).toBeInTheDocument();
    const secondaryTitleElement = screen.getByText(/Pick your repayment frequency/i);
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
		const weeklyButton = screen.queryByText('weekly')
    const fortnightlyButton = screen.queryByText('fortnightly')
    const monthlyButton = screen.queryByText('monthly')
	});

  test('submit plan button on the page', () => {
		render(<App />);
		const submitPlanButton = screen.queryByText('submit plan')
	});
});

describe('check when click the frequency button', () => { 
  test('click weekly button, expect remaining payments, total plan and amount', () => {
		render(<App />);
    const weeklyButton = screen.getByTestId('weekly')
    userEvent.click(weeklyButton);
    const amount = screen.getByText('7.72')
	});


 })