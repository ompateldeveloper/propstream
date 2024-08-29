import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Menu } from "lucide-react-native";
import ImageAssets from "../../constants/ImageAssets";
import { Link, Slot, useNavigation } from "expo-router";
import { List } from "react-native-paper";
import { Colors } from "../../constants/Colors";
import Navbar from "../../components/Navbar";

const RouteLayout = () => {
    return <Slot />;
};

export default RouteLayout;
