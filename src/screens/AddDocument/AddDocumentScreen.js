import { React, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { collection, addDoc } from 'firebase/firestore';
import storage from '@react-native-firebase/storage';
import { db } from '../../../firebase'
import DocumentPicker from 'react-native-document-picker';



const AddDocumentScreen = ({ navigation }) => {
    const reportsCollection = collection(db, 'reports');

    const [newName, setNewName] = useState("");
    const [newMajor, setNewMajor] = useState("");
    const [newType, setNewType] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDocument, setNewDocument] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const uploadImage = async () => {
        const { documentURI } = newDocument;
        const filename = documentURI.substring(documentURI.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? documentURI.replace('file://', '') : documentURI;
        setUploading(true);
        setTransferred(0);
        const task = storage()
            .ref(filename)
            .putFile(uploadUri);
        // set progress state
        task.on('state_changed', snapshot => {
            setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
            );
        });
        try {
            await task;
        } catch (e) {
            console.error(e);
        }
        setUploading(false);
        Alert.alert(
            'document uploaded!',
            'Your document has been uploaded to Firebase Cloud Storage!'
        );
        setImage(null);
    };
    const addDocument = async () => {
        await addDoc(reportsCollection, { name: newName, major: newMajor, type: newType, description: newDescription })
            .then(
                console.log("User created")
            );
    };
    const goBack = () => {
        navigation.navigate('Reports List')
    }
    // const pickDocument = async () => {
    //     await DocumentPicker.getDocumentAsync({})
    //         .then(document => {
    //             alert(document);
    //             console.log(document);
    //             const documentURI = Platform.OS === 'ios' ? document.sourceURL : document.path;
    //             setNewDocument(documentURI);
    //         });
    // }
    const chooseDocument = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            });
            console.log(doc);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.WholePage}>
            <Button title="Back" onPress={goBack} />
            <Text>Add Document Screen</Text>
            <input type="text" placeholder="Name" onChange={(event) => { setNewName(event.target.value) }} />
            <input type="text" placeholder="Major" onChange={(event) => { setNewMajor(event.target.value) }} />
            <input type="text" placeholder="Type" onChange={(event) => { setNewType(event.target.value) }} />
            <input type="text" placeholder="Description" onChange={(event) => { setNewDescription(event.target.value) }} />
            <Button title="Select Document" onPress={chooseDocument} />
            <Button title='Submit' onPress={uploadImage} />
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