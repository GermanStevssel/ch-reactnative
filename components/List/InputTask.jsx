import React from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { colors, sizes } from "../../constants";

const InputTask = ({ task, handleChangeText, addTask }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="New task..."
				selectionColor={colors.secondary}
				value={task}
				onChangeText={handleChangeText}
			/>

			<TouchableOpacity
				style={styles.addButton}
				onPress={addTask}
				color={colors.textLigth}
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
		marginTop: sizes.regular,
		marginBottom: sizes.regular,
		marginHorizontal: sizes.regular,
	},
	input: {
		width: "80%",
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		height: 40,
		color: colors.gray,
	},
	addButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		borderRadius: 30,
		width: 50,
		height: 50,
	},
	text: {
		fontSize: sizes.regular,
		fontFamily: "Quicksand-Bold",
		color: colors.textLigth,
	},
});

export default InputTask;
