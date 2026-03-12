import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  return;
  <View className="bg background flex flex-1 py-32">
    <View className="flex flex-row">
      <View className="items center flex w-16 justify-center"></View>
      <Text className="text-foreground bg-blue-500">Submit Assignment</Text>
      <Text className="text-foreground-transparent bg-orange-600">Due 20th Oct</Text>
    </View>
  </View>;
}
