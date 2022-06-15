import React from "react";
import { View } from "react-native";
import CustomText from "../custom-text";
import { styles } from "./styles"


const NumberContainer = ({children}) => {
    return(
        <View style={styles.container}>
            <CustomText>{children}</CustomText>
        </View>
    )
}

export default NumberContainer