import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/NoteContext';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ShowScreen = ({ navigation }) => {
    // const item = navigation.getParam('id');
    const { state } = useContext(Context);

    const note = state.find((note) => note.id === navigation.getParam('id'))

    return (
        <>
            <Text style={styles.title}>{note.title}</Text>
            <Text>{note.content}</Text>
        </>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <FontAwesome name="pencil" size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        height: 60,
        paddingLeft: 6,
        fontSize: 22,
        marginBottom: 10,
        marginHorizontal: 5,
    }
});

export default withNavigation(ShowScreen);