import React from "react";
import { Text, StyleSheet, Animated } from "react-native";
import { colors, sizes } from "../../constants";

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
		backgroundColor: colors.textLigth,
		paddingHorizontal: sizes.xs,
		paddingVertical: sizes.regular,
		borderRadius: sizes.xs,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 3,
	},
	item: {
		fontSize: sizes.regular,
		color: colors.primary,
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
		fontSize: sizes.regular,
		fontWeight: "bold",
		color: colors.primary,
	},
});

export default ListCompletedItem;
