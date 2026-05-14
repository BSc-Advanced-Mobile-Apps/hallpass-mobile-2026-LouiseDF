import { render, screen, userEvent } from '@testing-library/react-native';
import Task from '../components/Task';
import { Dialog } from '@/components/ui/dialogue';

describe('Task', () => {
  test('renders a task', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    // Just check if the title and category are displayed
    const titleElement = screen.getByText('Test Task');
    const categoryElement = screen.getByText('Test Category');
    expect(titleElement).toBeTruthy();
    expect(categoryElement).toBeTruthy();
  });

  test('toggles completion status when pressed', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    const checkbox = screen.getByTestId('checkbox'); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).toBeChecked();
  });
  test('toggles from checked to unchecked when pressed', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: true,
    };
    render(<Task task={task} />);

    const checkbox = screen.getByTestId('checkbox'); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  test('shows dialogue box when tapped', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };
    render(
      <>
        <Task task={task} />
        <Dialog />
      </>
    );
    await userEvent.setup().tap(screen.getByText('Test Task')); // Simulate tapping the task title

    const dialogueTitle = await screen.findByText('Task Details'); // Assuming the dialogue has a title "Task Details"
    expect(dialogueTitle).toBeTruthy();
    const dialogue = screen.getByTestId('dialogue'); // Assuming the dialogue has a test ID "dialogue"
    expect(dialogue).toBeTruthy();
  });
});
