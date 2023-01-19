import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Constants from "expo-constants";

const USER = [
  {
    id: 1,
    name: "User 1",
    title: "Frontend Developer",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 2,
    name: "User 2",
    title: "Admin",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 3,
    name: "User 3",
    title: "Backend Developer",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 4,
    name: "User 4",
    title: "IT",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 5,
    name: "User 5",
    title: "QA",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 6,
    name: "User 6",
    title: "Manual Tester",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
  {
    id: 7,
    name: "User 7",
    title: "Test Frontend Developer",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
  },
];

export const DashBoardHeader = ({ route, options, navigation }) => {
  const title = getHeaderTitle(options, route?.params?.name);

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <Text style={styles.title}>Hi {title}</Text>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.header}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
          }}
        />
      </Pressable>
    </View>
  );
};

const Search = ({ searchInp, setSearchInp }) => {
  return (
    <View>
      <TextInput
        value={searchInp}
        style={styles.input}
        placeholder="Search..."
        onChangeText={setSearchInp}
        autoFocus
      />
    </View>
  );
};

const RenderUserList = ({ id, name, title, img }) => {
  return (
    <View style={styles.userList}>
      <Image style={styles.userImg} source={{ uri: img }} />
      <View style={styles.user}>
        <Text>{name}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const UserList = ({ user }) => {
  return (
    <FlatList
      data={user}
      renderItem={({ item }) => <RenderUserList {...item} />}
      keyExtractor={(user) => user.id}
    />
  );
};

const DashBoard = ({ navigation, route }) => {
  const [searchInp, setSearchInp] = useState("");
  const [userList, setUserList] = useState(...USER);

  useEffect(() => {
    const updatedUser = USER.filter((user) =>
      user.title.toLowerCase().includes(searchInp)
    );
    setUserList(updatedUser);
  }, [searchInp]);
  return (
    <View style={styles.container}>
      <Search searchInp={searchInp} setSearchInp={setSearchInp} />
      <UserList user={userList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  userList: {
    backgroundColor: "lightblue",
    margin: 10,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    height: 75,
    alignItems: "center",
    paddingLeft: 10,
  },
  user: {
    paddingLeft: 20,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 15,
    paddingLeft: 10,
  },
  header: {
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 10,
  },
  title: {
    display: "flex",
    alignSelf: "center",
    fontSize: 15,
    color: "purple",
    marginLeft: 10,
  },
});

export default DashBoard;
