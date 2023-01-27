import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";

const DATA = [
  {
    title: "BULK",
    id: 1,
  },
  {
    title: "BULK",
    id: 2,
  },
];

const RenderList = ({ title }) => {
  return (
    <Pressable>
      <View style={styles.list}>
        <Text style={styles.item}>{title}</Text>
      </View>
    </Pressable>
  );
};
const BulkMessage = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <RenderList {...item} />}
      keyExtractor={(user) => user.id}
      style={styles.ul}
    />
  );
};

const styles = StyleSheet.create({
  ul: {
    backgroundColor: "white",
  },
  list: {
    padding: 30,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
  },
  item: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default BulkMessage;
