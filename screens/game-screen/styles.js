import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: theme.padding.medium,
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: theme.margin.large,
        width: 300,
        maxWidth: "80%",
        padding: theme.padding.xLarge,
    }
})