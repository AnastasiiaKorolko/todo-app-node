import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('додає задачу і відображає її у списку', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/title/i);
  const addButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'Нова задача' } });
  fireEvent.click(addButton);

  const task = await screen.findByText('Нова задача');
  expect(task).toBeInTheDocument();
});
