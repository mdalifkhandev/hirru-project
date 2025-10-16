import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';

const CartConponent = ({title,number,aboutNumber}:any) => {
    return (
        <TouchableOpacity>
            <View className='border border-[#EEEEEE] h-[81px] w-[171px] rounded-xl p-4 bg-[#fffcfc]'>
                <Text className='text-[#7A7A7A]'>{title}</Text>
                <View className='flex-1 flex-row items-center'>
                    <Text className='text-2xl font-bold text-[#4FB2F3]'>{number}</Text>
                    <Text className='font-bold mx-2'>{aboutNumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CartConponent;