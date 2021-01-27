import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gs, colors } from '../../../styles';

const hotel = {
	name: 'Mt. Catlin Hotel',
	price: '$967',
	location: 'New York',
	about:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium aspernatur? Labore, molestiae.',
};

const About = () => {
	return (
		<View style={styles.container}>
			<Text style={gs.title}>{hotel.name}</Text>
			<Text style={styles.info}>
				{hotel.price} &#8226; {hotel.location}
			</Text>
			<View style={gs.divider} />
			<Text style={gs.sectionTitle}>About {hotel.name}</Text>
			<Text style={styles.about}>{hotel.about}</Text>
		</View>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		...gs.sectionContainer,
		backgroundColor: colors.darkBg,
	},
	info: {
		color: colors.textSec,
		fontWeight: '800',
		marginTop: 4,
	},
	about: {
		fontSize: 13,
		fontWeight: '600',
		color: colors.textSec,
		marginTop: 6,
		lineHeight: 20,
	},
});
