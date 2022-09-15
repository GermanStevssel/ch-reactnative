import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import TasksContainer from "./containers/TasksContainer";

const App = () => {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<TasksContainer />
		</SafeAreaView>
	);
};

export default App;
