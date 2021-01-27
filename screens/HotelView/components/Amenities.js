import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';

const Amenities = () => {
	return (
		<View style={gs.sectionContainer}>
			<Text style={gs.sectionTitle}>Amenities</Text>
			<View style={styles.amenitiesContainer}>
				{/* AMENITY ONE */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<Feather name="wifi" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>WI-FI</Text>
				</View>
				{/* AMENITY TWO */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>Hotel Restaurant</Text>
				</View>
				{/* AMENITY THREE */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<FontAwesome5 name="swimmer" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>Swimming Pools</Text>
				</View>
				{/* AMENITY FOURTH */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<Entypo name="drink" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>Bar</Text>
				</View>
				{/* AMENITY FIVE */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<Ionicons name="ios-car" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>Parking Spot</Text>
				</View>
				{/* AMENITY SIX */}
				<View style={styles.amenityContainer}>
					<TouchableOpacity>
						<View style={styles.amenity}>
							<Feather name="speaker" size={24} color={colors.lightHl} />
						</View>
					</TouchableOpacity>
					<Text style={styles.amenityName}>Night Club</Text>
				</View>
			</View>
		</View>
	);
};

export default Amenities;

const styles = StyleSheet.create({
	amenitiesContainer: {
		...gs.rowBetween,
		marginTop: 16,
		marginHorizontal: 16,
		flexWrap: 'wrap',
	},
	amenityContainer: {
		alignItems: 'center',
		width: 95,
		marginVertical: 12,
	},
	amenity: {
		...gs.center,
		width: 48,
		height: 48,
		borderRadius: 48 / 2,
		backgroundColor: '#444',
	},
	amenityName: {
		color: colors.lightHl,
		fontSize: 12,
		fontWeight: '600',
		marginTop: 6,
		textAlign: 'center',
	},
});
