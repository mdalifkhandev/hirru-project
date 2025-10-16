import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Image, Modal, Pressable, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import img1 from '@/assets/custom/action/calendar.png'
import img2 from '@/assets/custom/action/clock.png'
import img3 from '@/assets/custom/action/repeat-circle.png'
import Ionicons from '@expo/vector-icons/Ionicons';

const BisnessModal = ({modalVisible, setModalVisible}:any) => {
  
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: '1', title: 'Option One', icon: img1 },
    { id: '2', title: 'Option Two', icon: img2 },
    { id: '3', title: 'Option Three', icon: img3 },
  ];

  const handleSelect = (id: string) => {
    if (!allSelected) {
      setSelected(id);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center">

        {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          {/* Background Blur */}
          <View className="flex-1 justify-end bg-black/60">
          <BlurView intensity={100} tint="dark" className="flex-1 justify-end bg-transparent">
            <View className="bg-white h-auto rounded-t-3xl p-5">

              {/* Hide Modal Button */}
             <Pressable
              onPress={() => setModalVisible(false)}
              className="absolute top-8 -mt-28 self-center bg-[#262626] rounded-full p-3"
            >
              <Ionicons name="close-outline" size={30} color="#ffffff" />
            </Pressable>

              <Text className="text-lg font-bold mb-4 text-center">Select Your Bussiness</Text>
              {/* Switch Button */}
              <View className="flex-row items-center justify-between mt-4 border-t border-gray-200 pt-3">
                <Text className="text-base font-semibold">Select All</Text>
                <Switch
                  value={allSelected}
                  onValueChange={(val) => {
                    setAllSelected(val);
                    if (!val) setSelected(null);
                  }}
                  trackColor={{ false: '#ccc', true: '#4FB2F3' }}
                  thumbColor={allSelected ? '#ffffff' : '#f4f3f4'}
                />
              </View>

              {/* Radio Buttons */}
              {options.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleSelect(item.id)}
                  className="flex-row items-center justify-between bg-gray-100 rounded-xl px-4 py-3 mb-3"
                >
                  {/* Left Icon + Title */}
                  <View className="flex-row items-center">
                    <Image source={item.icon} style={{ width: 32, height: 32 }} />
                    <Text className="ml-3 text-base font-semibold">{item.title}</Text>
                  </View>

                  {/* Right Radio */}
                  <View className="w-6 h-6 border-2 border-[#4FB2F3] rounded-full justify-center items-center">
                    {(allSelected || selected === item.id) && (
                      <View className="w-3.5 h-3.5 bg-[#4FB2F3] rounded-full" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </BlurView>
          </View>
        </Modal>

        {/* Open Modal Button
        <Pressable
          className="bg-[#4FB2F3] px-6 py-3 rounded-xl"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white font-semibold text-lg">Open Modal</Text>
        </Pressable> */}

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BisnessModal;