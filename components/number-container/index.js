import React from "react";
import { View } from "react-native";
import {CustomText} from "../index";
import { styles } from "./styles"


const NumberContainer = ({children}) => {
    return(
        <View style={styles.container}>
            <CustomText style={styles.number}>{children}</CustomText>
        </View>
    )
}

export default NumberContainer