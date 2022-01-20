import { React, useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'
import { db } from '../../../firebase'
import { collection, getDocs, } from "firebase/firestore";
import ListItem from '../../components/feed/listItem/listItem';


const feedScreen = ({ navigation }) => {
    const reportsCollection = collection(db, 'reports');
    const [reports, setReports] = useState([]);


    useEffect(() => {
        const getReports = async () => {
            const data = await getDocs(reportsCollection);
            setReports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getReports();
    }, []);

    const addDocument = () => {
        navigation.navigate('AddDocument');
    }


    return (
        <SafeAreaView style={styles.WholePage}>
            <ScrollView style={styles.ScrollView}>
                {/* <Button title="Add" onPress={addDocument} /> */}
                {/* <Text>Reports List: </Text> */}

                {reports.map(report => {
                    return (
                        <ListItem
                            name={report.name}
                            major={report.major}
                            type={report.type}
                            description={report.description}
                            navigation={navigation} />
                    )
                })}
            </ScrollView>
        </SafeAreaView >
    )
}


export default feedScreen

const styles = StyleSheet.create({
    WholePage: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
    },
    ScrollView: {
        width: "100%",
        alignContent: 'center',
        padding: 5,
        margin: 5,
    }
})
