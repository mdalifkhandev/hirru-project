import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 p-4 flex-row flex-wrap justify-between bg-white">
          <Text>sdfasdfasdf</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}