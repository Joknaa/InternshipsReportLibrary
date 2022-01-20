import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'


const listItem = (props) => {

    const seeMoreDetails = () => {
        props.navigation.navigate('MoreInfo', {
            name: props.name,
            major: props.major,
            type: props.type,
            description: props.description
        })
        // console.log(props)

    };

    return (
        <View style={styles.ReportPreview}>
            <Text>Name: {props.name}</Text>
            <Text>Major: {props.major}</Text>
            <Text>Type: {props.type}</Text>
            <Text>Description: {props.description}</Text>
            <Button style={styles.readMoreButton} title="Read More" onPress={seeMoreDetails} />
        </View >
    )
};





export default listItem

const styles = StyleSheet.create({
    ReportPreview: {
        width: '80%',
        borderWidth: 1,
        padding: 5,
        margin: 5
    },
    readMoreButton: {
        padding: 0,
        width: '50%',
    }
})


