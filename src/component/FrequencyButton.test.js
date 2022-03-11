import FrequencyButton from './FrequencyButton';
import { render, screen } from '@testing-library/react';

describe('test FrequencyButton component', () => {
	test('if no value has been given, render return default button value', () => {
		render(<FrequencyButton />);
		const defaultButtonElement = screen.getByRole('button', {
			name: 'default button value',
		});
		expect(defaultButtonElement).toBeEnabled();
	});

	test('give props to the frequency button, should display same value on the button', () => {
		render(<FrequencyButton frequency="weekly" />);
		const weeklyButton = screen.getByRole('button', { name: 'Weekly' });

		expect(weeklyButton).toBeEnabled();
	});
});
