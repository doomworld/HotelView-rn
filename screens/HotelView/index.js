import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Amenities from './components/Amenities';
import Address from './components/Address';
import Extras from './components/Extras';
import { colors } from '../../styles';

const index = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Header />
			<View style={{ zIndex: 1 }}>
				<Bookmark />
				<About />
				<Stats />
				<Amenities />
				<Address />
				<Extras />
			</View>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBg,
	},
});
