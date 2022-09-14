import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../../components/ListItem/ListItem";

const styles = StyleSheet.create({
	itemList: {
		flex: 1,
		marginVertical: 20,
		marginHorizontal: 20,
	},
});

const ListContainer = ({ style, tasks, handleModal, ...props }) => {
	const renderItem = ({ item, handleModal }) => (
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

export default ListContainer;
