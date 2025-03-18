import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  test('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Makala Vignesh' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'vigneshmakala@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello World' },
    });
    
    fireEvent.click(screen.getByText(/send message/i));
    
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'Makala Vignesh',
      email: 'vigneshmakala@gmail.com',
      message: 'Hello World',
    });
  });
});