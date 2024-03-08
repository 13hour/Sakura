import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function useLoop(action, delay, dependsArray) {
	const [loopId, setLoopId] = useState(null);
	function loop() {
		action();
		return setInterval(() => {
			action();
		}, delay);
	}

	useEffect(() => {
		// if (loopId) {
		clearInterval(loopId);
		setLoopId(null);
		// }
		setLoopId(loop());
	}, [...dependsArray]);
}
