interface LogoProp {
  width?: number;
  color?: string;
  hasIcon?: boolean;
}

/**
 * React 로고
 * @param {LogoProp} LogoProp
 * @returns React Component(SVG)
 */

function Logo({ width = 40 }: LogoProp) {
  return <img src="/logo192.png" width={width} />;
}

export default Logo;
