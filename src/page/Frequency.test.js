import Frequency from './Frequency';
import { render, screen } from '@testing-library/react';

describe('test Frequency component', () => {
	test('if no props, display Loading data error', () => {
		render(<Frequency />);
		const defaultErrorElement = screen.getByText('Loading data error...');
		expect(defaultErrorElement).toBeInTheDocument();
	});

	test('give props to the plan button, should display same value on the button', () => {
		render(<Frequency frequencyArray={['weekly', 'monthly']} />);
		const weeklyButton = screen.getByRole('button', { name: 'Weekly' });
		const monthlyButton = screen.getByRole('button', { name: 'Monthly' });
		expect(weeklyButton).toBeEnabled();
		expect(monthlyButton).toBeEnabled();
	});
});
