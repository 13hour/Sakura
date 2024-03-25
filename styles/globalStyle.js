import { StyleSheet } from "react-native";
import { windowWidth } from "../constants/serviceSize";

const theme = StyleSheet.create({
	normalColorDark: "#333",
	normalColor: "#ffffff",
	// padding
	padding_2: 2,
	padding_4: 4,
	padding_6: 6,
	padding_8: 8,
	padding_10: 10,
	padding_12: 12,
	padding_14: 14,
	padding_16: 16,
	padding_18: 18,
	padding_20: 20,
	padding_22: 22,
	padding_24: 24,
	// gap
	gap_2: 2,
	gap_4: 4,
	gap_6: 6,
	gap_8: 8,
	gap_10: 10,
	gap_12: 12,
	gap_14: 14,
	gap_16: 16,
	gap_18: 18,
	gap_20: 20,
	gap_22: 22,
	gap_24: 24,
	gap_26: 26,
	gap_28: 28,

	// text-color
	text_grey_900: "#212121",
	text_grey_800: "#424242",
	text_grey_700: "#616161",
	text_grey_600: "#757575",
	text_grey_500: "#9E9E9E",
	text_grey_400: "#BDBDBD",
	text_grey_300: "#E0E0E0",
	text_grey_200: "#EEEEEE",
	text_grey_100: "#F5F5F5",
	text_grey_50: "#FAFAFA",
	text_blue_50: "#E3F2FD",
	text_blue_100: "#BBDEFB",
	text_blue_200: "#90CAF9",
	text_blue_300: "#64B5F6",
	text_blue_400: "#42A5F5",
	text_blue_500: "#2196F3",
	text_blue_600: "#1E88E5",
	text_blue_700: "#1976D2",
	text_blue_800: "#1565C0",
	text_blue_900: "#0D47A1",

	// box-borderRadius
	borderRadius_2: 2,
	borderRadius_4: 4,
	borderRadius_6: 6,
	borderRadius_8: 8,
	borderRadius_10: 10,
	borderRadius_12: 12,
	borderRadius_14: 14,
	borderRadius_16: 16,
	borderRadius_18: 18,
	borderRadius_20: 20,
	borderRadius_22: 22,
	borderRadius_24: 24,
	borderRadius_24: 24,
	// margin
	margin_2: 2,
	margin_4: 4,
	margin_6: 6,
	margin_8: 8,
	margin_10: 10,
	margin_12: 12,
	margin_14: 14,
	margin_16: 16,
	margin_18: 18,
	margin_20: 20,
	margin_22: 22,
	margin_24: 24,
	// backgroundColor
	normalBackgroundColor: "#f2f2f2",
	backgroundColor__1: "#f0efff",
	backgroundColor__2: "#ECEFF1",
	backgroundColor__3: "#F5F5F5",

	// headerHeight
	headerHeight: 50,
	//fonts
	fonts: {
		title_22: {
			fontFamily: "sans-serif",
			fontSize: 22,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 26,
		},

		title_20: {
			fontFamily: "sans-serif",
			fontSize: 20,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 24,
		},

		title_18: {
			fontFamily: "sans-serif",
			fontSize: 18,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 22,
		},
		title_16: {
			fontFamily: "sans-serif",
			fontSize: 16,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 20,
		},
		title_15: {
			fontFamily: "sans-serif",
			fontSize: 15,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 29,
		},
		title_14: {
			fontFamily: "sans-serif",
			fontSize: 14,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 18,
		},
		title_13: {
			fontFamily: "sans-serif",
			fontSize: 13,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 17,
		},
		title_12: {
			fontFamily: "sans-serif",
			fontSize: 12,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 16,
		},
		title_11: {
			fontFamily: "sans-serif",
			fontSize: 11,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 15,
		},
		title_10: {
			fontFamily: "sans-serif",
			fontSize: 10,
			fontWeight: "bold",
			letterSpacing: 0.15,
			lineHeight: 14,
		},

		label_22: {
			fontFamily: "sans-serif",
			fontSize: 22,
			letterSpacing: 0.15,
			lineHeight: 26,
		},

		label_20: {
			fontFamily: "sans-serif",
			fontSize: 20,
			letterSpacing: 0.15,
			lineHeight: 24,
		},

		label_18: {
			fontFamily: "sans-serif",
			fontSize: 18,
			letterSpacing: 0.15,
			lineHeight: 22,
		},
		label_16: {
			fontFamily: "sans-serif",
			fontSize: 16,
			letterSpacing: 0.15,
			lineHeight: 20,
		},
		label_15: {
			fontFamily: "sans-serif",
			fontSize: 15,
			letterSpacing: 0.15,
			lineHeight: 19,
		},
		label_14: {
			fontFamily: "sans-serif",
			fontSize: 14,
			letterSpacing: 0.15,
			lineHeight: 18,
		},
		label_13: {
			fontFamily: "sans-serif",
			fontSize: 13,
			letterSpacing: 0.15,
			lineHeight: 17,
		},
		label_12: {
			fontFamily: "sans-serif",
			fontSize: 12,
			letterSpacing: 0.15,
			lineHeight: 16,
		},
		label_11: {
			fontFamily: "sans-serif",
			fontSize: 11,
			letterSpacing: 0.15,
			lineHeight: 15,
		},
		label_10: {
			fontFamily: "sans-serif",
			fontSize: 10,
			letterSpacing: 0.15,
			lineHeight: 14,
		},
		default: { fontFamily: "sans-serif", fontWeight: "400", letterSpacing: 0 },
	},

	primaryColor: "#f26b1f",
	tertiaryColor: "#ff8a65",

	// layout
	flex_center_row: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	flex_center_column: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default theme;
