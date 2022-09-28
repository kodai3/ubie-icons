import * as React from 'react';

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8457 15.6134C12.6196 16.4865 11.1198 17 9.5 17C5.35786 17 2 13.6421 2 9.5C2 5.35786 5.35786 2 9.5 2C13.6421 2 17 5.35786 17 9.5C17 11.1198 16.4865 12.6196 15.6134 13.8457L21.384 19.6162C21.8721 20.1044 21.8721 20.8958 21.384 21.384C20.8958 21.8721 20.1044 21.8721 19.6162 21.384L13.8457 15.6134ZM14.5 9.5C14.5 12.2614 12.2614 14.5 9.5 14.5C6.73858 14.5 4.5 12.2614 4.5 9.5C4.5 6.73858 6.73858 4.5 9.5 4.5C12.2614 4.5 14.5 6.73858 14.5 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearchIcon;
