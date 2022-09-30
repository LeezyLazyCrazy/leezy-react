import AerospaceIcon from "../../assets/icons/AerospaceIcon";
import DefenseIcon from "../../assets/icons/DefenseIcon";
import HumanIcon from "../../assets/icons/HumanIcon";
import DashDotDotLineIcon from "../../assets/icons/lineTypes/DashDotDotLineIcon";
import DashDotLineIcon from "../../assets/icons/lineTypes/DashDotLineIcon";
import DashLineIcon from "../../assets/icons/lineTypes/DashLineIcon";
import OneLineIcon from "../../assets/icons/lineTypes/OneLineIcon";
import ArcIcon from "../../assets/icons/shapes/ArcIcon";
import BSplineIcon from "../../assets/icons/shapes/BSplineIcon";
import CircleIcon from "../../assets/icons/shapes/CircleIcon";
import CombatBoundaryIcon from "../../assets/icons/shapes/CombatBoundaryIcon";
import FanShapedIcon from "../../assets/icons/shapes/FanShapedIcon";
import FlightForwardAxisIcon from "../../assets/icons/shapes/FlightForwradAxisIcon";
import ForwardAxisIcon from "../../assets/icons/shapes/ForwardAxisIcon";
import HexagonIcon from "../../assets/icons/shapes/HexagonIcon";
import ImageIcon from "../../assets/icons/shapes/ImageIcon";
import MultiPointForwardAxisIcon from "../../assets/icons/shapes/MultiPointForwardAxisIcon";

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns JSX.Element(Page)
 */
 const PageIcon = () => {
	return (
    <>
  		<div>Line Types</div>
      <AerospaceIcon />
      <DefenseIcon />
      <HumanIcon />
      <DashDotDotLineIcon />
      <DashDotLineIcon />
      <DashLineIcon />
      <OneLineIcon />
  		<div>Shapes Types</div>
      <ArcIcon />
      <BSplineIcon />
      <CircleIcon />
      <CombatBoundaryIcon />
      <FanShapedIcon />
      <FlightForwardAxisIcon />
      <ForwardAxisIcon />
      <HexagonIcon />
      <ImageIcon />
      <MultiPointForwardAxisIcon />
    </>
	);
};

export default PageIcon;
