import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        padding: theme.padding.medium,
    },
    title: {
        fontSize: theme.fontSize.xLarge,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        padding: theme.padding.medium,
        marginTop: theme.margin.large,
     
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        margin: theme.margin.medium,
    },
    subTitle:{
        margin: theme.margin.small,
    },
    input:{
        width: 40,
        textAlign: "center",
        fontSize: theme.fontSize.large,
        height: 50,
    }
})