import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View } from 'react-native';

const MonthPicker = () => {
    return (
        <View className="w-[140px] h-[33px] bg-[#F5F5F5] rounded-3xl overflow-hidden">
            <View className="-mt-3">
                <Picker
                    selectedValue={null}
                    onValueChange={() => { }}
                >
                    <Picker.Item label="January" value="january" />
                    <Picker.Item label="February" value="february" />
                    <Picker.Item label="March" value="march" />
                    <Picker.Item label="April" value="april" />
                    <Picker.Item label="May" value="may" />
                    <Picker.Item label="June" value="june" />
                    <Picker.Item label="July" value="july" />
                    <Picker.Item label="August" value="august" />
                    <Picker.Item label="September" value="september" />
                    <Picker.Item label="October" value="october" />
                    <Picker.Item label="November" value="november" />
                    <Picker.Item label="December" value="december" />
                </Picker>
            </View>
        </View>
    );
};

export default MonthPicker;