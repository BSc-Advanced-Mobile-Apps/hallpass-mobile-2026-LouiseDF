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
    const taskTrigger = screen.getByTestId('task-trigger'); // Find the task trigger element

    expect(screen.queryByText('Edit Task')).toBeNull(); // Dialogue should not be visible initially

    const user = userEvent.setup();
    await user.press(taskTrigger); // Simulate pressing the task trigger

    const dialogueHeader = await screen.findByText('Edit Task'); // Wait for the dialogue header to appear
    expect(dialogueHeader).toBeTruthy(); // Check if the dialogue header is displayed
  });
});
