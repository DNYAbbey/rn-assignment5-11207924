import { View,StyleSheet, Text, Image } from "react-native";

export function Settings ({setting}) {
    return(
        <View style={styles.setting}>
            <Text style={styles.settingText}>{setting}</Text>
            <Image source={require('../assets/arrow-right-3098.png')} style={styles.arrow}/> 
        </View>
    )}


const styles = StyleSheet.create({
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: 'solid',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: '1.5px',
        height: '80px',
        alignItems: 'center'
    },
    settingText: {
        fontSize: '23px',
        fontWeight: 500,
        color: 'lightblack',
    },
    arrow: {
        width: '18px',
        height: '18px',
    },
})