import * as React from 'react';

function SvgCalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13Z"
        fill="currentColor"
      />
      <path
        d="M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17Z"
        fill="currentColor"
      />
      <path
        d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
        fill="currentColor"
      />
      <path
        d="M11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
        fill="currentColor"
      />
      <path
        d="M16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C7.44772 2 7 2.44772 7 3V4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H17V3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3C9 2.44772 8.55228 2 8 2ZM15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6H5V9H19V6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7ZM19 20V11H5L5 20H19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarIcon;
