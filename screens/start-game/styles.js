import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 18,
        color: "#000",
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        margin: 10,
    },
    subTitle:{
        fontSize: 16,
        margin: 5,
    }
})