import React, { useRef } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

type DeleteTaskProps = {
  taskId: string;
  onDelete: (id: string) => void;
  title?: string;
};

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, onDelete, title }) => {
  const swipeableRef = useRef<Swipeable | null>(null);

  const handleDelete = () => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => swipeableRef.current?.close(),
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => onDelete(taskId),
      },
    ]);
  };

  const renderRightActions = () => (
    <Pressable style={styles.deleteAction} onPress={handleDelete}>
      <Text style={styles.deleteText}>Delete</Text>
    </Pressable>
  );

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Text style={styles.taskText}>{title ?? 'Swipe left to delete'}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
  },
  taskText: {
    color: '#111',
    fontSize: 16,
  },
  deleteAction: {
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DeleteTask;
