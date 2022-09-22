import {
	ActivityIndicator,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import TasksContainer from "./containers/TasksContainer";
import { colors } from "./constants";

const App = () => {
	const [loaded] = useFonts({
		"Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
		"Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
		"Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
		"Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
		"Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
	});

	if (!loaded) {
		return (
			<View style={styles.containerLoader}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);
	}

	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<TasksContainer />
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundLight,
	},
	containerLoader: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.backgroundLight,
	},
});
