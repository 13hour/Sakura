import { createContext, useContext, useState } from "react";

const HomeScreenContext = createContext();

function HomeScreenContextProvider({ children }) {
	const [swipeEnabled, setSwipeEnabled] = useState(true);
	const state = {
		swiperState: {
			swipeEnabled,
			setSwipeEnabled,
		},
	};
	return (
		<HomeScreenContext.Provider value={state}>
			{children}
		</HomeScreenContext.Provider>
	);
}

function useHomeScreen() {
	const context = useContext(HomeScreenContext);

	if (context === undefined)
		throw new Error("HomeContext was used without of HomeContextProvider");

	return context;
}

export { HomeScreenContextProvider, useHomeScreen };
