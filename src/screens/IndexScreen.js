import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Context } from '../context/NoteContext';
import { withNavigation } from 'react-navigation';

const IndexScreen = ({ navigation }) => {
    const { state, deleteNote } = useContext(Context);

    const createTwoButtonAlert = (id) =>
        Alert.alert(
            '',
            "Are you sure you want to delete this note?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteNote(id) }
            ],
            { cancelable: false }
        );

    return (
        <>
            <FlatList
                numColumns={2}
                data={state}
                keyExtractor={(note) => note.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{ ...styles.row, backgroundColor: item.color }}
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={{ width: '80%' }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.content}>{item.content}</Text>
                            </View>
                            <TouchableOpacity onPress={() => createTwoButtonAlert(item.id)}>
                                <FontAwesome name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        // flex: 1,
        flexWrap: 'wrap',
        margin: 4,
        // backgroundColor: '#cadefa',
        borderRadius: 7,
        height: 200,
        borderColor: '#cadefa',
        width: '48%',

    },
    title: {
        fontSize: 22,
        marginLeft: 5,
        marginTop: 10,
        color: '#000000',
        // width: '80%',
        height: 30
    },
    content: {
        fontSize: 16,
        marginLeft: 5,
        color: '#4d4d4d',
        height: '75%'
    },
    icon: {
        fontSize: 24,
        marginRight: 5,
        marginTop: 10,
        color: '#4d4d4d'
    }
});

export default withNavigation(IndexScreen);