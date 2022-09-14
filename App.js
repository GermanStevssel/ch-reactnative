import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import ListContainer from "./containers/ListContainers";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// justifyContent: "center",
		// alignItems: "center",
	},
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
	itemList: {
		flex: 1,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	itemContainer: {
		flex: 1,
		marginVertical: 5,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
		backgroundColor: "#A1F1DD",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 10,
	},
	item: {
		fontSize: 22,
		color: "#5258CB",
	},
	delete: {
		fontSize: 22,
		fontWeight: "bold",
		color: "white",
	},
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

const App = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [id, setId] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);

	const handleChangeText = (text) => {
		setTask(text);
	};

	const addTask = () => {
		setTasks((prevTasks) => [...prevTasks, { id: id, value: task }]);
		setId((currentId) => currentId + 1);
		setTask("");
	};

	const handleModal = (id) => {
		setShowModal(!showModal);
		setSelectedTask(tasks.find((item) => item.id === id));
	};

	const handleDelete = (id) => {
		setTasks(tasks.filter((item) => item.id !== id));
		setSelectedTask(null);
		setShowModal(!showModal);
	};

	// const renderItem = ({ item }) => (
	// 	<View key={`item-${item.id}`} style={styles.itemContainer}>
	// 		<Text style={styles.item}>{item.value}</Text>
	// 		<TouchableOpacity onPress={() => handleModal(item.id)}>
	// 			<Text style={styles.delete}>X</Text>
	// 		</TouchableOpacity>
	// 	</View>
	// );

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="New task..."
					selectionColor="#60e1e0"
					value={task}
					onChangeText={handleChangeText}
				/>
				<Button title="Add" onPress={addTask} color="#5258CB" />
				<StatusBar style="auto" />
			</View>
			<ListContainer tasks={tasks} />
			{/* <FlatList
				style={styles.itemList}
				data={tasks}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/> */}
			{/* <Modal animationType="slide" visible={showModal}>
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
			</Modal> */}
		</View>
	);
};

export default App;
