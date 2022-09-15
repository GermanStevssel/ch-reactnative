import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../../components/ListItem/ListItem";

const ListContainer = ({ style, tasks, handleModal, ...props }) => {
	const renderItem = ({ item }) => (
		<ListItem item={item} style={styles} handleModal={handleModal} />
	);

	return (
		<FlatList
			style={styles.itemList}
			data={tasks}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

const styles = StyleSheet.create({
	itemList: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
});

export default ListContainer;
