import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";
import Advanced from "./screens/Advanced";
import firebase from "firebase";
import { useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const [level1p1, setLevel1p1] = useState(false);
  const [level1p2, setLevel1p2] = useState(false);
  const [level1p3, setLevel1p3] = useState(false);
  const [level1p4, setLevel1p4] = useState(false);
  const [level1p5, setLevel1p5] = useState(false);
  const [level1p6, setLevel1p6] = useState(false);
  const [wifi, setWifi] = useState();
  const Tab = createBottomTabNavigator();

  const config = {
    databaseURL: "https://dnet-eaf5e-default-rtdb.firebaseio.com/",
    projectId: "dnet-eaf5e",
  };

  //connecting to the firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //sending wifi values only if tower exists
  function pushwifilevel() {
    firebase
      .database()
      .ref("zen")
      .once("value", function (snapshot) {
        setLevel1p1(snapshot.child("level1").child("1").hasChild("tower"));
        setLevel1p2(snapshot.child("level1").child("2").hasChild("tower"));
        setLevel1p3(snapshot.child("level1").child("3").hasChild("tower"));
        setLevel1p4(snapshot.child("level1").child("4").hasChild("tower"));
        setLevel1p5(snapshot.child("level1").child("5").hasChild("tower"));
        setLevel1p6(snapshot.child("level1").child("6").hasChild("tower"));
      });
  }

  console.log("has tower value", level1p1);

  pushwifilevel();

  NetInfo.fetch().then((state) => {
    setWifi(state.details.strength);

    console.log(wifi);
  });

  if (level1p1 === true) {
    firebase.database().ref("zen").child("level1").child("1").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }
  if (level1p2 === true) {
    firebase.database().ref("zen").child("level1").child("2").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }

  if (level1p3 === true) {
    firebase.database().ref("zen").child("level1").child("3").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }
  if (level1p4 === true) {
    firebase.database().ref("zen").child("level1").child("4").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }
  if (level1p5 === true) {
    firebase.database().ref("zen").child("level1").child("5").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }
  if (level1p6 === true) {
    firebase.database().ref("zen").child("level1").child("6").update({
      wifi: wifi,
    });
  } else {
    console.log("no tower value detected");
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Advanced") {
              iconName = focused ? "cog" : "cog";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Advanced"
          component={Advanced}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
