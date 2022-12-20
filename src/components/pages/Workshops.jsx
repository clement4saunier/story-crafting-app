import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Workshop from "../elements/workshop/Workshop";
import Page from "./Page";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/NextStepButton";
import Title from "../elements/layout/Title";
import Avatar from "../elements/avatar/Avatar";

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Workshop name={item} />
    </View>
  );
}

export default function Workshops() {
  const [debugCount, setDebugCount] = useState(3);

  function onAddButton() {
    setDebugCount((d) => d + 1);
  }

  return (
    <Page title="Workshops">
      <Title text="Information about StoryCrafting"><View>i</View></Title>
      <FlatList
        style={styles.workshopGrid}
        numColumns={2}
        data={[...Array(debugCount)].map((_, i) => "#" + i)}
        renderItem={Item}
      />
      <MainButton title="Add" onPress={onAddButton}/>
    </Page>
  );
}

const styles = StyleSheet.create({
  workshopGrid: {
    width: "100%"
  },
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: theme.spacing.s
  }
});
