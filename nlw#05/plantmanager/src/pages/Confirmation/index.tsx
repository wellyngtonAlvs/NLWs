import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { Button } from "../../components/Button";

import { styles } from "./styles";

interface Params {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😄",
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subTitle, buttonTitle, icon, nextScreen } =
    routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subTitle}</Text>

        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}
