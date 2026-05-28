import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialogue';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

import { ITask } from '@/app';

interface TaskDialogProps {
  onDelete?: (task: ITask) => void;
  onSave?: (task: ITask) => void;
  task: ITask;
  setTask: (task: ITask) => void;
  setShowDialog: (showDialog: boolean) => void;
  showDialog: boolean;
}
function TaskDialogue({
  onSave,
  task,
  setTask,
  setShowDialog,
  showDialog,
  onDelete,
}: TaskDialogProps) {
  const [editedTitle, setEditedTitle] = React.useState(task.title);
  const [editedCategory, setEditedCategory] = React.useState(task.category);

  const handleUpdateTitle = (title: string) => {
    setEditedTitle(title);
  };
  const handleUpdateCategory = (category: string) => {
    setEditedCategory(category);
  };

  const handleSave = () => {
    const nextTask = {
      ...task,
      title: editedTitle,
      category: editedCategory,
    };

    const handleDelete = () => {
      if (onDelete) {
        onDelete(task);
        setShowDialog(false);
      }
    };

    setTask(nextTask);
    // If onSave is defined, call it and return early
    if (onSave) {
      onSave(nextTask);
      return;
    }
    setEditedTitle('');
    setEditedCategory('');
    setShowDialog(false);
  };

  return (
    <DialogContent className="max-w-5/6">
      <DialogHeader>
        <DialogTitle>Add Task</DialogTitle>
        <DialogDescription>Create a new task here.</DialogDescription>
      </DialogHeader>

      <View className="gap-4">
        <Input value={editedTitle} placeholder="Task title" onChangeText={handleUpdateTitle} />
        <Input value={editedCategory} placeholder="Category" onChangeText={handleUpdateCategory} />
      </View>

      <DialogFooter className="mt-4 flex flex-row gap-2">
        <Button
          className="border-brand-primary flex-1w-1/2 rounded-3xl bg-transparent"
          onPress={() => setShowDialog(false)}>
          <Text className="text-brand-primary">Cancel</Text>
        </Button>
        <Button className="bg-brand-primary flex-1w-1/2 rounded-3xl" onPress={handleSave}>
          <Text>Add Task +</Text>
        </Button>
        <Button className="w-1/2 flex-1 rounded-3xl bg-red-500" onPress={handleDelete}>
          <Text>Delete</Text>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export { TaskDialogue };
