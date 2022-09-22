import React, { Fragment, useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import InputTask from "../../components/List/InputTask";
import ModalTasks from "../../components/ModalTasks";
import { colors, sizes } from "../../constants";
import CompletedListContainer from "../CompletedListContainer";
import ToDoListContainer from "../ToDoListContainer";

const TasksContainer = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);
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

	const toggleShowCompleted = () => {
		setShowCompleted((currentValue) => !currentValue);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View styles={styles.toDoTitleContainer}>
					<Text style={styles.toDoTitle}>ToDo List</Text>
				</View>
				<TouchableOpacity
					onPress={toggleShowCompleted}
					style={showCompleted ? styles.toggleCompleted : styles.togglePending}
				>
					<Text style={styles.buttonText}>
						{showCompleted ? "Ver Pendientes" : "Ver Completas"}
					</Text>
				</TouchableOpacity>
			</View>
			{showCompleted ? (
				<CompletedListContainer tasks={completed} handleModal={handleModal} />
			) : (
				<Fragment>
					<InputTask
						task={task}
						handleChangeText={handleChangeText}
						addTask={addTask}
					/>
					<ToDoListContainer tasks={tasks} handleModal={handleModal} />
				</Fragment>
			)}

			<ModalTasks
				showModal={showModal}
				selectedTask={selectedTask}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
				setShowModal={setShowModal}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backgroundLight,
	},
	headerContainer: {
		paddingVertical: sizes.regular,
		flexDirection: "row",
		justifyContent: "space-around",
		borderBottomColor: colors.gray,
		borderBottomWidth: 1,
	},
	toDoTitleContainer: {
		flex: 1,
		justifyContent: "center",
	},
	toDoTitle: {
		fontFamily: "Quicksand-Bold",
		fontSize: sizes.large,
	},
	togglePending: {
		padding: sizes.xs,
		backgroundColor: colors.primary,
		borderRadius: sizes.xs,
	},
	toggleCompleted: {
		padding: sizes.xs,
		backgroundColor: colors.secondary,
		borderRadius: sizes.xs,
	},
	buttonText: {
		color: colors.textLigth,
		fontFamily: "Quicksand-SemiBold",
	},
});

export default TasksContainer;
