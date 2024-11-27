import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [type, setType] = useState('Water');

    return(
        <View style={{padding:10}}>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Name:</Text>
                <TextInput style ={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Image Number:</Text>
                <TextInput style ={{borderWidth: 1}}
                           onChangeText={(text) => setNum(parseInt(text) || 0)} />
            </View>

            <View style={{padding:10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label: "Water", value: "Water"},
                        {label: "Leaf", value: "Leaf"},
                    ]}
                />
            </View>

            <Button title="ADD CARD"
                    onPress={() => {
                        let item = {name: name, num: num};
                        let indexNum = 1;
                        if (type == "Water") {
                            indexNum = 0;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate('Home');
                    }
                    }
            />

        </View>

    );
};

export default Add;
