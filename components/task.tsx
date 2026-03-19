import { ITask } from '@/app/index';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  return (
    <View className="bg background flex flex-1 py-32">
      <View className="flex flex-row">
        <View className="items center flex w-16 justify-center"></View>
        <Checkbox onCheckedChange={setChecked} checked={checked} className="border-2" />
      </View>
      <View className="border-foreground-transparent 1 flex border-b py-4"></View>
      <Text className="text-foreground">Submit Assignment</Text>
      <Text className="text-foreground-transparent">Due 20th Oct</Text>
    </View>
  );
}
