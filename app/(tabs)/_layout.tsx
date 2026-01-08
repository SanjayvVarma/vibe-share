import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarStyle: {
                backgroundColor: '#24162bff',
                borderTopWidth: 0,
                height: 60,
            },
        }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name='reel'
                options={{
                    title: "Reel",
                    tabBarIcon: ({ color }) => <FontAwesome size={23} name="film" color={color} />,
                }}
            />

            <Tabs.Screen
                name='addPost'
                options={{
                    title: "AddPost",
                    tabBarIcon: ({ color }) => <FontAwesome size={23} name="plus" color={color} />,
                }}
            />

            <Tabs.Screen
                name='message'
                options={{
                    title: "Message",
                    tabBarIcon: ({ color }) => <FontAwesome size={22} name="paper-plane" color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4e0p24gn-ccUXYZ6jZMr3MUG0DyLdP_UWEA&s",
                            }}
                            style={{
                                width: 27,
                                height: 27,
                                borderRadius: 14,
                                borderWidth: focused ? 2 : 0,
                                borderColor: focused ? "#180ad6" : "transparent",
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}