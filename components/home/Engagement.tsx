import stand from '@/assets/custom/simplecard/Group 1686556205.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from "react-native";

const Engagement = () => {
    return (
           <View className="mt-5 mx-5">
            <View className="bg-[#4FB2F3] rounded-2xl relative h-40 overflow-hidden">

                {/* Left Side Content */}
                <View className="w-1/2 p-4 absolute top-0 left-0">
                    <Text
                        className="text-[#ffffff] mb-4 text-lg font-bold"
                        style={{ fontFamily: 'Proxima Nova' }}
                    >
                       Let’s Start Earning Your First Tokens!
                    </Text>

                    <TouchableOpacity>
                        <View className="w-36 h-9 bg-[#ffffff] rounded-3xl flex-row justify-between items-center">
                            <Text className="font-bold text-center ml-4">How to Earn</Text>
                            <View className="h-8 w-8 mr-0.5">
                                <View className="bg-[#11293A] rounded-full flex-1 justify-center items-center">
                                    <AntDesign name="arrow-right" size={16} color="#FFFFFF" />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Right Side Images - absolute bottom */}
                <View className="absolute -bottom-1.5 -right-9 flex-row justify-between w-1/2">
                    
                    <View>
                        <Image source={stand} contentFit="contain" style={{ height: 119, width: 131, }} />
                    </View>
                </View>

            </View>
        </View>
    );
};

export default Engagement;