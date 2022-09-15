import React from "react";
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	Animated,
	Image,
	View,
} from "react-native";
import check from "../../assets/icons/check.png";
import remove from "../../assets/icons/remove.png";

const ListCompletedItem = ({ item, handleModal, ...props }) => {
	return (
		<Animated.View key={`item-${item.id}`} style={styles.itemContainer}>
			<Text style={styles.item}>{item.value}</Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		opacity: 0.6,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
		marginHorizontal: 5,
		backgroundColor: "#FAFAFA",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 3,
	},
	item: {
		fontSize: 22,
		color: "#5258CB",
	},
	iconsContainer: {
		width: "20%",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	icons: {
		width: 30,
		height: 30,
	},
	delete: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#5258CB",
	},
});

export default ListCompletedItem;
