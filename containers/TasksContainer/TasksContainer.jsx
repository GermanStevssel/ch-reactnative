import React, { useState } from "react";
import { View } from "react-native";
import InputTask from "../../components/List/InputTask";
import ModalTasks from "../../components/ModalTasks";
import ListContainer from "../ListContainers";

const TasksContainer = () => {
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

	return (
		<View>
			<InputTask
				task={task}
				handleChangeText={handleChangeText}
				addTask={addTask}
			/>
			<ListContainer tasks={tasks} handleModal={handleModal} />
			<ModalTasks
				showModal={showModal}
				selectedTask={selectedTask}
				handleDelete={handleDelete}
			/>
		</View>
	);
};

export default TasksContainer;
