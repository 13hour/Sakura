import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ScrollView,
	Image,
	Button,
} from "react-native";
import theme from "../styles/globalStyle";
import _ from "lodash";
import ImageBase from "./ImageBase";
import { useEffect, useRef, useState } from "react";
// import { Image } from "expo-image";

export default function SwiperBase({ height = 100, width = 300, images = [] }) {
	const scrollView = useRef(null);
	const scrollToX = useRef(0);
	const [data] = useState(images);
	const [imagesList, setImagesList] = useState([]);
	const [scrollViewWidth, setScrollViewWidth] = useState(0);
	const [loopId, setLoopId] = useState(null);
	const [isActiveDot, setIsActiveDot] = useState(1);

	useEffect(() => {
		if (scrollView.current) {
			let newImagesList = _.cloneDeep(data);
			newImagesList.push(data.at(0));
			newImagesList.unshift(data.at(data.length - 1));
			setScrollViewWidth(newImagesList.length * width);
			setImagesList(newImagesList);
			scrollView.current.scrollTo({ x: width });
		}
	}, [data, scrollView]);

	useEffect(() => {
		if (loopId) {
			clearInterval(loopId);
			setLoopId(null);
		}
		if (scrollView.current) {
			setLoopId(setScrollLoop());
		}
	}, [scrollViewWidth, scrollView]);

	function setActiveDot(scrollDistance) {
		if (
			scrollDistance === width ||
			scrollDistance === scrollViewWidth - width
		) {
			setIsActiveDot(1);
		} else if (
			scrollDistance === 0 ||
			scrollDistance === scrollViewWidth - width * 2
		) {
			setIsActiveDot(data.length);
		} else {
			setIsActiveDot(scrollDistance / width);
		}
	}

	/**
	 * *设置轮播图循环播放
	 * @param {number} currentScrollWidth 初始的滑动距离
	 * @returns 无限循环的定时器id
	 */
	function setScrollLoop(currentScrollWidth) {
		let scrollWidth = currentScrollWidth || width;

		return setInterval(() => {
			scrollWidth += width;
			if (scrollWidth >= scrollViewWidth - width) {
				scrollView.current.scrollTo({ x: scrollWidth, animated: 300 });

				scrollWidth = width;
				setTimeout(() => {
					scrollView.current.scrollTo({ x: width, animated: false });
				}, 400);
			} else {
				scrollView.current.scrollTo({ x: scrollWidth });
			}
			setActiveDot(scrollWidth);
		}, 3000);
	}

	function handleScroll({ nativeEvent }) {
		scrollToX.current = nativeEvent.contentOffset.x;
	}

	function handleScrollTo(props) {
		const imageIndex = scrollToX.current / width;
		setScrollTarget(imageIndex);
	}

	/**
	 * *用户手动左右滑动时设置轮播图的左右滑动动画，附加循环滑动功能
	 * @param {number} index
	 */
	function setScrollTarget(index) {
		const scrollToTargetX = Math.round(index) * width;
		if (scrollViewWidth - scrollToTargetX === width) {
			scrollView.current.scrollTo({ x: scrollToTargetX, animated: 300 });
			_.delay(() => {
				scrollView.current.scrollTo({ x: width, animated: false });
			}, 300);
		} else if (scrollToTargetX === 0) {
			scrollView.current.scrollTo({ x: scrollToTargetX, animated: 300 });
			_.delay(() => {
				scrollView.current.scrollTo({
					x: scrollViewWidth - width * 2,
					animated: false,
				});
			}, 300);
		} else {
			scrollView.current.scrollTo({ x: scrollToTargetX });
		}
		setActiveDot(scrollToTargetX);

		_.delay(() => {
			setLoopId(setScrollLoop(scrollToTargetX));
		}, 300);
	}

	return (
		<View
			style={{
				height,
				width,
				borderRadius: theme.borderRadius_8,
				overflow: "hidden",
			}}>
			<ScrollView
				contentContainerStyle={{
					width: scrollViewWidth,
					height,
				}}
				horizontal={true}
				overScrollMode="auto"
				ref={scrollView}
				onScrollBeginDrag={() => {
					clearInterval(loopId);
				}}
				onScroll={handleScroll}
				onScrollEndDrag={handleScrollTo}
				showsHorizontalScrollIndicator={false}>
				{imagesList.map((image, index) => (
					<ImageBase
						uri={image?.imgUrl}
						width={width}
						height={height}
						key={index}
					/>
				))}
			</ScrollView>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "center",
					gap: 5,
					bottom: 10,
				}}>
				{data.map((image, index) => (
					<Text
						style={{
							width: 13,
							height: 3,
							borderRadius: 3,
							backgroundColor:
								isActiveDot === index + 1
									? theme.primaryColor
									: theme.text_grey_300,
						}}
						key={index}></Text>
				))}
			</View>
		</View>
	);
}
