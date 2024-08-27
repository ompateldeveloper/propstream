import { View, Text } from "react-native";
import React from "react";
import { Camera,Menu } from "lucide-react-native";

const Navbar = () => {
    return (
        <View className="pt-8 flex items-center justify-between">
            <Camera color="black" size={20} />
            <Menu onTouchEnd={()=>{}} color="black" size={20}/>
        </View>
    );
};

export default Navbar;
