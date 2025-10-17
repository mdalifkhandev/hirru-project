import coin from "@/assets/custom/Frame.png";
import logo from "@/assets/custom/Group.png";
import profile from "@/assets/custom/profile.png";
import BisnessModal from "@/components/home/BismessModel";
import Engagement from "@/components/home/Engagement";
import FlatLilstHotelAndBar, { hotelAndBar } from "@/components/home/FlatLilstHotelAndBar";
import QuickAcrion from "@/components/home/QuickAcrion";
import SimpleCart from "@/components/home/SimpleCart";
import Widgets from "@/components/home/Widgets";
import WorkInsigir from "@/components/home/worklinsigir.tsx/WorkInsigir";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contact() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView className="bg-[#FFFFFF] ">

        {/* Logo and top bar */}
        <View className='flex-1 flex-row justify-between'>
          <TouchableOpacity>
            <View className="h-24 w-24 mx-5">
              <Image
                contentFit="contain"
                source={logo}
                transition={1000}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </TouchableOpacity>
          <View className="mx-5">
            <View className="flex-1 flex-row gap-5 mt-5">
              <TouchableOpacity>
                <View className="bg-[#f5f5f5] w-14 h-14 rounded-full ">
                  <AntDesign name="message" size={24} color="#111111" className="mt-3.5 ml-3.5" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-[#f5f5f5] w-14 h-14 rounded-full ">
                  <Ionicons name="notifications-outline" size={24} color="#111111" className="mt-3.5 ml-3.5" />
                  <Text className="fixed -mt-10 ml-7 bg-[#4FB2F3] font-bold mr-2 rounded-full text-center">1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-[#f5f5f5] w-14 h-14 rounded-full ">
                  <MaterialCommunityIcons name="line-scan" size={24} color="#111111" className="mt-3.5 ml-3.5" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Profile and Name griting */}
        <View className="m-5 flex-1 flex-row gap-4">
          <View className="h-11 w-11">
            <Image
              source={profile}
              contentFit="contain"
              transition={1000}
              style={{ height: 44, width: 44 }}
            />
          </View>
          <View>
            <Text className="text-sm" > 👋 Hello, Jamming</Text>
            <Text className="font-bold text-base"> Ready for today’s task?</Text>
          </View>
          <View className="flex-1 flex-row justify-end">
            <Image source={coin} style={{ height: 32, width: 29.3, zIndex: 10 }} contentFit="contain" />
            <View className="w-14 h-[30px] bg-[#DDF1FF] rounded-2xl -ml-5">
              <Text className="font-bold ml-6 my-auto">05</Text>
            </View>
          </View>
        </View>
        {/* Your Today’s Shifts */}
        <View className="m-5 flex-1 flex-row justify-between">
          <Text className="text-xl font-semibold">Your Today’s Shifts</Text>
          <View className="bg-[#DDF1FF] rounded-3xl p-2">
            <TouchableOpacity onPress={() => setModalVisible(true)} className="m-auto">
              <Text className="">
                All <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* flat list asa akhana */}
        <FlatLilstHotelAndBar hotelAndBar={hotelAndBar} />
        {/* Rank Bord */}
        <SimpleCart />
        {/* quick action  */}
        {/* problem is key props */}
        <QuickAcrion />
        {/*  */}
        <WorkInsigir />

        <BisnessModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        {/* Engagement */}
        <Text className="font-semibold text-xl mx-6">Engagement</Text>
        <Engagement />
        {/* Engagement */}

        {/* Widgets */}
        <View>
          <Text className="font-semibold text-xl m-6">Widgets</Text>
          <Widgets/>
        </View>
        {/* Widgets */}

      </ScrollView>
    </SafeAreaView>
  );
}
