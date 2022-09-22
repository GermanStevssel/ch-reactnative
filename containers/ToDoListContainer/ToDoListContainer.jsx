import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import { colors, sizes } from "../../constants";

const ToDoListContainer = ({ style, tasks, handleModal, ...props }) => {
	const renderItem = ({ item }) => (
		<ListItem item={item} style={styles} handleModal={handleModal} />
	);

	return (
		<View>
			{tasks.length > 0 ? (
				<FlatList
					style={styles.itemList}
					data={tasks}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			) : (
				<View style={styles.textPendingTasksContainer}>
					<Text style={styles.textPendingTasks}>No hay tareas pendientes</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	itemList: {
		marginVertical: sizes.regular,
		marginHorizontal: sizes.regular,
	},
	textPendingTasksContainer: {
		height: "75%",
		justifyContent: "center",
		alignItems: "center",
	},
	textPendingTasks: {
		fontFamily: "Quicksand-Light",
		fontSize: sizes.small,
		color: colors.gray,
	},
});

export default ToDoListContainer;
