<<<<<<< HEAD
import React from 'react';
import { View, TextInput,Text } from 'react-native';

export const customTextField = ({ label, type, passwordField, meta: { touched, error }, input: { value, onChange } }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				style={{ borderWidth: 1, marginBottom: 10, width: 280, height: 40 }}
				onChangeText={(value) => onChange(value)}
				keyboardType={type}
				secureTextEntry={passwordField}
				value={value}
			/>
			{touched && (error && <Text style={{ color: 'red' }}>{error}</Text>)}
		</View>
	);
=======
import React from "react";
import { View, TextInput } from "react-native";

const customTextField = ({
  label,
  type,
  passwordField,
  meta: { touched, error },
  input: { value, onChange }
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, width: 280, height: 40 }}
        onChangeText={value => onChange(value)}
        keyboardType={type}
        secureTextEntry={passwordField}
        value={value}
      />
      {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
    </View>
  );
>>>>>>> 1c31e481f0c1640fd219712cc4317136dd5dee0b
};


