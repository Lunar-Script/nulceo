import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import back2 from "../images/img2.png";

import { Button, List } from "react-native-paper";
import firebase from "firebase";

const Advanced = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const config = {
    databaseURL: "https://dnet-eaf5e-default-rtdb.firebaseio.com/",
    projectId: "dnet-eaf5e",
  };

  //connecting to the firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const [l1p1, setl1p1] = useState("");
  const [l1p2, setl1p2] = useState("");
  const [l1p3, setl1p3] = useState("");
  const [l1p4, setl1p4] = useState("");
  const [l1p5, setl1p5] = useState("");
  const [l1p6, setl1p6] = useState("");
  const [l2p1, setl2p1] = useState("");
  const [l2p2, setl2p2] = useState("");
  const [l2p3, setl2p3] = useState("");
  const [l2p4, setl2p4] = useState("");
  const [l2p5, setl2p5] = useState("");
  const [l2p6, setl2p6] = useState("");

  const [l1p1w, setl1p1w] = useState("");
  const [l1p2w, setl1p2w] = useState("");
  const [l1p3w, setl1p3w] = useState("");
  const [l1p4w, setl1p4w] = useState("");
  const [l1p5w, setl1p5w] = useState("");
  const [l1p6w, setl1p6w] = useState("");
  const [l2p1w, setl2p1w] = useState("");
  const [l2p2w, setl2p2w] = useState("");
  const [l2p3w, setl2p3w] = useState("");
  const [l2p4w, setl2p4w] = useState("");
  const [l2p5w, setl2p5w] = useState("");
  const [l2p6w, setl2p6w] = useState("");

  firebase
    .database()
    .ref("zen")
    .once("value", function (snapshot) {
      setl1p1(snapshot.child("level1").child("1").child("tower").val());
      setl1p2(snapshot.child("level1").child("2").child("tower").val());
      setl1p3(snapshot.child("level1").child("3").child("tower").val());
      setl1p4(snapshot.child("level1").child("4").child("tower").val());
      setl1p5(snapshot.child("level1").child("5").child("tower").val());
      setl1p6(snapshot.child("level1").child("6").child("tower").val());
      setl2p1(snapshot.child("level2").child("1").child("tower").val());
      setl2p2(snapshot.child("level2").child("2").child("tower").val());
      setl2p3(snapshot.child("level2").child("3").child("tower").val());
      setl2p4(snapshot.child("level2").child("4").child("tower").val());
      setl2p5(snapshot.child("level2").child("5").child("tower").val());
      setl2p6(snapshot.child("level2").child("6").child("tower").val());

      setl1p1w(snapshot.child("level1").child("1").child("wifi").val());
      setl1p2w(snapshot.child("level1").child("2").child("wifi").val());
      setl1p3w(snapshot.child("level1").child("3").child("wifi").val());
      setl1p4w(snapshot.child("level1").child("4").child("wifi").val());
      setl1p5w(snapshot.child("level1").child("5").child("wifi").val());
      setl1p6w(snapshot.child("level1").child("6").child("wifi").val());
      setl2p1w(snapshot.child("level2").child("1").child("wifi").val());
      setl2p2w(snapshot.child("level2").child("2").child("wifi").val());
      setl2p3w(snapshot.child("level2").child("3").child("wifi").val());
      setl2p4w(snapshot.child("level2").child("4").child("wifi").val());
      setl2p5w(snapshot.child("level2").child("5").child("wifi").val());
      setl2p6w(snapshot.child("level2").child("6").child("wifi").val());
    });

  function reset() {
    firebase.database().ref("zen").remove();
  }

  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={back2}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 40,
            marginTop: 80,
            color: "#FFF",
            fontWeight: "600",
            textAlign: "center",
            width: "100%",
          }}
        >
          {" "}
          Advanced Settings{" "}
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 15,
            marginTop: 140,
            color: "#FFF",

            textAlign: "center",
            width: "100%",
          }}
        >
          Track the status of your UAV connection
        </Text>
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            marginTop: 180,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            mode="contained"
            icon="delete"
            color="#E74C3C"
            onPress={() => reset()}
          >
            Delete Session!
          </Button>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 240,
            flex: 1,
          }}
        >
          <ScrollView>
            <List.Section
              style={{
                marginLeft: 40,
                marginRight: 40,
                backgroundColor: "#fff",
              }}
            >
              <List.Accordion
                title="Level 1 - Position 1"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p1}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p1w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 1 - Position 2"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p2}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p2w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 1 - Position 3"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p3}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p3w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 1 - Position 4"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p4}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p4w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 1 - Position 5"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p5}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p5w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 1 - Position 6"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l1p6}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l1p6w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              {/* Level 2 */}

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 1"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p1}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p1w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 2"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p2}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p2w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 3"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p3}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p3w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 4"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p4}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p4w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 5"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p5}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p5w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Level 2 - Position 6"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item
                  title={
                    <>
                      <Text>Tower Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> -{l2p6}dBm </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>Wi-Fi Signal Strength: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> {l2p6w}% </Text>
                    </>
                  }
                />
                <List.Item
                  title={
                    <>
                      <Text>GPS Coordinates: </Text>{" "}
                      <Text style={{ fontWeight: "bold" }}> Not Assigned!</Text>
                    </>
                  }
                />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Advanced;
