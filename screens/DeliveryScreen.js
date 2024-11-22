import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../constants";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/resturantSlice";
import { useDispatch } from 'react-redux';
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant)
  console.log("restaurant map", restaurant.lat);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: 4.624476975249388,
          longitude: -74.20726045444944,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        <Marker
          coordinate={{
            latitude: 4.624476975249388,
            longitude: -74.20726045444944,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="bg-white rounded-t-3xl -mt-16 relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/scooter.gif")}
          />
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8),
          }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryMan.png")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Norman Osborn</Text>
            <Text className=" font-semibold text-white">Your rider</Text>
          </View>
          <View className="flex-row items-center gap-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                stokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} stokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
