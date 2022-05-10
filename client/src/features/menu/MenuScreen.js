import React from "react";
import { Button, Center, View, Box } from "native-base";

import { Animated } from "react-native";
import { CustomTabView } from "../../components/general/tabView/CustomTabView";
import FoodList from "../../components/newMeal/choosing/FoodList";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import SearchBar from "../../components/general/input/SearchBar";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";
import { ThumbnailList } from "../../components/general/listItem/ThumbnailList";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const MenuScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const scrollThumbnail = () => {
    return (
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <ThumbnailList />
      </Animated.ScrollView>
    );
  };
  const tabList = [
    {
      title: "Thực đơn",
      tab: scrollThumbnail,
    },
    {
      title: "Công thức",
      tab: SecondRoute,
    },
  ];

  const Content = () => {
    return (
      <View h="100%">
        <SearchBar />
        <CustomTabView tabList={tabList} />
      </View>
    );
  };
  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        title="Thực đơn"
        backgroundColor="white"
        leftIcon={<TurnBackButton />}
        rightChildren={
          <Button variant="ghost" onPress={() => {}}>
            Tiếp
          </Button>
        }
        scrollA={scrollA}
      />

      <MainContentLayout child={<Content />} />
    </View>
  );
};

export default MenuScreen;