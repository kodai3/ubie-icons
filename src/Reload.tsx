import * as React from "react";

function SvgReload(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.06345 4.64507C6.8835 2.88021 9.28594 1.93256 11.7596 2.00374C14.2333 2.07492 16.583 3.15932 18.3087 5.02622C18.9982 5.77209 19.5663 6.61935 20 7.53403V5.00009C20 4.44781 20.4477 4.00009 21 4.00009C21.5523 4.00009 22 4.44781 22 5.00009V10.0001C22 10.2653 21.8946 10.5197 21.7071 10.7072C21.5196 10.8947 21.2652 11.0001 21 11.0001H16C15.4477 11.0001 15 10.5524 15 10.0001C15 9.44781 15.4477 9.00009 16 9.00009L18.3172 9.00009C17.9624 8.10681 17.4491 7.28284 16.7956 6.57594C15.4534 5.12391 13.6259 4.28049 11.7019 4.22513C9.77795 4.16976 7.90939 4.90683 6.4938 6.2795C5.0782 7.65217 4.22731 9.5521 4.12216 11.5751C4.017 13.598 4.66589 15.5843 5.93076 17.1114C7.19562 18.6384 8.97663 19.5857 10.8949 19.7516C12.8131 19.9176 14.7171 19.2891 16.2018 17.9998C17.3983 16.9609 18.2463 15.5591 18.6405 14H20.8081C20.3753 16.2324 19.2284 18.2526 17.5452 19.7141C15.6363 21.3716 13.1882 22.1797 10.722 21.9664C8.25567 21.753 5.9658 20.5351 4.33954 18.5718C2.71329 16.6084 1.879 14.0546 2.0142 11.4537C2.1494 8.8527 3.2434 6.40993 5.06345 4.64507Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReload;
