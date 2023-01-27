import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

const DATA = [
  {
    title: "Direct Message",
    id: 1,
    component: "DirectMessage",
  },
  {
    title: "Bulk Message",
    id: 2,
    component: "BulkMessage",
  },
  {
    title: "Message History",
    id: 3,
  },
];

const RenderList = ({ title, id, component, navigation }) => {
  return (
    <Pressable
      key={id}
      onPress={(e) => navigation.navigate('Comm',{screen: component})}
      style={styles.list}
    >
      <Text style={styles.item}>{title}</Text>
    </Pressable>
  );
};
const Communication = ({ navigation }) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <RenderList navigation={navigation} {...item} />
      )}
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

export default Communication;
