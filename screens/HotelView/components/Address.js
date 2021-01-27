import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';

const Address = () => {
	return (
		<View style={styles.container}>
			<View style={{ backgroundColor: '#000' }}>
				<Image
					source={require('../../../assets/maps.jpg')}
					style={{ width: '100%', hight: '100', opacity: 0.4 }}
				/>
			</View>
			<View style={styles.addressContainer}>
				<Image
					source={require('../../../assets/location-pin.png')}
					style={{ width: 64, height: 64 }}
				/>
				<View style={{ marginLeft: 8, marginTop: 24 }}>
					<Text style={gs.sectionTitle}>Address</Text>
					<Text
						style={styles.address}
					>{`1529 Tylor Street, New York NY\n10011, United States`}</Text>
					<View style={{ marginTop: 16 }}>
						<TouchableOpacity style={styles.checkButton}>
							<Text style={gs.smallText}>Check it</Text>
							<Entypo
								name="chevron-right"
								size={12}
								color="#fff"
								style={{ marginLeft: 4 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Address;

const styles = StyleSheet.create({
	addressContainer: {
		...gs.absoluteFull,
		flexDirection: 'row',
		paddingHorizontal: 32,
		paddingVertical: 16,
	},
	address: {
		...gs.smallText,
		color: colors.darkHl,
		marginTop: 6,
		letterSpacing: 1,
		lineHeight: 20,
	},
	checkButton: {
		...gs.button,
		paddingVertical: 8,
		paddingHorizontal: 16,
		alignSelf: 'flex-start',
		flexDirection: 'row',
	},
});
