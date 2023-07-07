import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('vitest testing example', () => {
	it('should button have class button', () => {
		render(<App />);
		expect(screen.getByText('Vite + React')).toBeDefined();
	});
});
