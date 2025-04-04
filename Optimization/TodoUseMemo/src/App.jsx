import { useMemo, useState } from "react";

function Todo() {
	const [items, setItems] = useState(["Clean gutter", "Do dishes"]);
	const [newItem, setNewItem] = useState("");

	const onSubmit = (evt) => {
		setItems((items) => items.concat([newItem]));
		setNewItem("");
		evt.preventDefault();
	};

	const itemsRendered = useMemo(
		() => (
			<>
				<h2>Todo items</h2>
				<ul>
					{items.map((todo) => (
						<li key={todo}>{todo}</li>
					))}
				</ul>
			</>
		),
		[items]
	);

	const onChange = (evt) => setNewItem(evt.target.value);

	// const onDelete = useCallback((itemToDelete) => {
	// 	setItems(items => items.filter(item => item !== itemToDelete));
	// }, []);
	//
	// const itemsRendered = useMemo(
	// 	() => (
	// 		<>
	// 			<h2>Todo items</h2>
	// 			<ul>
	// 				{items.map((todo) => (
	// 					<li key={todo}>
	// 						{todo}
	// 						<button onClick={() => onDelete(todo)}>Delete</button>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		</>
	// 	),
	// 	[items, onDelete]
	// );

	return (
		<main>
			{itemsRendered}
			<form onSubmit={onSubmit}>
				<input value={newItem} onChange={onChange} />
				<button>Add</button>
			</form>
		</main>
	);
}

function App() {
	return <Todo />;
}

export default App;
