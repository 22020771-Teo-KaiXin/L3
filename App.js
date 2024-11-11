import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

//Custom components
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = ()=> {
    // let username = "";
    // let pw = "";
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [type, setType] = useState('');

  return (
      <View style={{padding:20, paddingTop: 50}}>
          {/*EXERCISE 1B*/}
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                { label: 'Admin', value: 'Admin' },
                { label: 'Guest', value: 'Guest' }
              ]}
          />

          {/*/!*State*!/*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}

          {/*<TouchableOpacity onPress={()=>ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<Text>{pw}</Text>*/}

          {/*Getting Text input values*/}
          {/*<Text>Username:</Text>*/}

          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => username = text}/>*/}

          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => pw = text}/>*/}

          {/*<TouchableOpacity onPress={() => ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1G*/}
          <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>

          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

          <TouchableOpacity onPress={() =>
              ToastAndroid.show('Welcome' + ' ' + type + ' ' + name, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>

          {/*<Text>{pw}</Text>*/}

          {/*/!*EXERCISE 1A*!/*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}} />*/}

          {/*/!*EXERCISE 1C & 1D*!/*/}
          {/*<Button*/}
          {/*    title="LOG IN"*/}
          {/*    onPress={() => Alert.alert("Welcome!")}*/}
          {/*/>*/}

          {/*/!*EXERCISE 1E*!/*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => Alert.alert("Welcome!")}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*/!*EXERCISE 1F*!/*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => ToastAndroid.show("Welcome!", ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN 2</Text>*/}
          {/*</TouchableOpacity>*/}

      </View>
  );
};

export default MyApp;
