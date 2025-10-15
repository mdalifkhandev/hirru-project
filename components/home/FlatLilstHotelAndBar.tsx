import hotel from '@/assets/custom/flatList/9f74e11b48b5d005efb1fef47a112393f93d671d.jpg';
import clock from '@/assets/custom/flatList/clock.png';
import ellipse1 from '@/assets/custom/flatList/Ellipse 11751.png';
import ellipse2 from '@/assets/custom/flatList/Ellipse 11752.png';
import ellipse3 from '@/assets/custom/flatList/Ellipse 11753.png';
import ellipse4 from '@/assets/custom/flatList/Ellipse 11755-1.png';
import ellipse5 from '@/assets/custom/flatList/Ellipse 11755.png';
import ellipse6 from '@/assets/custom/flatList/Ellipse 11756.png';
import location from '@/assets/custom/flatList/location.png';
import profile from '@/assets/custom/flatList/profile.png';
import timer from '@/assets/custom/flatList/timer.png';
import { Button } from '@react-navigation/elements';
import { Image } from "expo-image";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export const hotelAndBar = [
    {
        id: "1",
        name: "Hotel & Bar Management",
        location: "Dhaka, Bangladesh",
        image: hotel,
        time: '10 AM - 6 PM',
    },
    {
        id: "2",
        name: "Hotel & Bar Management",
        location: "Chittagong, Bangladesh",
        image: hotel,
        time: '10 AM - 6 PM',
    },
    {
        id: "3",
        name: "Hotel & Bar Management",
        location: "Cox’s Bazar, Bangladesh",
        image: hotel,
        time: '10 AM - 6 PM',
    },
];

const FlatLilstHotelAndBar = ({ hotelAndBar }: any) => {
    const renderItem = ({ item }: { item: (typeof hotelAndBar)[0] }) => (
        <TouchableOpacity>
            <View className="h-[209px] w-[320px] bg-[#E5F4FD] rounded-3xl  mx-4">
                <View className="bg-white h-8 w-[244px] rounded-3xl m-auto flex-row items-center justify-center">
                    <Text className="text-center">Ongoing :</Text>

                    <Image
                        source={timer}
                        contentFit="contain"
                        style={{ height: 20, width: 20, marginHorizontal: 6 }}
                    />

                    <Text className="font-bold text-base">00 : 00 : 05</Text>
                </View>
                <View className="flex-1 flex-row mt-4 ml-4">
                    <View className="h-20 w-20 ">
                        <Image
                            source={item.image}
                            contentFit="cover"
                            style={{
                                height: 80,
                                width: 80,
                                borderRadius: 16,
                            }}
                        />
                    </View>
                    <View className='ml-6'>
                        <Text className='text-base font-semibold'>{item.name}</Text>

                        <View className='flex-row items-center mt-1'>
                            <Image
                                source={clock}
                                contentFit='contain'
                                style={{ height: 16, width: 16, marginRight: 5 }}
                            />
                            <Text>{item.time}</Text>
                        </View>
                        <View className='flex-1 flex-row justify-between'>

                            <View className='mt-3 flex-1 flex-row'>
                                <View className='-mr-2'>
                                    <Image source={ellipse1} contentFit='contain' style={{ height: 24, width: 24 }} />
                                </View>
                                <View className='-mr-2'>
                                    <Image source={ellipse2} contentFit='contain' style={{ height: 24, width: 24 }} />
                                </View>
                                <View className='-mr-2'>
                                    <Image source={ellipse3} contentFit='contain' style={{ height: 24, width: 24 }} />
                                </View>
                                <View className='-mr-2'>
                                    <Image source={ellipse5} contentFit='contain' style={{ height: 24, width: 24 }} />
                                </View>
                                <View className='-mr-2'>
                                    <Image source={ellipse6} contentFit='contain' style={{ height: 24, width: 24 }} />
                                </View>
                                <View className='-mr-2'>
                                    <Image source={ellipse4} contentFit='contain' style={{ height: 24, width: 24 }} />
                                    <Text className='-mt-[22px] ml-[4px]'>+2</Text>
                                </View>
                            </View>
                            <View>
                                <View className='flex-1 flex-row -mr-10 mt-3'>
                                    <View className='mt-1'>

                                        <Image source={profile} contentFit='contain' style={{ height: 16, width: 16 }} />
                                    </View>
                                    <Text className='text-[#7A7A7A]'>7/30</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="mb-4 mx-4 flex-row items-center">
                        {/* Location Icon */}
                        <View>
                            <Image
                                source={location}
                                contentFit="contain"
                                style={{ width: 34, height: 34 }}
                            />
                        </View>

                        {/* Address Text */}
                        <View className="ml-3">
                            <Text className="font-semibold text-gray-800">136 Avenue Street</Text>
                            <Text className="text-gray-500 text-sm">
                                Maciezine, New York, USA, 
                            </Text>
                        </View>
                        <View>
                            <Button>Login</Button>
                        </View>
                    </View>
                </View>
            </View>


        </TouchableOpacity>
    );

    return (
        <View className="m-5">
            <FlatList
                data={hotelAndBar}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    );
};

export default FlatLilstHotelAndBar;
