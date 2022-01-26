import React from 'react'
import { View } from 'react-native'

const Button = (props) => {
    return (
        <Button style={styles.readMoreButton}>
            <button value={props.value} />
        </Button>
    )
}

export default Button

const styles = StyleSheet.create({
    readMoreButton: {
        padding: 5,
    }
})
