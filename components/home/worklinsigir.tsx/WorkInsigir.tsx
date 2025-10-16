import React from 'react';
import { Text, View } from 'react-native';
import CartConponent from './CartConponent';
import MonthPicker from './MonthPicker';
import ProfilePicker from './ProfilePicer';
import CartDownComponent from './CartDownComponent';

const WorkInsigir = () => {
    return (
        <View className='m-4'>
            {/* header part */}
            <View className='flex-1 flex-row justify-between'>
                <Text className='font-semibold text-xl'>Work Insights</Text>
                <View className='flex-1 flex-row justify-end'>
                    <MonthPicker />
                    <ProfilePicker />
                </View>
            </View>
            {/* header part end */}
            {/* First card part  */}
            <View className='m-3'>
                <View className='flex-1 flex-row justify-between '>
                    <CartConponent title='Completed' number='8' aboutNumber='Task' />
                    <CartConponent title='Worked' number='32' aboutNumber='hours' />
                </View>
                <View>
                    <CartDownComponent/>
                </View>
            </View>
            {/* First card part  */}
        </View>
    );
};

export default WorkInsigir;