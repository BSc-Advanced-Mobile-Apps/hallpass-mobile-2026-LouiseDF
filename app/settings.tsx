import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';

export default function SettingsScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Card className="w=full mb-4">
        <Text variant="h1" className="semi-bold"></Text>
        Settings Screen
      </Card>
    </View>
  );
}
