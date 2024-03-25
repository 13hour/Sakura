import ScrollViewBase from "../../ui/ScrollViewBase";
import Cover from "./Cover";
import Num from "./Num";
import Introduce from "./Introduce";
import ShortDirectory from "./ShortDirectory";
import Comments from "./Comments";
import LinkBooks from "./LinkBooks";

export default function Content() {
	return (
		<ScrollViewBase containerStyle={{ top: -100 }}>
			<Cover />
			<Num />
			<Introduce />
			<ShortDirectory />
			<Comments />
			<LinkBooks />
		</ScrollViewBase>
	);
}
