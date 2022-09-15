import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListCompletedItem from "../../components/ListCompletedItem";

const CompletedListContainer = ({ style, tasks, handleModal, ...props }) => {
	const renderItem = ({ item }) => (
		<ListCompletedItem item={item} style={styles} handleModal={handleModal} />
	);

	return (
		<View>
			<Text style={styles.title}>Tareas Finalizadas</Text>
			<FlatList
				style={styles.itemList}
				data={tasks}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	itemList: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
	title: {
		fontSize: 20,
		marginLeft: 25,
		marginTop: 10,
	},
});

export default CompletedListContainer;
