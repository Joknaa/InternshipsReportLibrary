import { React, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { db } from '../../../firebase'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";



const homeScreen = () => {
    const [users, setUsers] = useState([]);
    const reportsCollection = collection(db, 'reports');

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(reportsCollection);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log("lol")
        };
        getUsers();
    }, []);



    return (
        <View>
            <Text>HomeScreen</Text>

            {users.map(user => {
                return (
                    <div>
                        <h4>Name : {user.name}</h4>
                        <h4>Major : {user.major}</h4>
                        <h4>Type : {user.type}</h4>
                    </div>
                )
            })}

        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({})
