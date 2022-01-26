import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Ionicons'
import ItemPreview from '../common/ItemPreview'
import New from '../common/New'
import Best from '../common/Best'
import * as App from '../../App'

import { db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";

const documents2 = []

export default class Home extends React.Component {
    // state = {
    //     user: false,
    //     messages: []
    // }

    // componentDidMount() {
    //     this.fetchMessages();
    //     console.log(App.state.messages)
    // }

    // fetchMessages = () => {
    //     const query = db.collection('reports');
    //     query.onSnapshot((snapshot) => {
    //         snapshot.docChanges().forEach((change) => {
    //             const messageObj = {}
    //             messageObj.data = change.doc.data()
    //             messageObj.id = change.doc.id
    //             this.setState({
    //                 ...this.state,
    //                 messages: [messageObj, ...this.state.messages]
    //             })
    //         })
    //     })
    // }

    constructor(props) {
        super(props)
        this.state = {
            documents: []
        }
    }

    async fetchDocuments() {
        reportsCollection = collection(db, 'reports')
        await getDocs(reportsCollection).then((doc) => {
            doc.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                documents2.push(doc.data());
            })
        }
        )
        console.log(documents2)
        this.setState({ documents: documents2.data });
    }

    async componentDidMount() {
        await this.fetchDocuments();
    }

    render() {
        // let documents = []
        // this.getDoc().then((doc) => {
        //     doc.forEach(doc => {
        //         console.log(doc.id, '=>', doc.data());
        //         documents.push(doc.data());
        //     });
        //     documents.map(document => {
        //         return (
        //             console.log(document.name)
        //         )
        //     })
        // })
        console.log(this.state.documents)

        return (
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        backgroundColor: "#fff",
                        paddingHorizontal: 20
                    }}
                >
                    <SafeAreaView>

                        {/* Header */}
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            marginTop: 40,
                            alignItems: "center"
                        }}>
                            {/* Screen Title */}
                            <View style={{
                                width: "50%"
                            }}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    fontSize: 22
                                }}>Feed</Text>
                            </View>
                            {/* Profile Icon */}
                            <View style={{
                                width: "50%",
                                alignItems: "flex-end"
                            }}>
                                <Image
                                    source={require('../images/bag-2.png')}
                                    style={{ width: 16, height: 20 }}
                                />
                            </View>
                        </View>
                        {/* Search Bar & Filter BUtton */}
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            marginVertical: 30
                        }}>
                            {/* SearchBar */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                elevation: 2,
                                width: "85%",
                                backgroundColor: "#FFF",
                                paddingHorizontal: 20,
                                height: 35,
                                borderRadius: 10,
                                marginLeft: 1
                            }}>
                                <Icon name="ios-search"
                                    size={22}
                                    color="#4f4a4a"
                                />
                                <TextInput
                                    placeholder="Search reports ..."
                                    style={{
                                        fontFamily: "Medium",
                                        paddingHorizontal: 10,
                                        fontSize: 12
                                    }}
                                />
                            </View>

                            {/* Filter Button */}
                            <View style={{
                                alignItems: "center",
                                elevation: 2,
                                width: "15%",
                                backgroundColor: "#FFF",
                                marginLeft: 5,
                                height: 35,
                                borderRadius: 10,
                                marginLeft: 1,
                                justifyContent: "center"
                            }}>
                                <Image
                                    source={require('../images/sort.png')}
                                    style={{
                                        width: 18, height: 25
                                    }}
                                />
                            </View>

                        </View>

                        {/* Reports Title */}
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 18,
                                color: "#4f4a4a"
                            }}>
                                Reports
                            </Text>
                        </View>
                        {/* Reports List */}

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {this.state.documents.map(document => {
                                this.fetchDocuments()
                                return (
                                    < ItemPreview
                                        src={require('../images/1.png')}
                                        name={document.name}
                                        type={document.type}
                                        description={document.description}
                                        onPress={() => this.props.navigation.navigate('Detail')}
                                    />
                                )
                            })}

                        </ScrollView>

                        {/* Separator */}
                        <View
                            style={{
                                marginTop: 30,
                                color: "#4f4a4a",
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />

                        {/* Courses Title */}
                        <View style={{
                            marginTop: 30,
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 18,
                                color: "#4f4a4a"
                            }}>
                                Courses
                            </Text>
                        </View>
                        {/* Courses List */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <ItemPreview
                                src={require('../images/1.png')}
                                name="Business Inteligence"
                                type="Cours"
                                description=" Full sleeves short dress with three attractive colors and and available in various sizes."
                                onPress={() => this.props.navigation.navigate('Detail', {
                                    name: "Business Inteligence",
                                    description: "Full sleeves short dress with three attractive colors and and available in various sizes",
                                    type: "Cours",
                                })}
                            />
                            <ItemPreview
                                src={require('../images/2.png')}
                                name=".NET Technologies"
                                description=" Full sleeves short dress with three attractive colors and and available in various sizes."
                                type="Cours"
                                onPress={() => this.props.navigation.navigate('Detail', {
                                    name: ".NET Technologies",
                                    description: "Full sleeves short dress with three attractive colors and and available in various sizes",
                                    type: "Cours",
                                })} />
                            <ItemPreview
                                src={require('../images/1.png')}
                                name="EAI"
                                type="Cours"
                                description=" Full sleeves short dress with three attractive colors and and available in various sizes."
                                onPress={() => this.props.navigation.navigate('Detail')}
                            />

                        </ScrollView>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView >
        )
    }
}