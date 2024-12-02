import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StatComponent from './StatComponent';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 30,
        minWidth: 250,
        minHeight: 275,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
          alignSelf: 'stretch',
        }}
      >
        <Image
          source={{
            uri: 'https://avatar.iran.liara.run/public/8',
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          Pippi Longstocking
        </Text>
        <Text
          style={{
            color: 'gray',
          }}
        >
          Sweden
        </Text>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: StyleSheet.hairlineWidth,
            height: 1,
            width: '100%',
            marginHorizontal: 10,
            marginTop: 30,
          }}
        />
      </View>
      <View style={{ alignSelf: 'stretch', alignItems: 'center', gap: 5, flexDirection: 'row', justifyContent: 'center', marginBottom: -10 }}>
        <StatComponent number={'80K'} label="Followers" />
        <StatComponent number={'803K'} label="Likes" />
        <StatComponent number={'1.4K'} label="Photos" />
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({});
