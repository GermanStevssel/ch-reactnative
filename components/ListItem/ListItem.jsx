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
	delete: {
		fontSize: 22,
		fontWeight: "bold",
		color: "white",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 50,
		marginBottom: 20,
		marginHorizontal: 20,
	},
	input: {
		width: "75%",
		borderBottomColor: "#5258CB",
		borderBottomWidth: 1,
		height: 40,
		color: "#212121",
	},
});

const ListItem = ({ item, handleModal, ...props }) => {
	console.warn(item.value);
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
