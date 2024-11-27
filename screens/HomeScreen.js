import { View, Text, TextInput } from "react-native";
import { useEffect,useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
import { getFeauredRestaurants } from "../api";

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    getFeauredRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search bar*/}
      <View className="flex-row items-center px-4 pb-2 gap-x-2 mt-4">
        <View className="flex-row flex-1 items-center rounded-full border border-gray-300 gap-x-2  p-3">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row item-center gap-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600 mx-2">Bogotá,Col</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 bg-gray-300 rounded-full ml-2"
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* Features */}
        <View className="mt-5">
          {featuredRestaurants.map((item, index) => {
            console.log("restaurants 2", item);
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
