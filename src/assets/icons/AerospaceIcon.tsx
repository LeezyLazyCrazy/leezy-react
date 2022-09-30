import useThemeStore from "../../stores/useThemeStore";
import { theme } from "../../styles/theme";
import { IconProps } from "./IconProp";

/**
 * 우주 모양 공군 아이콘 (공군이 만든 디자인 참고)
 * @param {IconProps} IconProps
 * @returns {JSX.Element} React Component(SVG)
 */

const AerospaceIcon = ({ width = 20, color }: IconProps) => {
	const { isDark } = useThemeStore();
	const chosenColor = color || theme(isDark).palette.text.secondary;

	return (
		<svg
			enableBackground="new 0 0 33.4 29.9"
			version="1.1"
			viewBox="0 0 33.4 29.9"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
		>
			<path
				d="m29.1 7.4c0.2-0.4 0.3-0.8 0.3-1.3 0-1.6-1.3-2.9-2.9-2.9-0.5 0-0.9 0.1-1.3 0.3-2.2-1.5-4.8-2.3-7.5-2.3-6.4 0-12 4.6-13.4 10.8-1.3 0.4-2.3 1.6-2.3 2.9s1 2.5 2.3 2.8c1.3 6.2 6.9 10.8 13.4 10.8 7.5 0 13.7-6.1 13.7-13.7-0.1-2.6-0.8-5.1-2.3-7.4zm-1.7-1.3c0 0.2-0.1 0.5-0.2 0.6-0.2 0.3-0.5 0.4-0.7 0.4-0.5 0-1-0.4-1-1 0-0.3 0.1-0.5 0.3-0.7s0.4-0.2 0.6-0.2c0.6 0 1 0.4 1 0.9zm-22.4 9.8c-0.6 0-1-0.4-1-1 0-0.5 0.4-1 0.9-1l0.1 0.1c0.5 0 0.9 0.5 0.9 1 0 0.4-0.4 0.9-0.9 0.9zm12.7 10.8c-5.5 0-10.2-3.9-11.4-9.1h0.1c0.1-0.1 0.2-0.1 0.3-0.2l0.1-0.1c0.1-0.2 0.2-0.2 0.2-0.3l0.1-0.1c0.1-0.1 0.2-0.2 0.3-0.4 0.1-0.1 0.1-0.3 0.2-0.4 0 0 0-0.1 0.1-0.1 0-0.1 0.1-0.2 0.1-0.3v-0.1-0.5s0-0.3 0-0.5v-0.1c0-0.1-0.1-0.2-0.1-0.3 0 0 0-0.1-0.1-0.1-0.1-0.1-0.1-0.3-0.2-0.4s-0.2-0.3-0.3-0.4l-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.2l-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.2h-0.1c1.2-5.2 6-9.1 11.4-9.1 2.2 0 4.3 0.6 6.1 1.7-0.1 0.1-0.1 0.3-0.1 0.4s0 0.1-0.1 0.2c0 0.2-0.1 0.4-0.1 0.6 0 1.6 1.3 2.9 2.9 2.9 0.2 0 0.4 0 0.6-0.1h0.1c0.2 0 0.3-0.1 0.5-0.2 1.1 1.8 1.7 3.9 1.7 6.1 0.2 6.2-5.1 11.5-11.5 11.5zm0-20.6c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8c1.1 0 2.1-0.2 3.1-0.6 0.5 0.4 1.1 0.6 1.7 0.6 1.6 0 2.9-1.3 2.9-2.9 0-0.5-0.1-0.9-0.3-1.3 0.8-1.4 1.3-2.9 1.3-4.6 0.1-4.8-3.9-8.8-8.7-8.8zm4.8 15.7c-0.3 0-0.6-0.1-0.8-0.4-0.1-0.2-0.2-0.4-0.2-0.6 0-0.5 0.4-1 1-1 0.3 0 0.5 0.1 0.7 0.3s0.2 0.4 0.2 0.6c0.1 0.6-0.3 1.1-0.9 1.1zm1.2-3.7c-0.1-0.1-0.2-0.1-0.4-0.1-0.1 0-0.1 0-0.2-0.1-0.2 0-0.4-0.1-0.6-0.1-1.6 0-2.9 1.3-2.9 2.9 0 0.2 0 0.4 0.1 0.6v0.1c-0.7 0.2-1.3 0.3-2 0.3-3.8 0-6.8-3.1-6.8-6.8s3.1-6.8 6.8-6.8 6.8 3.1 6.8 6.8c0 1.2-0.3 2.2-0.8 3.2zm-6-7.1c-2.2 0-3.9 1.8-3.9 3.9s1.8 3.9 3.9 3.9 3.9-1.8 3.9-3.9-1.8-3.9-3.9-3.9zm0 5.9c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-1 2-2 2z"
				fill={chosenColor}
			/>
		</svg>
	);
};

export default AerospaceIcon;
