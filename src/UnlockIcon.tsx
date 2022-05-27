import * as React from 'react';

function SvgUnlockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 17.5C13.1046 17.5 14 16.6046 14 15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5C10 16.6046 10.8954 17.5 12 17.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91924 4.68079C9.4741 5.08142 9.1712 5.64948 8.94895 6.31623C8.77431 6.84017 8.20799 7.12333 7.68404 6.94868C7.1601 6.77404 6.87694 6.20772 7.05159 5.68377C7.32934 4.85052 7.77645 3.91858 8.58131 3.19421C9.40962 2.44872 10.5311 2 12.0003 2C15.1327 2 17.0003 4.5314 17.0003 7V9H18C19.1046 9 20 9.89543 20 11V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V11C4 9.89543 4.89543 9 6 9H15.0003V7C15.0003 5.4686 13.8679 4 12.0003 4C10.9695 4 10.3409 4.30128 9.91924 4.68079ZM18 11H6V20H18V11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnlockIcon;
