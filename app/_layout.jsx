import { SafeAreaView, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navbar from "@/components/Navbar";
const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
                <Navbar />
                {/* <Slot /> */}
        </GestureHandlerRootView>
    );
};

export default RootLayout;
