import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgSickIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M13.288 9.263a.75.75 0 0 0 .475.948l1.5.5a.75.75 0 1 0 .474-1.423l-1.5-.5a.75.75 0 0 0-.949.475M10.238 10.212a.75.75 0 0 0-.475-1.424l-1.5.5a.75.75 0 1 0 .474 1.423zM11.03 13.53a.75.75 0 0 1-1.06-1.06c.31-.31 1.035-.72 2.03-.72s1.72.41 2.03.72a.75.75 0 1 1-1.06 1.06c-.006-.005-.092-.077-.267-.148A1.9 1.9 0 0 0 12 13.25c-.295 0-.532.061-.703.132-.175.071-.26.143-.266.148"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.75 3a.75.75 0 0 0-1.5 0v1.858A6.98 6.98 0 0 0 5 10a7 7 0 0 0 3.857 6.256c-2.331.193-3.957.79-5.024 1.817-1.086 1.045-1.473 2.418-1.58 3.872a.75.75 0 1 0 1.495.11c.095-1.273.416-2.219 1.125-2.9.644-.62 1.704-1.117 3.49-1.34.075.225.187.48.359.738.535.802 1.543 1.47 3.278 1.47s2.743-.668 3.278-1.47c.172-.258.285-.514.359-.739 1.786.22 2.822.699 3.452 1.306.697.67 1.02 1.617 1.165 2.96a.75.75 0 0 0 1.492-.16c-.159-1.475-.543-2.847-1.616-3.88-1.058-1.02-2.663-1.592-4.987-1.784A7 7 0 0 0 11.25 3.04V3a.75.75 0 0 0-1.5 0v.37q-.52.176-1 .429zm5.669 13.57A7 7 0 0 1 12 17c-.85 0-1.665-.151-2.418-.429a.75.75 0 0 1 .134.42v.001l.003.034q.003.056.027.166c.033.147.097.34.223.528.223.334.732.803 2.031.803s1.808-.469 2.03-.803a1.6 1.6 0 0 0 .254-.728v-.001a.75.75 0 0 1 .135-.42M9.75 7V4.98q-.534.24-1 .582V8a.75.75 0 0 1-1.5 0v-.774a5.5 5.5 0 1 0 4-2.675V7a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M21.624 7.584a.75.75 0 0 0-1.248.832L21.1 9.5l-.723 1.084a.75.75 0 0 0 0 .832L21.1 12.5l-.723 1.084a.75.75 0 0 0 1.248.832l1-1.5a.75.75 0 0 0 0-.832L21.901 11l.723-1.084a.75.75 0 0 0 0-.832zM3.416 7.376a.75.75 0 0 0-1.04.208l-1 1.5a.75.75 0 0 0 0 .832L2.099 11l-.723 1.084a.75.75 0 0 0 0 .832l1 1.5a.75.75 0 1 0 1.248-.832L2.901 12.5l.723-1.084a.75.75 0 0 0 0-.832L2.901 9.5l.723-1.084a.75.75 0 0 0-.208-1.04"
    />
  </Svg>
);
export default SvgSickIcon;
