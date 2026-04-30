import Task from '@/components/Task';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { AddTask } from '@/components/AddTask';
import React from 'react';

export interface ITask {
  id: number;
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  // 1. Define your UseState here
  const [checked, setChecked] = useState(false);

  const initialTasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      category: 'Category 1',
      isChecked: false,
    },
    {
      id: 2,
      title: 'Task 2',
      category: 'Category 2',
      isChecked: true,
    },
    {
      id: 3,
      title: 'Task 3',
      category: 'Category 3',
      isChecked: false,
    },
  ];

  const [tasks, setTasks] = React.useState<ITask[]>(initialTasks);

  const handleAddTask = (title: string, category: string) => {
    const nextId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    setTasks([...tasks, { id: nextId, title, category, isChecked: false }]);
  };

  return (
    <View className="bg-background flex flex-1 justify-between">
      <View className="flex flex-row justify-center">
        <Text className="text-foreground pt-20 text-6xl font-bold">HallPass</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 16,
        }}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ScrollView>
      <View className="relative flex items-center">
        <AddTask onAdd={handleAddTask} />
      </View>
    </View>
  );
}
