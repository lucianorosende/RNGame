import { StyleSheet, Dimensions } from "react-native"
import theme from "../../constants/theme"

const { width, height } = Dimensions.get("window")

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
        width: width * 0.8,
        maxWidth: width * 0.95,
        minWidth: width * 0.7,
        alignItems: "center",
        padding: width > 500 ? theme.padding.medium : theme.padding.small,
        marginTop: theme.margin.large,
     
    },
    buttonContainer:{
        flexDirection: "row",
        width: width / 1.6,
        justifyContent: "space-evenly",
        margin: theme.margin.medium,
    },
    subTitle:{
        margin: theme.margin.small,
    },
    input:{
        width: width * 0.1,
        textAlign: "center",
        fontSize: theme.fontSize.large,
        height: height * 0.08,
    }
})