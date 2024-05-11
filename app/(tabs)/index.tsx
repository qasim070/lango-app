import { StyleSheet, Image, TextInput } from "react-native";
import { Link, Tabs } from "expo-router";
import { Text, View } from "@/components/Themed";
const car = require("../../assets/images/ride.png");
const food = require("../../assets/images/order-food.png");

export default function TabOneScreen() {
  
  
  return (
    <>
    <View style={styles.containerTop}>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 25 }}>
        My Uber App
      </Text>
      <View style={styles.main}>
        <Link href="/book-ride/" >
          <View style={styles.card}>
            <Image source={car} />
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
              Get A Ride
            </Text>
          </View>
        </Link>

        <Link href="/two" >
        <View style={styles.card}>
          <Image source={food} />
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            Order Food
          </Text>
        </View>
        </Link>
      </View>
    </View>





    </>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    paddingTop: 40,
    flex: 0.4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerBottom: {
    borderTopWidth: 5,
    borderTopColor: '#eee',
    paddingTop: 10,
    flex: 0.6,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  innerContainerBtm: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',
    paddingTop: 10,
    flex: 1,
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
    margin: 12,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#eee",
  },
  main: {
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
