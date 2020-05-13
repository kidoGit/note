import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Context } from '../context/NoteContext';
import { withNavigation } from 'react-navigation';

// const COLORS = ['#facaca', '#cadefa', '#f9faca', '#cafae6', '#fadfca'];

const IndexScreen = ({ navigation }) => {
    const { state, deleteNote } = useContext(Context);
    const randomColorIndex = Math.floor(Math.random() * 5);
    return (
        <>
            <FlatList
                numColumns={2}
                data={state}
                keyExtractor={(note) => note.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.row}
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.content}>{item.content}</Text>
                                </View>
                                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                                    <FontAwesome name="trash" style={styles.icon} />
                                </TouchableOpacity>
                        </TouchableOpacity>
                        // <>
                        //     { item.index % 2 !== 0
                        //         ? <View style={{...styles.row, marginRight: 16, marginLeft: 5}}>
                        //             <Text style={styles.title}>{item.title}</Text>
                        //             <FontAwesome name="trash" style={styles.icon} />
                        //         </View>
                        //         : <View style={{...styles.row, marginLeft: 16, marginRight: 5}}>
                        //             <Text style={styles.title}>{item.title}</Text>
                        //             <FontAwesome name="trash" style={styles.icon} />
                        //         </View>
                        //     }
                        // </>
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
        backgroundColor: '#cadefa',
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