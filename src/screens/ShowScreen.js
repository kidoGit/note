import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/NoteContext';
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ShowScreen = ({ navigation }) => {
    const item = navigation.getParam('item');
    const { state } = useContext(Context);

    const note = state.find((note) => note.id === navigation.getParam('item').id)

    return (
        <>
            <Text>{note.title}</Text>
            <Text>{note.content}</Text>
        </>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            // <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="edit" size={30} />
            // </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default withNavigation(ShowScreen);