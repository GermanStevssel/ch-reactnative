import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
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

const InputTask = ({ task, handleChangeText, addTask }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="New task..."
				selectionColor="#60e1e0"
				value={task}
				onChangeText={handleChangeText}
			/>
			<Button title="Add" onPress={addTask} color="#5258CB" />
		</View>
	);
};

export default InputTask;
