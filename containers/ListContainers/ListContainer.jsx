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

const ListContainer = ({ style, tasks, ...props }) => {
	const handleModal = (id) => {
		setShowModal(!showModal);
		setSelectedTask(tasks.find((item) => item.id === id));
	};

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

export default ListContainer;
