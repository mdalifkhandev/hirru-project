import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import line from '@/assets/custom/simplecard/Line 2898.png';
import star from '@/assets/custom/simplecard/star.png';

// === Data ===
const data = [
  {
    id: '1',
    title: 'Recent Shift Summary',
    details: [
      { name: 'Date', value: '26 July' },
      { name: 'Worked', value: '6 hours' },
      { name: 'Rating', value: star },
    ],
  },
  {
    id: '2',
    title: 'Weekly Overview',
    details: [
      { name: 'Date', value: '1–7 August' },
      { name: 'Worked', value: '42 hours' },
      { name: 'Rating', value: star },
    ],
  },
  {
    id: '3',
    title: 'Weekly Overview',
    details: [
      { name: 'Date', value: '1–7 August' },
      { name: 'Worked', value: '42 hours' },
      { name: 'Rating', value: star },
    ],
  },
];

// === Single Card Component ===
const WidgetCard = ({ item }: { item: any }) => (
  <View className="h-[152px] w-[308px] rounded-xl border border-[#EEEEEE] p-3 mr-4 bg-white">
    {/* Header */}
    <View className="flex-row gap-2 items-center mb-3">
      <View className="h-[40px] w-[40px] bg-[#E9F0FD] rounded-full items-center justify-center">
        <Entypo name="message" size={24} color="#6998EF" />
      </View>
      <Text className="font-bold text-base text-[#111111]">{item.title}</Text>
    </View>

    {/* Details Section */}
    <View className="flex-row justify-between items-center">
      {item.details.map((detail: any, index: number) => (
        <React.Fragment key={index}>
          <View className="items-center">
            <Text className="text-sm text-[#7A7A7A]">{detail.name}</Text>
            {typeof detail.value === 'string' ? (
              <Text className="text-sm font-semibold text-[#111111]">
                {detail.value}
              </Text>
            ) : (
              <Image source={detail.value} contentFit="contain" style={{ height: 20, width: 88, marginTop: 2 }} />
            )}
          </View>
          {/* Line between items except last one */}
          {index !== item.details.length - 1 && (
            <Image source={line} contentFit="contain" style={{ height: 24, width: 2 }} />
          )}
        </React.Fragment>
      ))}
    </View>

    {/* Button */}
    <View className="items-end mt-3">
      <TouchableOpacity
        className="h-[30px] w-[132px] bg-[#E5F4FD] items-center justify-center rounded-3xl flex-row gap-2"
        onPress={() => console.log(`${item.title} Details Pressed`)}
      >
        <Text className="text-[#4FB2F3]">View Details</Text>
        <AntDesign name="arrow-right" size={18} color="#4FB2F3" />
      </TouchableOpacity>
    </View>
  </View>
);

// === FlatList Component ===
const Widgets = () => {
  return (
    <View className="mt-4">
      <FlatList
        data={data}
        renderItem={({ item }) => <WidgetCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default Widgets;
