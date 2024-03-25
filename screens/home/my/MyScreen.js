import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>MyScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
