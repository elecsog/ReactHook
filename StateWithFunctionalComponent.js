import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, SetIson] = useState(false);
  const [name, SetName] = useState("");

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>=============</Text>
      <Switch
        value={isOn}
        onValueChange={ v=> {
            SetIson(v);
        }}
        />
        <Text> =============</Text>
        <TextInput>
            value = {name}
            onValueChange = { v=>{
                console.log('v', v);
                SetName(v);
            }}
            
        </TextInput>

    </View>
  );
};

export default Component;