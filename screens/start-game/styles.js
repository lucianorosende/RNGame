import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: theme.fontSize.xLarge,
        color: theme.colors.textColorDark,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        padding: 10,
        marginTop: 15,
     
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        margin: 10,
    },
    subTitle:{
        fontSize: theme.fontSize.medium,
        margin: 5,
        
    },
    input:{
        width: 40,
        textAlign: "center",
        fontSize: theme.fontSize.large,
        height: 50,
    }
})