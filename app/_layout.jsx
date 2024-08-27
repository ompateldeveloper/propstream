import { Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Navbar from "@/components/Navbar";

const RootLayout = () => {
    return (
        <View className="px-5 pb-4 bg-red-50">
            <Navbar />
            <Slot />
        </View>
    );
};

export default RootLayout;
