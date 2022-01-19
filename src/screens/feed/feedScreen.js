import { React, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { db } from '../../../firebase'
import { collection, getDocs, } from "firebase/firestore";
import ListItem from '../../components/feed/listItem/listItem';

const feedScreen = () => {
    const reportsCollection = collection(db, 'reports');
    const [reports, setReports] = useState([]);


    useEffect(() => {
        const getReports = async () => {
            const data = await getDocs(reportsCollection);
            setReports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getReports();
    }, []);

    return (
        <View style={styles.WholePage}>
            <Text>Reports List: </Text>

            {reports.map(user => {
                return (
                    <ListItem name={user.name} major={user.major} type={user.type} description={user.description} />
                )
            })}
        </View >
    )
}


export default feedScreen

const styles = StyleSheet.create({
    WholePage: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
    }
})
