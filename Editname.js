import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Editname = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);

    return (
        <View style = {{padding: 10}}>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: "bold"}}>Letter:</Text>
                <TextInput value = {name} style={{borderWidth: 1 }} onChangeText={(text) => setName(text)} />
            </View>

            <View style={{padding:10, flexDirection: "row", justifyContent: "space-around"}}>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="SAVE"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Water") {
                                    indexNum = 0;
                                }
                                datasource[indexNum].data[route.params.index].key = name;
                                navigation.navigate('Home');
                            }
                            }
                    />
                </View>


                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="DELETE"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Water") {
                                    indexNum = 0;
                                }
                                Alert.alert("Are you sure?", " ",
                                    [{text: "Yes", onPress: () => {
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate('Home');
                                        }},
                                        {text: "No"}]);
                            }
                            }
                    />

                </View>

            </View>

        </View>
    )
}

export default Editname;
