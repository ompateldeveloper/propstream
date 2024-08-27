import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot } from "expo-router";

const RootLayout = () => {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "auto",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
});
