import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import img from '@/assets/custom/workinsigths/Group 1686556210.png'

const CartDownComponent = () => {
    return (
        <View className='my-4 border border-[#EEEEEE] rounded-xl flex-1 flex-row justify-between'>
            <View className='m-4'>
                <Text>Performance Status</Text>
                <View className='flex-1 flex-row gap-3'>
                    <Text className='font-bold text-2xl text-[#E74C69]'>12%</Text>
                    <View className='bg-[#E74C69] rounded-full m-1 p-0.5'>
                        <AntDesign name="arrow-down" size={20} color="white" />

                    </View>
                </View>
            </View>
            <View>
                <Image source={img} contentFit='contain' style={{height:71,width:160}}/>
            </View>
        </View>
    );
};

export default CartDownComponent;