import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({

    container: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: theme.colors.textSecondaryColor
    },
})