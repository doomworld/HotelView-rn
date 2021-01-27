import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';

const Bookmark = () => {
	// const [fill, setFill] = useState(false);
	return (
		<View style={styles.bookmark}>
			<TouchableOpacity>
				<Feather
					// onPress={() => setFill(!fill)}
					name="bookmark"
					size={24}
					color={colors.pink}
					// style={{ backgroundColor: fill ? '#fff' : '#fff' }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Bookmark;

const styles = StyleSheet.create({
	bookmark: {
		...gs.center,
		position: 'absolute',
		width: 56,
		height: 56,
		right: 32,
		top: -56 / 2,
		backgroundColor: colors.text,
		borderRadius: 56 / 2,
		zIndex: 10,
	},
});
