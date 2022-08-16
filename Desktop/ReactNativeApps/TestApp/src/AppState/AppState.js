// on top of everything
//Create global state
//AppState -> AppNavigation -> ...

import React, {useState, useEffect} from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
        const [allNotes, setAllNotes] = useState([{noteID: 1, noteTitle: 'First idea', noteText: 'This is my first startup idea'},{noteID:2, noteText: 'This is my second startup idea'}]);
        const [note, setNote] = useState([]);
        
        // value of this object is [allNotes, setAllNotes]
        const AppState = {
                allNotes,
                setAllNotes,
                note,
                setNote
        };
       
        

        return <AppNavigation AppState={AppState}/>
}