import * as React from "react"

interface SpinnerSvgProps {
  customStyle?: React.CSSProperties;
}
const SpinnerSvg = ({customStyle ,...props}: SpinnerSvgProps) => {
  console.log([customStyle])
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // style={[customStyle]}
    >
      <circle cx={14.814} cy={22.862} r={2.513} fill="#fff" />
      <circle opacity={0.9} cx={20.595} cy={19.469} r={2.388} fill="#fff" />
      <circle opacity={0.8} cx={22.857} cy={13.311} r={2.262} fill="#fff" />
      <circle opacity={0.7} cx={20.595} cy={7.153} r={2.136} fill="#fff" />
      <circle opacity={0.6} cx={15.002} cy={3.698} r={1.948} fill="#fff" />
      <circle opacity={0.5} cx={8.343} cy={4.954} r={1.696} fill="#fff" />
      <circle opacity={0.4} cx={4.133} cy={9.918} r={1.508} fill="#fff" />
      <circle opacity={0.3} cx={4.133} cy={16.578} r={1.257} fill="#fff" />
      <circle opacity={0.2} cx={8.28} cy={21.605} r={1.005} fill="#fff" />
    </svg>
  )
}

export default SpinnerSvg
