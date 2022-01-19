import { React, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase'


const AddDocumentScreen = ({ navigation }) => {
    const reportsCollection = collection(db, 'reports');

    const [newName, setNewName] = useState("");
    const [newMajor, setNewMajor] = useState("");
    const [newType, setNewType] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const createUser = async () => {
        await addDoc(reportsCollection, { name: newName, major: newMajor, type: newType, description: newDescription });
        console.log("User created");
    };

    const goBack = () => {
        navigation.navigate('Reports List')
    }
    return (
        <View style={styles.WholePage}>
            <Button title="Back" onPress={goBack} />
            <Text>Add Document Screen</Text>
            <input type="text" placeholder="Name" onChange={(event) => { setNewName(event.target.value) }} />
            <input type="text" placeholder="Major" onChange={(event) => { setNewMajor(event.target.value) }} />
            <input type="text" placeholder="Type" onChange={(event) => { setNewType(event.target.value) }} />
            <input type="text" placeholder="Description" onChange={(event) => { setNewDescription(event.target.value) }} />
            <button onClick={createUser}>Submit</button>
        </View>
    )
}

export default AddDocumentScreen

const styles = StyleSheet.create({
    WholePage: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
    }

})