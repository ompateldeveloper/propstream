import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const SafeContainer = ({children}) => {
    return (
        <View className="p-4 pt-8">
            {children}
        </View>
    );
};

export default SafeContainer;
