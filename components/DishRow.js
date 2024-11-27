import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) =>
    selectCartItemsWithId(state, item._id)
  );
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{uri:urlFor(item.image).url()}}
      />
      <View className="flex flex-1 gap-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="flex justify-center items-center bg-white rounded-full w-10 h-10"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="flex justify-center items-center bg-white rounded-full w-10 h-10"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
