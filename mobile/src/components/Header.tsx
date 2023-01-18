import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between ">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.1}
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />
        <Text className="text-white ml-3 font-semibold text-base">New</Text>
      </TouchableOpacity>
    </View>
  );
}
