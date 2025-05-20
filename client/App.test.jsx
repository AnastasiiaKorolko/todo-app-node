import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('add a task and achieve success to the list', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/title/i);
  const addButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(addButton);

  const task = await screen.findByText('New task');
  expect(task).toBeInTheDocument();
});
