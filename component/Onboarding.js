/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import slides from '../slides';
import OnboardingItem from './OnboardingItem';



const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
       data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Onboarding;

