import { StyleSheet, Dimensions } from "react-native"
import theme from "../../constants/theme"

const { width, height } = Dimensions.get("window");

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
        width: width * 0.8,
        maxWidth: width * 0.95,
        minWidth: width * 0.7,
        padding: theme.padding.xLarge,
    }
})