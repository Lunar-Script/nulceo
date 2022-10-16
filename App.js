import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";
import Advanced from "./screens/Advanced";
import firebase from "firebase";
import { useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { Restart } from "fiction-expo-restart";

export default function App() {
  const [level1p1, setLevel1p1] = useState(false);
  const [level1p2, setLevel1p2] = useState(false);
  const [level1p3, setLevel1p3] = useState(false);
  const [level1p4, setLevel1p4] = useState(false);
  const [level1p5, setLevel1p5] = useState(false);
  const [level1p6, setLevel1p6] = useState(false);

  //wifi states of the levels

  const [level1p1w, setLevel1p1w] = useState(false);
  const [level1p2w, setLevel1p2w] = useState(false);
  const [level1p3w, setLevel1p3w] = useState(false);
  const [level1p4w, setLevel1p4w] = useState(false);
  const [level1p5w, setLevel1p5w] = useState(false);
  const [level1p6w, setLevel1p6w] = useState(false);

  //RESTART STATES OF EACH POSITIONS OF LEVELS
  const [level1p1res, setlevel1p1res] = useState(false);
  const [level1p2res, setlevel1p2res] = useState(false);
  const [level1p3res, setlevel1p3res] = useState(false);
  const [level1p4res, setlevel1p4res] = useState(false);
  const [level1p5res, setlevel1p5res] = useState(false);
  const [level1p6res, setlevel1p6res] = useState(false);

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

  function Resnow() {
    Restart();
  }

  //checking for updates in database every 2 seconds

  setInterval(() => {
    firebase
      .database()
      .ref("zen")
      .once("value", function (snapshot) {
        console.log(
          "Level 1 Tower | p1: ",
          snapshot.child("level1").child("1").hasChild("tower")
        );
        console.log(
          "Level 1 Tower | p2: ",
          snapshot.child("level1").child("2").hasChild("tower")
        );
        console.log(
          "Level 1 Tower | p3: ",
          snapshot.child("level1").child("3").hasChild("tower")
        );
        console.log(
          "Level 1 Tower | p4: ",
          snapshot.child("level1").child("4").hasChild("tower")
        );
        console.log(
          "Level 1 Tower | p5: ",
          snapshot.child("level1").child("5").hasChild("tower")
        );
        console.log(
          "Level 1 Tower | p6: ",
          snapshot.child("level1").child("6").hasChild("tower")
        );

        console.log(
          "Level 1 wifi | p1: ",
          snapshot.child("level1").child("1").hasChild("wifi")
        );
        console.log(
          "Level 1 wifi | p2: ",
          snapshot.child("level1").child("2").hasChild("wifi")
        );
        console.log(
          "Level 1 wifi | p3: ",
          snapshot.child("level1").child("3").hasChild("wifi")
        );
        console.log(
          "Level 1 wifi | p4: ",
          snapshot.child("level1").child("4").hasChild("wifi")
        );
        console.log(
          "Level 1 wifi | p5: ",
          snapshot.child("level1").child("5").hasChild("wifi")
        );
        console.log(
          "Level 1 wifi | p6: ",
          snapshot.child("level1").child("6").hasChild("wifi")
        );

        // CHECIKING AND UPDATING THE WIFI VALUES ACCORDING TO TOWER VALUES

        //L1P1 begin
        if (snapshot.child("level1").child("1").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("1")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P1");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("1")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("1").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("1").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P1!");
        }

        // L1P1 end

        //L2P2 begin

        if (snapshot.child("level1").child("2").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("2")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P2");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("2")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("2").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("2").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P2!");
        }

        //L1P2 end
      });
  }, 5000);

  NetInfo.fetch().then((state) => {
    setWifi(state.details.strength);

    console.log(wifi);
  });

  // if (firebase.database().ref("zen").on === true) {
  //   if (level1p1w === true) {
  //     console.log("Wifi value already exists!");
  //   } else {
  //     firebase.database().ref("zen").child("level1").child("1").update({
  //       wifi: wifi,
  //     });
  //   }
  // } else {
  //   console.log("no tower value detected");
  // }

  // if (level1p2 === true) {
  //   firebase.database().ref("zen").child("level1").child("2").update({
  //     wifi: wifi,
  //   });
  // } else {
  //   console.log("no tower value detected");
  // }

  // if (level1p3 === true) {
  //   firebase.database().ref("zen").child("level1").child("3").update({
  //     wifi: wifi,
  //   });
  // } else {
  //   console.log("no tower value detected");
  // }
  // if (level1p4 === true) {
  //   firebase.database().ref("zen").child("level1").child("4").update({
  //     wifi: wifi,
  //   });
  // } else {
  //   console.log("no tower value detected");
  // }
  // if (level1p5 === true) {
  //   firebase.database().ref("zen").child("level1").child("5").update({
  //     wifi: wifi,
  //   });
  // } else {
  //   console.log("no tower value detected");
  // }
  // if (level1p6 === true) {
  //   firebase.database().ref("zen").child("level1").child("6").update({
  //     wifi: wifi,
  //   });
  // } else {
  //   console.log("no tower value detected");
  // }

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
