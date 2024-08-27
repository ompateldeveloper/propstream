import { Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Slot />
            <Text>hello</Text>
        </View>
    );
};

export default RootLayout;
