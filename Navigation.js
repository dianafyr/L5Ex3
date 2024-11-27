import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './Home.js';
import Add from './Add.js';
import Editname from './Editname.js';
import EditPic from './EditPic.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Add" component={Add}/>
                <Stack.Screen name="Editname" component={Editname}/>
                <Stack.Screen name="EditPic" component={EditPic}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;