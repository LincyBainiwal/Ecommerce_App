import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

const InputField = ({ label, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) => {
  return (
    <View style={styles.inputContainer}>
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          style={styles.input}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.input}
        />
      )}
      {fieldButtonLabel && fieldButtonFunction && (
        <TouchableOpacity onPress={fieldButtonFunction} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#6C6A6A',
    borderRadius: 5,
    borderWidth: 1,
    padding: 12,
    marginTop: 20,
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  buttonText: {
    color: '#000000',
    fontWeight: '100',
  },
});
