import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ItemPreview extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                        marginTop: 30,
                        backgroundColor: "#FFF",
                        height: 245,
                        width: 200,
                        elevation: 2,
                        borderRadius: 10,
                        padding: 15,
                        marginRight: 30,
                        marginLeft: 2,
                        marginBottom: 15
                    }}
                >
                    <SafeAreaView>

                        <Image
                            source={this.props.src}
                            style={{
                                width: 170,
                                height: 110,
                                borderRadius: 10
                            }}
                        />

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                color: "#4f4a4a",
                                fontSize: 15
                            }}>
                                {this.props.name}
                            </Text>

                        </View>
                        <Text style={{
                            fontSize: 9,
                            color: "#4f4a4a",
                            fontFamily: "Regular"
                        }}>
                            {this.props.description}
                        </Text>

                        <View style={{
                            flexDirection: "row",
                            marginTop: 5,
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <View style={{
                                width: "80%"
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: "Bold",
                                    width: "50%"
                                }}>
                                    {this.props.type}
                                </Text>
                            </View>
                            <View style={{
                                width: "20%"
                            }}>
                                <Image
                                    source={require('../images/add.png')}
                                    style={{
                                        alignSelf: "flex-end",
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            </View>
                        </View>
                    </SafeAreaView>

                </TouchableOpacity>
            </SafeAreaView >
        );
    }
}