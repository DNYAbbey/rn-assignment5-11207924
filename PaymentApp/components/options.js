import { View,StyleSheet, Text, Image } from "react-native";
import { useTheme } from "./themeContext";


export function Option ({icon, name}) {
    const { isDarkTheme } = useTheme();
    return(
        <View style={styles.optionContainer}>
            <View style={[styles.option, isDarkTheme && styles.darkOption]}>
                <Image source={icon} style={[styles.icon, isDarkTheme && styles.darkIcon]}/>
            </View>
            <Text style={[styles.optionName, isDarkTheme && styles.darkOptionName]}>{name}</Text>
        </View>
    )}


const styles = StyleSheet.create({
    optionContainer: {
        width: '70px',
        height: '90px',
        alignItems: 'center',
        
    },
    option: {
        backgroundColor: 'lightgray',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5px',
    },
    darkOption: {
        backgroundColor: 'rgba(51, 51, 70, 0.5)'
    },
    icon:{
        width: '24px',
        height: '25px',
        
    },
    darkIcon:{
        width: '35px',
        height: '36px',
        opacity: 1,
    },
    optionName: {
        fontSize: '15px',
        fontWeight: 'semibold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'lightblack',
        fontSize: '16px',
        fontWeight: 400,    
    },
    darkOptionName: {
        color: 'grey',
    },

})