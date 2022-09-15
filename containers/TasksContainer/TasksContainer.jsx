import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputTask from "../../components/List/InputTask";
import ModalTasks from "../../components/ModalTasks";
import CompletedListContainer from "../CompletedListContainer";
import ListContainer from "../ListContainers";

const TasksContainer = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [id, setId] = useState(1);
	const [showModal, setShowModal] = useState({ state: false, action: "" });
	const [selectedTask, setSelectedTask] = useState(null);

	const handleChangeText = (text) => {
		setTask(text);
	};

	const addTask = () => {
		setTasks((prevTasks) => [...prevTasks, { id: id, value: task }]);
		setId((currentId) => currentId + 1);
		setTask("");
	};

	const handleModal = (id, action = null) => {
		setSelectedTask(tasks.find((item) => item.id === id));

		if (action === "check") {
			setShowModal((prevState) => ({ state: !prevState.state, action }));
			return;
		}
		setShowModal((prevState) => ({
			state: !prevState.state,
			action: "remove",
		}));
	};

	const handleComplete = (id, value) => {
		setTasks(tasks.filter((item) => item.id !== id));
		setSelectedTask(null);
		setShowModal((prevState) => ({ state: !prevState.state, action: "" }));
		setCompleted((prevState) => [...prevState, { id, value }]);
	};

	const handleDelete = (id) => {
		setTasks(tasks.filter((item) => item.id !== id));
		setSelectedTask(null);
		setShowModal((prevState) => ({ state: !prevState.state, action: "" }));
	};

	return (
		<View style={styles.container}>
			<InputTask
				task={task}
				handleChangeText={handleChangeText}
				addTask={addTask}
			/>
			<ListContainer tasks={tasks} handleModal={handleModal} />
			{completed.length > 0 && (
				<CompletedListContainer tasks={completed} handleModal={handleModal} />
			)}

			<ModalTasks
				showModal={showModal}
				selectedTask={selectedTask}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
				setShowModal={setShowModal}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
});

export default TasksContainer;
