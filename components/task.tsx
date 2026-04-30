import React from 'react';
import { ITask } from '@/app';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogTrigger } from '@/components/ui/dialogue';
import { TaskDialogue } from './TaskDialogue';

export interface TaskProps {
  task: ITask;
  onUpdate?: (task: ITask) => void;
}

export default function Task({ task: initialTask, onUpdate }: TaskProps) {
  const [task, setTask] = React.useState(initialTask);
  const [showDialog, setShowDialog] = React.useState(false);

  const handleSetChecked = () => {
    const updatedTask = { ...task, isChecked: !task.isChecked };
    setTask(updatedTask);
    if (onUpdate) {
      onUpdate(updatedTask);
    }
  };
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <TouchableOpacity className="flex w-full flex-row">
          <View className="flex h-full w-24 px-8 py-5">
            <Checkbox
              className="border-foreground checked:bg-foreground"
              checked={task.isChecked}
              onCheckedChange={handleSetChecked}
            />
          </View>
          <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
            <Text className="text-foreground text-xl">{task.title}</Text>
            <Text className="text-foreground-transparent text-xl">{task.category}</Text>
          </View>
        </TouchableOpacity>
      </DialogTrigger>

      <TaskDialogue
        task={task}
        setTask={setTask}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </Dialog>
  );
}
