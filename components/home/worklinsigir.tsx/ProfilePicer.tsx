import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Modal } from "react-native";
import img1 from '@/assets/custom/flatList/Ellipse 11756.png'
import AntDesign from '@expo/vector-icons/AntDesign';

const months = [
  { id: '1', image: img1 },
  { id: '2', image: img1 },
  { id: '3', image: img1 },
  { id: '4', image: img1 },
  { id: '5', image: img1 },
  { id: '6', image: img1 },
  { id: '7', image: img1 },
  { id: '8', image: img1 },
  { id: '9', image: img1 },
  { id: '10', image: img1 },
  { id: '11', image: img1 },
  { id: '12', image: img1 },
];

const ProfilePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="w-[60px]">
      {/* Picker Button */}
      <TouchableOpacity
        className="bg-gray-300 p-2 rounded-3xl items-center"
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="caret-down" size={15} color="black" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 justify-center items-center bg-black/50"
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-white p-4 rounded-xl">
            <FlatList
              data={months}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="mx-2"
                  onPress={() => setModalVisible(false)}
                >
                  <Image
                    source={item.image}
                    style={{ width: 30, height: 30, borderRadius: 4 }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProfilePicker;
