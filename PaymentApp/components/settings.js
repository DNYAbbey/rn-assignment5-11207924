import { View,StyleSheet, Text, Switch } from "react-native";
import { Settings } from "./settingsOptions";
import { useState } from 'react';


export function SettingsScreen () {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);
    return(
        <View style={styles.settings}>
            <Text style={styles.settingsHeader}>Settings</Text>
            <Settings setting={'Language'}/>
            <Settings setting={'Language'}/>
            <Settings setting={'Language'}/>
            <Settings setting={'Language'}/>
            <Settings setting={'Language'}/>
            <View style={styles.themeView}>
                <Text style={styles.theme}>Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "lightgreen" }}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                    style={styles.switch}
                />
            </View>
            
        </View>
    )}


const styles = StyleSheet.create({
    settings:{
        padding: '20px',
        paddingTop: '40px',
    },
    settingsHeader:{
        fontSize: '25px',
        marginBottom: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    themeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px',
    },
    theme: {
        fontSize: '25px',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
    },
    switch: {
        height: '30px'
    },
})