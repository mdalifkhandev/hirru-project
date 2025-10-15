import calender from '@/assets/custom/action/calendar.png';
import clock from '@/assets/custom/action/clock.png';
import repeat_circle from '@/assets/custom/action/repeat-circle.png';
import timer_start from '@/assets/custom/action/timer-start.png';
import { Image } from 'expo-image';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const iconData = [
    { id: '1', image: clock, title: 'Track Hours' },
    { id: '2', image: timer_start, title: 'Swap Request' },
    { id: '3', image: calender, title: 'OT Request' },
    { id: '4', image: repeat_circle, title: 'Leave' },
    { id: '5', image: clock, title: 'Track Hours' },
    { id: '6', image: timer_start, title: 'Swap Request' },
    { id: '7', image: calender, title: 'OT Request' },
    { id: '8', image: repeat_circle, title: 'Leave' },
];

const QuickAcrion = () => {
    return (
      <View className="my-5">
            <Text className="mb-2 text-xl mx-5 font-bold">Quick Actions</Text>

            <FlatList
                data={iconData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity className="mx-2 items-center">
                        {/* Image */}
                        <View className="p-3 bg-[#F5F5F5]  rounded-full">
                            <Image
                                source={item.image}
                                style={{ width: 40, height: 40}}
                                contentFit='contain'
                            />
                        </View>
                        {/* Title */}
                        <Text className="mt-1 text-sm">{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default QuickAcrion;
