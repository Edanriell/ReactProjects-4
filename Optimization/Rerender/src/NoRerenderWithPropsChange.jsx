import { useEffect, useRef } from "react";
import { Rerenderable } from "./Rerenderable";

export function NoRerenderWithPropsChange() {
	const count = useRef(0);

	useEffect(() => {
		console.log(count);
	});

	return (
		<div>
			<button onClick={() => count.current++}>Click to re-render</button>
			<Rerenderable count={count.current} />
		</div>
	);
}
