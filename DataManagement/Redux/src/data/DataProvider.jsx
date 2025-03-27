import { useEffect } from "react";
import { STORAGE_KEY, store } from "./store";
import { Provider } from "react-redux";

export function DataProvider({ children }) {
	useEffect(
		() =>
			store.subscribe(() =>
				localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().data))
			),
		[]
	);
	return <Provider store={store}>{children}</Provider>;
}
