import EmployeeCard from "./EmployeeCard";
import "./App.css";

function App() {
	return (
		<main>
			<EmployeeCard item={{ name: "Willy Wonka", title: "Candy King" }} />
		</main>
	);
}

export default App;
