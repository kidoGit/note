import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context } from '../context/NoteContext';

const BLUE = '#428AF8';
const GRAY = '#D3D3D3';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleFocused, setTitleFocused] = useState(false);
    const { addNote } = useContext(Context);

    return (
        <>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder='Title'
                selectionColor={BLUE}
                underlineColorAndroid={ titleFocused ? BLUE : GRAY }
                onFocus={() => setTitleFocused(true)}
                onBlur={() => setTitleFocused(false)}
                style={styles.titleInput}
            />

            <View style={styles.contentContainer}>
                <TextInput
                    value={content}
                    onChangeText={(content) => setContent(content)}
                    multiline={true}
                    placeholder="Enter Content"
                    numberOfLines={20}
                    style={styles.contentInput}
                />
            </View>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
                addNote(title, content, () => {
                    // handling redirection to index screen via callback to handle future api call to add note
                    navigation.navigate('Index');
                })
            }}>
                <Text style={styles.buttonStyle}>Add Note</Text>
            </TouchableOpacity>

        </>
    );
};

const styles = StyleSheet.create({
    titleInput: {
        height: 60,
        paddingLeft: 6,
        fontSize: 22,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    contentInput: {
        margin: 10,
        padding: 5,
        textAlignVertical: "top",
        fontSize: 18,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: 10, 
        backgroundColor: '#e4ecf7'
    },
    buttonStyle: {
        marginVertical: 10,
        width: 150,
        fontSize: 18,
        padding: 15,
        color: 'white',
        backgroundColor: '#428AF8',
        textAlign: 'center',
        borderRadius: 5
    }
});

export default CreateScreen;