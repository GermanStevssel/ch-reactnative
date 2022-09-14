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
import TasksContainer from "./containers/TasksContainer";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// justifyContent: "center",
		// alignItems: "center",
	},
	// inputContainer: {
	// 	flexDirection: "row",
	// 	justifyContent: "space-between",
	// 	marginTop: 50,
	// 	marginBottom: 20,
	// 	marginHorizontal: 20,
	// },
	// input: {
	// 	width: "75%",
	// 	borderBottomColor: "#5258CB",
	// 	borderBottomWidth: 1,
	// 	height: 40,
	// 	color: "#212121",
	// },
	// modalContainer: {
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	marginTop: 30,
	// 	paddingVertical: 20,
	// },
	// modalMessageContainer: {
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	paddingVertical: 10,
	// },
	// modalMessage: {
	// 	fontSize: 14,
	// },
	// modalTitle: {
	// 	fontSize: 16,
	// },
	// selectedTask: {
	// 	fontSize: 16,
	// 	color: "#000000",
	// 	fontWeight: "bold",
	// },
	// buttonContainer: {
	// 	flexDirection: "row",
	// 	justifyContent: "space-around",
	// 	marginHorizontal: 20,
	// },
	// button: {
	// 	backgroundColor: "#4A306D",
	// 	padding: 10,
	// 	borderRadius: 10,
	// },
});

const App = () => {
	// const [task, setTask] = useState("");
	// const [tasks, setTasks] = useState([]);
	// const [id, setId] = useState(1);
	// const [showModal, setShowModal] = useState(false);
	// const [selectedTask, setSelectedTask] = useState(null);

	// const handleChangeText = (text) => {
	// 	setTask(text);
	// };

	// const addTask = () => {
	// 	setTasks((prevTasks) => [...prevTasks, { id: id, value: task }]);
	// 	setId((currentId) => currentId + 1);
	// 	setTask("");
	// };

	// const handleModal = (id) => {
	// 	setShowModal(!showModal);
	// 	setSelectedTask(tasks.find((item) => item.id === id));
	// };

	// const handleDelete = (id) => {
	// 	setTasks(tasks.filter((item) => item.id !== id));
	// 	setSelectedTask(null);
	// 	setShowModal(!showModal);
	// };

	return (
		<View style={styles.container}>
			<TasksContainer />
			<StatusBar style="auto" />
		</View>
	);
};

export default App;
