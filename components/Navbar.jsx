import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Clock, Mail, Menu, Phone, X } from "lucide-react-native";
import ImageAssets from "../constants/ImageAssets";
import { Link, useNavigation } from "expo-router";
import { List } from "react-native-paper";
import { Colors } from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

const Icon = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={{ paddingRight: 15 }}
            onPress={() => {
                navigation.toggleDrawer();
            }}
        >
            <Menu color="red" className="pl-8" size={20} />
        </Pressable>
    );
};
const Logo = () => {
    return <Image source={ImageAssets.nav_logo} className="h-4 w-32" resizeMode="contain" />;
};
const StyledLink = (props) => {
    return (
        <Link {...props} className="px-4 py-4 text-lg text-white">
            {props.children}
        </Link>
    );
};
const StyledAccordian = (props) => {
    return (
        <List.Accordion {...props} className="bg-black " titleStyle={{ color: "#fff", fontSize: 18 }}>
            {props.children}
        </List.Accordion>
    );
};
const StyledItem = (props) => {
    return <List.Item {...props} className="text-white bg-black" />;
};
const DrawerContent = ({ navigation }) => {
    return (
        <View className="pt-8 bg-black h-full ">
            <Pressable
                onPress={() => {
                    navigation.toggleDrawer();
                }}
            >
                <X color="red" className=" mt-4 mr-5 ml-auto" size={20} />
            </Pressable>
            <ScrollView>
                <List.AccordionGroup>
                    <StyledLink href="/features">Features</StyledLink>

                    <StyledAccordian title="Clients" id="clients">
                        <StyledItem
                            title={() => (
                                <View className="pl-4">
                                    <Link href="/real-estate-investors" className="text-orange-500/70 py-1">
                                        Real Estate Investors
                                    </Link>
                                    <Link href="/real-estate-agents" className="text-orange-500/70 py-1">
                                        Real Estate Agents
                                    </Link>
                                    <Link href="/real-estate-brokers" className="text-orange-500/70 py-1">
                                        Real Estate Brokers
                                    </Link>
                                    <Link href="/real-estate-contractors" className="text-orange-500/70 py-1">
                                        Real Estate Contractors
                                    </Link>
                                    <Link href="/property-managers" className="text-orange-500/70 py-1">
                                        Property managers
                                    </Link>
                                    <Link href="/lenders-and-loan-originators" className="text-orange-500/70 py-1">
                                        Lenders and Loan Originators
                                    </Link>
                                    <Link href="/appraisers-and-real-estate-professionals" className="text-orange-500/70 py-1">
                                        Appraisers and Real Estate Professionals
                                    </Link>
                                </View>
                            )}
                        />
                    </StyledAccordian>

                    <StyledLink href="/pricing" className="px-4 py-4 text-lg text-white">
                        Pricing
                    </StyledLink>
                    <StyledLink href="/mobile" className="px-4 py-4 text-lg text-white">
                        Mobile
                    </StyledLink>
                    <StyledLink href="/academy" className="px-4 py-4 text-lg text-white">
                        Academy
                    </StyledLink>

                    <StyledAccordian title="Resource Library" id="resource_library">
                        <StyledItem
                            title={() => (
                                <View className="pl-4">
                                    <Link href="/getting-started" className="text-orange-500/70 py-1">
                                        Getting Started
                                    </Link>
                                    <Link href="/frequently-asked-questions" className="text-orange-500/70 py-1">
                                        Frequently Asked Questions
                                    </Link>
                                    <Link href="/video-library" className="text-orange-500/70 py-1">
                                        Video Library
                                    </Link>
                                    <Link href="/webinars-events" className="text-orange-500/70 py-1">
                                        Webinars / Events
                                    </Link>
                                    <Link href="/glossary-of-real-estate-terms" className="text-orange-500/70 py-1">
                                        Glossary of Real Estate Terms
                                    </Link>
                                    <Link href="/quick-list-definitions" className="text-orange-500/70 py-1">
                                        Quick List Definitions
                                    </Link>
                                    <Link href="/general-blog" className="text-orange-500/70 py-1">
                                        General Blog
                                    </Link>
                                    <Link href="/real-estate-investor-blog" className="text-orange-500/70 py-1">
                                        Real Estate Investor Blog
                                    </Link>
                                    <Link href="/real-estate-agents-blog" className="text-orange-500/70 py-1">
                                        Real Estate Agents Blog
                                    </Link>
                                </View>
                            )}
                        />
                    </StyledAccordian>
                    <StyledAccordian title="Contact" id="contact">
                        <StyledItem
                            title={() => (
                                <View className="pl-4">
                                    <Link href="/about" className="text-orange-500/70 py-1">
                                        About
                                    </Link>
                                    <Link href="/contact" className="text-orange-500/70 py-1">
                                        Contact
                                    </Link>
                                    <Link href="/partner-with-us" className="text-orange-500/70 py-1">
                                        Partner With Us
                                    </Link>
                                </View>
                            )}
                        />
                    </StyledAccordian>

                    <StyledLink href="/pricing" className="px-4 py-4 text-lg text-white">
                        Pricing
                    </StyledLink>
                    <StyledLink href="/signin" className="px-4 py-4 text-lg text-white">
                        Log In
                    </StyledLink>
                    <StyledLink href="mailto:support@propStream.com" className="px-4 py-4 text-lg text-white">
                        <View className="flex flex-row items-center justify-center">
                            <Mail className="" color={"white"} size="16" />
                            <Text className="text-lg text-white ml-1">Support@PropStream.com</Text>
                        </View>
                    </StyledLink>
                    <StyledLink href="/news" className="px-4 py-4 text-lg text-white">
                        <View className="flex flex-row items-center justify-center">
                            <Clock className="" color={"white"} size="16" />
                            <Text className="text-lg text-white ml-1">Mon - Fri: 6:00 AM - 6:00 PM PT</Text>
                        </View>
                    </StyledLink>
                    <StyledLink href="tel:8772049040" className="px-4 py-4 text-lg text-white">
                        <View className="flex flex-row items-center justify-center">
                            <Phone className="" color={"white"} size="16" />
                            <Text className="text-lg text-white ml-1">Toll Free (877) 204-9040</Text>
                        </View>
                    </StyledLink>
                    <StyledLink href="https://www.facebook.com/groups/propstream.community" className="px-4 py-4 text-lg text-white">
                        Community
                    </StyledLink>
                    <Text className="px-4 py-4 text-lg text-white"></Text>
                </List.AccordionGroup>
            </ScrollView>
        </View>
    );
};
const Navbar = () => {
    return (
        <Drawer
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTitle: Logo,
                drawerPosition: "right",
                headerRight: Icon,
                headerLeft: () => {},
            }}
        ></Drawer>
    );
};

export default Navbar;
