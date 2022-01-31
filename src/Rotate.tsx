import * as React from "react";

function SvgRotate(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.20619 9.6492C2.01946 9.46328 1.91455 9.21112 1.91455 8.9482L1.91455 3.99137C1.91455 3.44385 2.36036 3 2.91029 3C3.46021 3 3.90602 3.44385 3.90602 3.99137L3.90602 6.32305C5.60806 4.98698 7.78499 3.77407 10.2875 3.32558C13.7341 2.70793 17.6548 3.56753 21.5985 7.23215C22.0006 7.60573 22.0223 8.23305 21.6471 8.63332C21.2719 9.03358 20.6418 9.05522 20.2397 8.68164C16.7154 5.40674 13.4171 4.77932 10.6403 5.27695C8.48973 5.66237 6.56883 6.73884 5.04174 7.95683L7.88895 7.95683C8.43888 7.95683 8.88469 8.40068 8.88469 8.9482C8.88469 9.49571 8.43888 9.93956 7.88895 9.93956L2.91028 9.93956C2.6462 9.93956 2.39293 9.83512 2.20619 9.6492ZM10.7907 14.4006L15.0152 18.6066L19.2398 14.4006L15.0152 10.1946L10.7907 14.4006ZM8.67841 13.6996C8.28956 14.0868 8.28956 14.7145 8.67841 15.1016L14.3111 20.7097C14.7 21.0968 15.3305 21.0968 15.7193 20.7097L21.352 15.1016C21.7409 14.7145 21.7409 14.0868 21.352 13.6996L15.7193 8.09162C15.3305 7.70447 14.7 7.70447 14.3111 8.09162L8.67841 13.6996Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRotate;