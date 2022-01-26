import * as React from "react";

function SvgSetup(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.0545 2.80388C10.1463 2.33646 10.5495 2 11.0177 2H12.9822C13.4505 2 13.8536 2.33646 13.9454 2.80388L14.4681 5.46456C15.0688 5.69984 15.6288 6.01847 16.1345 6.40654L18.6295 5.44726C19.0675 5.27884 19.5614 5.44859 19.8095 5.85284L20.8506 7.54894C21.0987 7.95319 21.0321 8.47953 20.6913 8.80651L18.7514 10.6683C18.833 11.0994 18.8757 11.5446 18.8757 12C18.8757 12.4554 18.833 12.9006 18.7514 13.3317L20.6913 15.1934C21.032 15.5204 21.0986 16.0467 20.8505 16.451L19.8094 18.1471C19.5613 18.5513 19.0674 18.7211 18.6294 18.5527L16.1346 17.5934C15.6288 17.9815 15.0688 18.3002 14.4681 18.5355L13.9454 21.1961C13.8535 21.6635 13.4504 22 12.9822 22H11.0176C10.5494 22 10.1463 21.6635 10.0544 21.1961L9.53176 18.5355C8.9312 18.3003 8.37126 17.9818 7.8656 17.5938L5.37038 18.5532C4.93235 18.7216 4.43845 18.5519 4.19033 18.1476L3.14928 16.4516C2.90116 16.0473 2.96781 15.521 3.30851 15.194L5.24834 13.3323C5.1667 12.901 5.12395 12.4556 5.12395 12C5.12395 11.5446 5.16668 11.0993 5.24827 10.6681L3.3086 8.80659C2.9679 8.47961 2.90125 7.95326 3.14938 7.54901L4.19042 5.85292C4.43854 5.44867 4.93245 5.27891 5.37047 5.44733L7.86514 6.4065C8.37094 6.01838 8.93106 5.69972 9.53183 5.46444L10.0545 2.80388ZM11.9999 16C14.1698 16 15.9289 14.2091 15.9289 12C15.9289 9.79086 14.1698 8 11.9999 8C9.8299 8 8.0708 9.79086 8.0708 12C8.0708 14.2091 9.8299 16 11.9999 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSetup;
