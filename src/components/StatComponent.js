import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StatComponent = ({ number, label }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        gap: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
        }}
      >
        {number}
      </Text>
      <Text
        style={{
          color: 'gray',
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default StatComponent;
