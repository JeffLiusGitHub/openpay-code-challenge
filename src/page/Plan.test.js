import Plan from './Plan';
import { render, screen } from '@testing-library/react';

describe('test Plan component', () => {
	test('if no prop input, display', () => {
		render(<Plan />);
		const errorElement = screen.getByText(/No Data can be found/i);
		expect(errorElement).toBeInTheDocument();
	});
});
