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

        //L1P3 begin

        if (snapshot.child("level1").child("3").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("3")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P3");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("3")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("3").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("3").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P3!");
        }

        //L1P3 end

        //L1P4 begin

        if (snapshot.child("level1").child("4").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("4")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P4");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("4")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("4").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("4").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P4!");
        }

        //L1P4 end

        //L1P5 begin

        if (snapshot.child("level1").child("5").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("5")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P5");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("5")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("5").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("5").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P5!");
        }

        //L1P5 end

        //L1P6 begin

        if (snapshot.child("level1").child("6").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level1")
              .child("6")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L1P6");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level1")
              .child("6")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level1").child("6").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level1").child("6").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L1P6!");
        }

        //L1P6 end

        //L2P1 begin

        if (snapshot.child("level2").child("1").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("1")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P1");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("1")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("1").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("1").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P1!");
        }

        //L2P1 end

        //L2P2 begin

        if (snapshot.child("level2").child("2").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("2")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P2");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("2")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("2").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("2").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P2!");
        }

        //L2P2 end

        //L2P3 begin

        if (snapshot.child("level2").child("3").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("3")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P3");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("3")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("3").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("3").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P3!");
        }

        //L2P3 end

        //L2P4 begin

        if (snapshot.child("level2").child("4").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("4")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P4");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("4")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("4").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("4").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P4!");
        }

        //L2P4 end

        //L2P5 begin

        if (snapshot.child("level2").child("5").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("5")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P5");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("5")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("5").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("5").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P5!");
        }

        //L2P5 end

        //L2P6 begin

        if (snapshot.child("level2").child("6").hasChild("tower") === true) {
          if (
            snapshot
              .child("refresh")
              .child("level2")
              .child("6")
              .hasChild("restarted") === true
          ) {
            console.log("Already Restarted at L2P6");
          } else {
            firebase
              .database()
              .ref("zen")
              .child("refresh")
              .child("level2")
              .child("6")
              .update({
                restarted: 1,
              });
            Restart();
          }

          if (snapshot.child("level2").child("6").hasChild("wifi") === true) {
            console.log("Wifi value already exists!");
          } else {
            setTimeout(() => {
              firebase.database().ref("zen").child("level2").child("6").update({
                wifi: wifi,
              });
            }, 1500);
          }
        } else {
          console.log("No tower values detected at L2P6!");
        }

        //L2P6 end
      });
  }, 5000);

  NetInfo.fetch().then((state) => {
    setWifi(state.details.strength);
  });

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
