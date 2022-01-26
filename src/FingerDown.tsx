import * as React from "react";

function SvgFingerDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 20C14.5523 20 15 19.5523 15 19L15 12C15 11.4477 15.4477 11 16 11C16.3932 11 16.628 10.917 16.7503 10.8191C16.83 10.7554 17 10.5793 17 10C17 9.88319 16.956 9.65821 16.8045 9.3103C16.659 8.97582 16.4424 8.59142 16.1705 8.1759C15.6268 7.34519 14.912 6.46622 14.2538 5.72855C14.0904 5.54533 14 5.30836 14 5.0628V4H8V5C8 5.21637 7.92982 5.4269 7.8 5.6C7.14624 6.47168 6.69062 7.54831 6.39944 8.57328C6.1074 9.60126 6 10.5085 6 11C6 11.2984 6.21845 11.7811 6.88171 12.2403C7.51865 12.6813 8.44304 13 9.5 13L12 13C12.5523 13 13 13.4477 13 14V19C13 19.5523 13.4477 20 14 20ZM17 19C17 20.6569 15.6569 22 14 22C12.3431 22 11 20.6569 11 19V15H9.5C8.05696 15 6.73135 14.5687 5.74329 13.8847C4.78155 13.2189 4 12.2016 4 11C4 10.2915 4.1426 9.19874 4.47556 8.02672C4.78231 6.94699 5.26684 5.74202 6 4.67821V4C6 2.89543 6.89543 2 8 2H14C15.1046 2 16 2.89543 16 4V4.68519C16.6269 5.40599 17.3001 6.24964 17.8439 7.08065C18.1529 7.55273 18.4328 8.0398 18.6384 8.51209C18.8381 8.97093 19 9.48802 19 10C19 11.0207 18.67 11.8446 17.9997 12.3809C17.6883 12.63 17.343 12.7843 17 12.8766V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFingerDown;
