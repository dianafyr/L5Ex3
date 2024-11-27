import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    ScrollView,
    Button,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from './Data'
import Navigation from './Navigation';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
    all: {
        margin: 10,
        color: "white",
    },
    titleStyle: {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 30,
        padding: 10,
        fontSize: 18,
    },
    image: {
        width: 250,
        height: 350,
        marginLeft: 10
    },
    name: {
        fontSize: 18,
        flex: 1,
        fontWeight: "bold",
    },
    itemsInContainers: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        padding: 10,
        backgroundColor: "lightgray",
    }
})


const Home = ({navigation}) => {

    const renderItem =({item, index, section}) => {
        return (
            <View style={styles.itemsInContainers}>

                <TouchableOpacity onPress={() => {navigation.navigate('Editname', {index:index, type: section.title, key:item.name})
                }
                }
                >
                    <Text style={styles.name} >{item.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('EditPic', {index:index, type: section.title, key:item.num})}}>
                    <Image source={{uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png"}} style={styles.image} />
                </TouchableOpacity>

            </View>
        );
    };

    return (
        <View style={[styles.all, {marginTop:40, padding: 5}]}>
            <StatusBar barStyle="light-content" />
            <Button
                title= "ADD POKEMON"
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate('Add')}/>

            <ScrollView>
                <SectionList sections={datasource} renderItem={renderItem}
                             renderSectionHeader={({section: {title, bgColor, icon}}) => (
                                 <Text style={[styles.titleStyle, {backgroundColor: bgColor, borderWidth: 1}]}><Icon name={icon} size={20}/> {title}</Text>
                             )}/>
            </ScrollView>
        </View>


    )
}



export default Home;
