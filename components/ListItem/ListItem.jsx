import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		marginVertical: 5,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
		backgroundColor: "#A1F1DD",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 10,
	},
	item: {
		fontSize: 22,
		color: "#5258CB",
	},
});

const ListItem = ({ item, ...props }) => {
	const { handleModal } = props;
	console.warn("item: ", item);
	return (
		<View key={`item-${item.id}`} style={styles.itemContainer}>
			<Text style={styles.item}>{item.value}</Text>
			<TouchableOpacity onPress={() => handleModal(item.id)}>
				<Text style={styles.delete}>X</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ListItem;
