import React from "react";
import {
	Button,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const ModalTasks = ({
	showModal,
	selectedTask,
	handleComplete,
	handleDelete,
	setShowModal,
}) => {
	return (
		<Modal animationType="slide" visible={showModal.state}>
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>Detalle de la lista</Text>
			</View>
			<View style={styles.modalMessageContainer}>
				{showModal.action === "check" ? (
					<Text style={styles.modalMessage}>
						¿Estas seguro de que Terminaste la tarea?
					</Text>
				) : (
					<Text style={styles.modalMessage}>
						¿Estas seguro de que quieres eliminar la tarea?
					</Text>
				)}
			</View>
			<View style={styles.modalMessageContainer}>
				<Text style={styles.selectedTask}>{selectedTask?.value}</Text>
			</View>
			<View style={styles.buttonContainer}>
				{showModal.action === "check" ? (
					<TouchableOpacity
						onPress={() =>
							handleComplete(selectedTask?.id, selectedTask?.value)
						}
						style={styles.completeButton}
					>
						<Text style={styles.buttonText}>Terminar</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						onPress={() => handleDelete(selectedTask?.id)}
						style={styles.deleteButton}
					>
						<Text style={styles.buttonText}>Eliminar</Text>
					</TouchableOpacity>
				)}
				<Button
					title="Cancelar"
					onPress={() =>
						setShowModal((prevState) => ({
							state: !prevState.state,
							action: "",
						}))
					}
					color="#cccccc"
				/>
			</View>
		</Modal>
	);
};

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
	completeButton: {
		paddingHorizontal: 10,
		borderRadius: 10,
		backgroundColor: "#008B76",
		alignItems: "center",
		justifyContent: "center",
	},
	deleteButton: {
		paddingHorizontal: 10,
		borderRadius: 10,
		backgroundColor: "#BC0046",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#4A306D",
		padding: 10,
		borderRadius: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default ModalTasks;
