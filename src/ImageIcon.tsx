import * as React from 'react';

function SvgImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19ZM20 5H4V13.865L7.71966 10.7653C8.46135 10.1472 9.5387 10.1472 10.2804 10.7653L14.9387 14.6472L16.5858 13.0001C17.3669 12.219 18.6332 12.219 19.4142 13L20 13.5858V5ZM20 19V16.4142L18 14.4143L16.3529 16.0614C15.6214 16.7929 14.4529 16.8459 13.6583 16.1836L9.00003 12.3018L4 16.4684V19H20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgImageIcon;
