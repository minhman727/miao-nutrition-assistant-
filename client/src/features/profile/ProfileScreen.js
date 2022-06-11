import { Animated } from "react-native";
import { BottomProfileScreen } from "./BottomProfileScreen";
import Colors from "./../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TOP_BANNER_HEIGHT } from "../../constants/sizes";
import { TopProfileScreen } from "./TopProfileScreen";
import { UserState$ } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const { data, isLoading } = useSelector(UserState$);
  var heightBox = TOP_BANNER_HEIGHT / 2;
  const topAppBar = {
    title: "Cá nhân",
    backgroundColor: "primary.500",
    leftIcon: (
      <Icon
        size="sm"
        as={MaterialCommunityIcons}
        name="menu"
        onPress={() => {}}
      />
    ),
    rightChildren: <Icon size="sm" as={MaterialCommunityIcons} name="pencil" />,
  };
  return !isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={
          <TopProfileScreen heightBox={heightBox} name={data.username} />
        }
        children={<BottomProfileScreen />}
        backgroundColor={Colors.background}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default ProfileScreen;