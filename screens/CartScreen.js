import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { featured } from "../constants";

export default function CartScreen({ options }) {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 mt-4">
      {/* Back Button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 p-1 top-5 left-2  rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-xl mt-1 font-bold">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* Delivery Time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bike-man.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold mr-2" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* Dishes */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            className="flex-row items-center gap-x-3  py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
          >
            <Text className="font-bold" style={{ color: themeColors.text }}>
              2 x{" "}
            </Text>
            <Image source={dish.image} className="h-14 w-14 rounded-full" />
            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
            <Text className="font-semibold text-base">${dish.price}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                height={20}
                strokeWidth={2}
                width={20}
                stroke="white"
              
              />
            </TouchableOpacity>
            {/*  <Image source={dish.image} className="h-16 w-16 rounded-full"/>
            <View className="flex-1">
              <Text className="text-xl">{dish.name}</Text>
              <Text className="text-gray-700">{dish.description}</Text>
            </View>
            <Text className="text-gray-600 text-lg font-bold">${dish.price}</Text> */}
          </View>
        ))}
      </ScrollView>
      {/* total*/ }
      <View className="p-6 px-8 rounded-t-3xl gap-y-4" style={{backgroundColor:themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$38.45</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$1.99</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$40.44</Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("OrderPreparing")}
            className="p-3 rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-center text-white text-lg font-semibold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
