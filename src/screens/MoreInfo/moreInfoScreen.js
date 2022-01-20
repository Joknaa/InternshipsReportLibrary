import { React, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


const moreInfoScreen = (props) => {
    const report = props.route.params;

    const goBack = () => {
        navigation.navigate('Reports List')
    }
    const DownloadFile = () => {
        console.log("Downloading file")
    }

    return (
        <View style={styles.WholePage}>
            <View style={styles.ReportPreview}>
                <Text>Name: {report.name}</Text>
                <Text>Major: {report.major}</Text>
                <Text>Type: {report.type}</Text>
                <Text>Description: {report.description}</Text>
                <Button style={styles.readMoreButton} title="Download" onPress={DownloadFile} />
            </View >
        </View>
    )
}


export default moreInfoScreen

const styles = StyleSheet.create({
    WholePage: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
    },
    ReportPreview: {
        width: '80%',
        borderWidth: 1,
        padding: 5,
        margin: 5
    },

})