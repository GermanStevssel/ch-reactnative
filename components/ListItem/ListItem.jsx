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
import { colors, sizes } from "../../constants";

const ListItem = ({ item, handleModal, ...props }) => {
	return (
		<Animated.View key={`item-${item.id}`} style={styles.itemContainer}>
			<Text style={styles.item}>{item.value}</Text>
			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => handleModal(item.id, "check")}>
					<Image source={check} style={styles.icons} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleModal(item.id)}>
					<Image source={remove} style={styles.icons} />
				</TouchableOpacity>
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
		marginHorizontal: 5,
		backgroundColor: "#FAFAFA",
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
		fontSize: 22,
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
		fontSize: 22,
		fontFamily: "Quicksand-Bold",
		color: colors.primary,
	},
});

export default ListItem;
