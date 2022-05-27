import * as React from 'react';

function SvgLockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 17.5C13.1046 17.5 14 16.6046 14 15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5C10 16.6046 10.8954 17.5 12 17.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7V9H6C4.89543 9 4 9.89543 4 11V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9H17V7C17 4.5314 15.1324 2 12 2C8.86759 2 7 4.5314 7 7ZM12 4C10.1324 4 9 5.4686 9 7V9H15V7C15 5.4686 13.8676 4 12 4ZM6 11V20H18V11H6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockIcon;
