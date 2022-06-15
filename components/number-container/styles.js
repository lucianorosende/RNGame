import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({

    container:{
        borderWidth: 2,
        padding: theme.padding.medium,
        borderRadius: 10,
        marginVertical: theme.margin.medium,
        alignItems: "center",
        justifyContent: "center",
    },
})