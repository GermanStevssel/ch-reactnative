// import React from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";
// import ListCompletedItem from "../../components/ListCompletedItem";
// import { sizes } from "../../constants";

// const CompletedListContainer = ({ style, tasks, handleModal, ...props }) => {
// 	const renderItem = ({ item }) => (
// 		<ListCompletedItem item={item} style={styles} handleModal={handleModal} />
// 	);

// 	return (
// 		<View>
// 			<Text style={styles.title}>Tareas Finalizadas</Text>
// 			<FlatList
// 				style={styles.itemList}
// 				data={tasks}
// 				renderItem={renderItem}
// 				keyExtractor={(item) => item.id.toString()}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	itemList: {
// 		marginVertical: sizes.regular,
// 		marginHorizontal: sizes.regular,
// 	},
// 	title: {
// 		fontSize: sizes.regular,
// 		marginLeft: sizes.large,
// 		marginTop: sizes.xs,
// 	},
// });

// export default CompletedListContainer;

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListCompletedItem from "../../components/ListCompletedItem";
import { colors, sizes } from "../../constants";

const CompletedListContainer = ({ style, tasks, handleModal, ...props }) => {
	const renderItem = ({ item }) => (
		<ListCompletedItem item={item} style={styles} handleModal={handleModal} />
	);

	return (
		<View>
			<View style={styles.containerCompletedTitle}>
				<Text style={styles.title}>Tareas Completas</Text>
			</View>
			{tasks.length > 0 ? (
				<FlatList
					style={styles.itemList}
					data={tasks}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			) : (
				<View style={styles.textCompletedTasksContainer}>
					<Text style={styles.textCompletedTasks}>No hay tareas completas</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	containerCompletedTitle: {
		alignItems: "center",
	},
	textCompletedTasksContainer: {
		height: "80%",
		justifyContent: "center",
		alignItems: "center",
	},
	textCompletedTasks: {
		fontFamily: "Quicksand-Light",
		fontSize: sizes.small,
		color: colors.gray,
	},
	itemList: {
		marginVertical: sizes.regular,
		marginHorizontal: sizes.regular,
	},
	title: {
		fontSize: sizes.regular,
		fontFamily: "Quicksand-Regular",
		marginTop: sizes.xs,
	},
});

export default CompletedListContainer;
