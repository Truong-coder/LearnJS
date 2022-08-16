//Link to the home screen
//Switch between links
// Wrapping your app in NavigationContainer

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';

const Stack = createNativeStackNavigator(Home());

export default function AppNavigation(AppState){
    return (
        //need to pass down props
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home">
                {(props) => <Home {...props} extraData={AppState} />}
            </Stack.Screen>
            
            </Stack.Navigator>
        </NavigationContainer>
    );

}