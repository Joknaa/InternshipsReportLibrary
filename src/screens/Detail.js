import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SwiperComponent from '../common/SwiperComponent'
import Stars from 'react-native-stars';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    myStarStyle: {
        color: "#000",
        backgroundColor: 'transparent',
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    myEmptyStarStyle: {
        color: "white"
    }
});


export default class Detail extends React.Component {
    render() {
        const data = this.props.navigation.state.params;
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#FFF",
                paddingHorizontal: 20
            }}>

                {/* Back Button */}
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 40
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            width: "50%"
                        }}
                    >
                        <Image
                            source={require('../images/back.png')}
                            style={{
                                width: 15,
                                height: 15
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 15, marginTop: 20,
                    width: "100%"
                }}>
                    <View style={{
                        width: "65%"
                    }}>
                        <Text style={{
                            fontFamily: "Bold",
                            fontSize: 18,
                            color: "#4f4a4a"
                        }}>
                            {data.name}
                        </Text>
                    </View>
                </View>
                <Text style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    lineHeight: 20,
                    color: "#b3aeae",
                    marginTop: 20
                }}>
                    {data.description}
                </Text>

                {/* Download Button */}
                <View style={{
                    marginTop: 'auto',
                    backgroundColor: "#000",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    padding: 12,
                    marginBottom: 15
                }}>
                    <Image
                        source={require('../images/bag.png')}
                        style={{ height: 20, width: 16 }}
                    />
                    <Text style={{
                        fontSize: 20,
                        color: "#FFF",
                        fontFamily: "Bold",
                        marginHorizontal: 15
                    }}>
                        Download
                    </Text>

                </View>
            </SafeAreaView >
        );
    }
}