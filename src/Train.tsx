import * as React from "react";

function SvgTrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6H6.17071C6.58254 4.83481 7.69378 4 9 4H15C16.3062 4 17.4175 4.83481 17.8293 6H12ZM11 8H6V11H11V8ZM13 11V8H18V11H13ZM12 13H6V16C6 17.1046 6.89543 18 8 18H8.99902H9.00098H14.999H15.001H16C17.1046 18 18 17.1046 18 16V13H12ZM20 16C20 17.7824 18.8342 19.2924 17.2236 19.8094L18.7071 21.2929C19.0976 21.6834 19.0976 22.3166 18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071L14.5858 20H9.41421L6.70711 22.7071C6.31658 23.0976 5.68342 23.0976 5.29289 22.7071C4.90237 22.3166 4.90237 21.6834 5.29289 21.2929L6.7764 19.8094C5.16576 19.2924 4 17.7824 4 16V7C4 4.23858 6.23858 2 9 2H15C17.7614 2 20 4.23858 20 7V16ZM8.5 17C9.32843 17 10 16.3284 10 15.5C10 14.6716 9.32843 14 8.5 14C7.67157 14 7 14.6716 7 15.5C7 16.3284 7.67157 17 8.5 17ZM17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrain;
