import * as React from "react";

function SvgCapsule(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.8282 14.8288L9.17136 9.1719L6.34296 12.0003C4.78086 13.5624 4.78086 16.0951 6.34296 17.6572C7.90506 19.2193 10.4377 19.2193 11.9998 17.6572L14.8282 14.8288ZM13.414 19.0714C11.0709 21.4145 7.27189 21.4145 4.92875 19.0714C2.5856 16.7282 2.5856 12.9292 4.92875 10.5861L10.5856 4.92923C12.9287 2.58609 16.7277 2.58609 19.0709 4.92923C19.1807 5.03907 19.2854 5.1521 19.3849 5.26804C19.464 5.36007 19.5397 5.45393 19.6123 5.54947C21.3977 7.90099 21.2173 11.2686 19.0711 13.4148L16.2427 16.2432L16.2424 16.243L13.414 19.0714Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCapsule;
