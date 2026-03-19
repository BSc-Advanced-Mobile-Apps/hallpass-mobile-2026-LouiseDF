import { useState } from 'react';
import { View } from 'react-native';
import { Task } from '@/components/task';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  // 1. Define your UseState here
  const [checked, setChecked] = useState(false);

  const task: ITask = {
    title: 'My test item',
    category: 'Test category',
    isChecked: false,
  };

  return (
    <View className="bg background flex flex-1 py-32">
      {/* This is where your new Task component is needed. How can you import it and then call it? */}
    </View>
  );
}
