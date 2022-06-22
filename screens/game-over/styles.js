import { StyleSheet, Dimensions } from "react-native"
import theme from "../../constants/theme"

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

    genericContainer: {
        flex: 1,
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        padding: theme.padding.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    containerLandscape:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: theme.margin.medium,
    },
    image: {
        width: width * 0.7,
        height: height * 0.4,
    },
    imageLandscape:{
        width: width * 0.2,
        height: height * 0.3,
    },
    result:{
        marginVertical: theme.margin.medium,
        padding: theme.padding.medium,
        width: width * 0.5,
        maxWidth: width * 0.7,
        height: height * 0.1,
    },
    resultLandscape:{
        marginVertical: theme.margin.medium,
        padding: theme.padding.medium,
        width: width * 0.5,
        maxWidth: width * 0.7,
        height: height * 0.18,
    },
})