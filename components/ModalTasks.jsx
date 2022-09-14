import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	modalContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		paddingVertical: 20,
	},
	modalMessageContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
	modalMessage: {
		fontSize: 14,
	},
	modalTitle: {
		fontSize: 16,
	},
	selectedTask: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "bold",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginHorizontal: 20,
	},
	button: {
		backgroundColor: "#4A306D",
		padding: 10,
		borderRadius: 10,
	},
});

const ModalTasks = ({ showModal, selectedTask }) => {
	return (
		<Modal animationType="slide" visible={showModal}>
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>Detalle de la lista</Text>
			</View>
			<View style={styles.modalMessageContainer}>
				<Text style={styles.modalMessage}>
					¿Estas seguro de que quieres eliminar?
				</Text>
			</View>
			<View style={styles.modalMessageContainer}>
				<Text style={styles.selectedTask}>{selectedTask?.value}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					title="Eliminar"
					onPress={() => handleDelete(selectedTask?.id)}
					color="#4A306D"
				/>
				<Button
					title="Cancelar"
					onPress={() => setShowModal(!showModal)}
					color="#cccccc"
				/>
			</View>
		</Modal>
	);
};

export default ModalTasks;
