import { StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import {FontAwesome , FontAwesome5 , MaterialCommunityIcons , Feather} from '@expo/vector-icons/';
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { Link, Tabs } from "expo-router";


export default function BookRide() {
  // interface RadioButtonProps {
  //   label: string;
  //   onPress: () => void;
  // }
  const [destinationVal, setDestiVal] = useState<string | undefined>(undefined);
  // const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  
  const getLocName = () => {
    // alert(destinationVal)
  };

  
  // const RadioButton: React.FC<RadioButtonProps> = ({ label, onPress }) => (
  //   <TouchableOpacity onPress={onPress} style={selectedOption === label ? styles.radioSelected : styles.radioTile}>
  //     <Text>
  //     {selectedOption === label ? <View style={styles.radioIconCheck}> <Feather name="check" size={14} color="white" style={{padding: 3}} />  </View> : <View style={styles.radioIconUnCheck}> <Feather name="check" size={14} color="white" style={{padding: 3}} />  </View>  }
  //     </Text>
  //     <FontAwesome5 name={label} size={20} color="black" style={{marginTop: 10}}  /> 
  //     <Text style={styles.radioLabel}>{label}</Text>
  //   </TouchableOpacity>
  // );
  return (
    <>
    <View style={styles.containerBottom}>
      <View style={styles.innerContainerBtm}>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20 , marginBottom: 10 }}>
          Choose Destination
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 2,
              fontFamily: 'Poppins',
              borderColor: '#ddd',
              borderRadius: 5,
              width: '100%',
              paddingLeft: 60,
              fontSize: 16,
              paddingVertical: 10,
            }}
            onChangeText={(val: string) => setDestiVal(val)}
          />
          <FontAwesome5 name="map-marked-alt" style={{ position: 'absolute', left: 20 }} size={20} color="black" />
        </View>
        <Pressable onPress={getLocName} style={{ backgroundColor: '#000', width: '100%', borderRadius: 10, marginTop: 10 }}>
          <Text style={{ color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16, paddingVertical: 5, textAlign: 'center' }}>
            Search <FontAwesome5 name="search" size={18} color="white" />
          </Text>
        </Pressable>
        {/* <Pressable onPress={getLocName} style={{ backgroundColor: '#000', width: '100%', borderRadius: 10, marginTop: 10 }}> */}
        <Link href="/" asChild>
            <View style={{ backgroundColor: '#000', width: '100%', borderRadius: 10, marginTop: 10 }}>
              <Text style={{ color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 16, paddingVertical: 5, textAlign: 'center' }}>
                Choose My Current Location <FontAwesome5 name="map-marker-alt" size={18} color="white" />
              </Text>
            </View>
        </Link>
        {/* </Pressable> */}
        <Text style={{marginTop: 10}}>{destinationVal}</Text>
        <Text style={{marginTop: 40 , fontFamily: 'Poppins-Medium' , fontSize: 20}}>Select Vehicle</Text>
      <View style={styles.vehContainer}>
        {/* <RadioButton label="motorcycle" onPress={() => setSelectedOption("motorcycle")} />
        <RadioButton label="car" onPress={() => setSelectedOption("car")} />
        <RadioButton label="plane" onPress={() => setSelectedOption("plane")} /> */}
      </View>
      </View>

    </View>

    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    paddingTop: 10,
    flex: 1,
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
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  vehContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#eee',
  },
  radioTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '25%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b5bfd9',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    position: 'relative',
    marginHorizontal: 6,
    marginTop: 25,
  },
  radioSelected: {
    display: 'flex',
    width: '25%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2260ff',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    position: 'relative',
    marginHorizontal: 6,
    marginTop: 25,
  },
  radioIcon: {
    width: 25,
    height: 25,
    borderRadius: 50,
    padding: 2,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 0,
  },
  radioIconCheck: {
    borderRadius: 50,
    marginRight: 0,
    backgroundColor: '#2260ff',
  },
  radioIconUnCheck: {
    borderRadius: 50,
    marginRight: 0,
    backgroundColor: '#fff',
  },
  radioLabel: {
    fontFamily : 'Poppins-Medium',
    marginTop: 10,
    textTransform: 'capitalize',
    color: '#000',
    textAlign: 'center',
    fontSize: 14,

  },
});
