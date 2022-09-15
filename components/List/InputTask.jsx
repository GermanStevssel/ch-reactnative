import React from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

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

			<TouchableOpacity
				style={styles.addButton}
				onPress={addTask}
				color="#FAFAFA"
			>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
	},
	input: {
		width: "80%",
		borderBottomColor: "#5258CB",
		borderBottomWidth: 1,
		height: 40,
		color: "#212121",
	},
	addButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5258CB",
		borderRadius: 30,
		width: 50,
		height: 50,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#FAFAFA",
	},
});

export default InputTask;
