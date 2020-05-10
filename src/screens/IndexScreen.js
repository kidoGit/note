import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/NoteContext';

const IndexScreen = () => {
    const { state, addNote } = useContext(Context);

    return (
        <View>
            <Text>index screen</Text>
            <Button title="Add Note" onPress={addNote} />
            <FlatList
                data={state}
                keyExtractor={(note) => note.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;