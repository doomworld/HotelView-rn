// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HotelView from './screens/HotelView';
import { colors } from './styles';

export default function App() {
	return (
		<ScrollView style={styles.container}>
			<HotelView />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBg,
	},
});
