import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '../theme'

import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { categories, coffeeItems } from '../constants'
import Carousel from 'react-native-snap-carousel'
import CoffeeCard from '../components/CoffeeCard'



const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState(1)

    return (
        <View className="flex-1 relative bg-white">
            <StatusBar />
            <Image source={require('../assets/images/beansBackground1.png')} 
                className="w-full absolute -top-5 opacity-10"
                style={{ height: 220 }}
            />

            <SafeAreaView className="flex-1">

                {/* avatar and bell icon */}
                <View className="px-4 flex-row justify-between items-center">
                    <Image source={require('../assets/images/avatar.png')}
                        className="h-9 w-9 rounded-full"
                    />
                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon size="25" color={themeColors.bgLight} />
                        <Text className="text-base font-semibold">Boston, Cape Town</Text>
                    </View>
                    <BellIcon size="27" color="black" />
                </View>


                {/* search bar */}
                <View className="mx-5 mt-14">
                    <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
                        <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
                        <TouchableOpacity className="rounded-full p-2"
                            style={{backgroundColor: themeColors.bgLight}}
                        >
                            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* categories */}
                <View className="px-5 mt-6">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        className="overflow-visible"
                        renderItem={({ item }) => {
                            let isActive = item.id == activeCategory
                            let activeTestClass = isActive? "text-white" : "text-gray-700"
                            return(
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(item.id)}
                                    style={{ backgroundColor: isActive? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                                    className="p-4 px-5 rounded-full mr-2 shadow"
                                >
                                    <Text className={"font-semibold " + activeTestClass}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/* coffee cards */}
                <View className="mt-16 py-2">
                    {/* use of carousel here */}
                    <View>
                        <Carousel
                            containerCustomStyle={{ overflow: "visible" }}
                            data={coffeeItems}
                            loop={true}
                            renderItem={({item}) => <CoffeeCard item={item} />}
                            firstItem={1}
                            inactiveSlideOpacity={0.75}
                            inactiveSlideScale={0.77}
                            sliderWidth={400}
                            itemWidth={260}
                            slideStyle={{ display: "flex", alignItems: "center"}}
                        />
                    </View>
                    
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen