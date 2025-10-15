import stand from '@/assets/custom/simplecard/Group 3173.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from "react-native";

const SimpleCart = () => {
    return (
        <View className="mt-5 mx-5">
            <View className="bg-[#4FB2F3] rounded-2xl relative h-40 overflow-hidden">

                {/* Left Side Content */}
                <View className="w-1/2 p-4 absolute top-0 left-0">
                    <Text
                        className="text-[#ffffff] mb-4 text-lg font-bold"
                        style={{ fontFamily: 'Proxima Nova' }}
                    >
                        See your rank on board
                    </Text>

                    <TouchableOpacity>
                        <View className="w-32 h-9 bg-[#ffffff] rounded-3xl flex-row justify-between items-center">
                            <Text className="font-bold text-center ml-6">View</Text>
                            <View className="h-8 w-8 mr-0.5">
                                <View className="bg-[#11293A] rounded-full flex-1 justify-center items-center">
                                    <AntDesign name="arrow-right" size={16} color="#FFFFFF" />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Right Side Images - absolute bottom */}
                <View className="absolute -bottom-5 right-0 flex-row justify-between w-1/2 pr-3">
                    <View>
                        <Ionicons name="person-outline" size={20} color="black" className='bg-white text-center p-1 rounded-full m-1 bottom-[-45px]' />
                        <Image source={stand} contentFit="contain" style={{ height: 65, width: 37, bottom: -35 }} />
                    </View>
                    <View>

                        <Ionicons name="person-outline" size={20} color="black" className='bg-white text-center p-2 rounded-full m-2 -bottom-7' />
                        <Image source={stand} contentFit="contain" style={{ height: 95, width: 46 }} />
                    </View>
                    <View>
                        <Ionicons name="person-outline" size={20} color="black" className='bg-white text-center p-1 rounded-full m-1 bottom-[-45px]' />
                        <Image source={stand} contentFit="contain" style={{ height: 65, width: 37, bottom: -35}} />
                    </View>
                </View>

            </View>
        </View>

    );
};

export default SimpleCart;