import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function EmptyHabit() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text className="text-zinc-400 text-base">
        Você ainda não está monitorando nenhum hábito!
      </Text>

      <Text
        className="text-violet-400 text-base underline active:text-violet-800 uppercase"
        onPress={() => navigate("new")}
      >
        Cadastre seu primeiro hábito
      </Text>
    </View>
  );
}
