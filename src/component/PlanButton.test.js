import PlanButton from './PlanButton';
import { render, screen } from '@testing-library/react';

describe('test PlanButton component', () => {
	test('if no value has been given, render 0 remaining, 0 month, $0.00', () => {
		render(<PlanButton />);
		const defaultPlanRemainingElement = screen.getByText(
			'0 Remaining payments'
		);
		expect(defaultPlanRemainingElement).toBeInTheDocument();
		const defaultPlanMonthElement = screen.getByText(
			'Total plan duration 0 months'
		);
		expect(defaultPlanMonthElement).toBeInTheDocument();
		const defaultPlanAmountElement = screen.getByText('$0.00');
		expect(defaultPlanAmountElement).toBeInTheDocument();
	});

	test('give props to the plan button, should display same value on the button', () => {
		render(<PlanButton  remaining={16} month={4} amount={7.72}  />);
		const defaultPlanRemainingElement = screen.getByText(
			'16 Remaining payments'
		);
		expect(defaultPlanRemainingElement).toBeInTheDocument();
		const defaultPlanMonthElement = screen.getByText(
			'Total plan duration 4 months'
		);
		expect(defaultPlanMonthElement).toBeInTheDocument();
		const defaultPlanAmountElement = screen.getByText('$7.72');
		expect(defaultPlanAmountElement).toBeInTheDocument();
	});
});
