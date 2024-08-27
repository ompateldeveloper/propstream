import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
    return (
        <View>
            <Text>index</Text>
            <Link href='/features'>go</Link>
        </View>
    );
};

export default Index;