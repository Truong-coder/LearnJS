// Hooks
//The React useState Hook allows us to track state in a function component.
//State generally refers to data or properties that need to be tracking in an application.


// With React There's functional components and statful components
// With Hooks they combine them both together into one
// useEffect is basically component did mount 
// In React, if you want to update state after the page is rendered you would use component

import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

export default function Home() { 
    // hooks

    return (
        <Text> hello world! </Text>
    );
}