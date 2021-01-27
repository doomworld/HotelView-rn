import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { gs } from '../../../styles';

const Header = () => {
	return (
		<View>
			<Image
				source={require('../../../assets/hotel.jpg')}
				style={{ width: '100%', height: 400, opacity: 0.7 }}
			/>
			<View style={styles.topButtons}>
				<TouchableOpacity>
					<AntDesign name="close" size={24} color="#fff" />
				</TouchableOpacity>
				<View style={gs.rowCenter}>
					<TouchableOpacity>
						<AntDesign name="save" size={24} style={styles.topButtonRight} />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign
							name="sharealt"
							size={24}
							style={styles.topButtonRight}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Entypo
							name="dots-three-vertical"
							size={18}
							style={styles.topButtonRight}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	topButtons: {
		...gs.rowBetween,
		position: 'absolute',
		top: 32,
		left: 16,
		right: 16,
	},
	topButtonRight: {
		marginLeft: 12,
		color: '#fff',
	},
});
