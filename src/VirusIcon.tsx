import * as React from 'react';

function SvgVirusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.768 12.3535C14.1585 12.744 14.7917 12.744 15.1822 12.3535C15.5727 11.963 15.5727 11.3298 15.1822 10.9393C14.7917 10.5488 14.1585 10.5488 13.768 10.9393C13.3775 11.3298 13.3775 11.963 13.768 12.3535Z"
        fill="currentColor"
      />
      <path
        d="M10.9395 10.9392C10.549 11.3297 9.91584 11.3297 9.52532 10.9392C9.13479 10.5487 9.13479 9.9155 9.52532 9.52498C9.91584 9.13445 10.549 9.13445 10.9395 9.52498C11.3301 9.9155 11.3301 10.5487 10.9395 10.9392Z"
        fill="currentColor"
      />
      <path
        d="M10.9394 15.1819C11.3299 15.5724 11.9631 15.5724 12.3536 15.1819C12.7441 14.7914 12.7441 14.1582 12.3536 13.7677C11.9631 13.3772 11.3299 13.3772 10.9394 13.7677C10.5489 14.1582 10.5489 14.7914 10.9394 15.1819Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2.5C14 2.08579 13.6642 1.75 13.25 1.75L10.75 1.75C10.3358 1.75 10 2.08579 10 2.5C10 2.91422 10.3358 3.25 10.75 3.25L11.25 3.25V5.03989C9.94979 5.17919 8.68113 5.68184 7.60864 6.54785L6.34321 5.28242L6.69676 4.92887C6.98965 4.63598 6.98965 4.16111 6.69676 3.86821C6.40387 3.57532 5.92899 3.57532 5.6361 3.86821L3.86833 5.63598C3.57544 5.92887 3.57544 6.40375 3.86833 6.69664C4.16122 6.98953 4.6361 6.98953 4.92899 6.69664L5.28255 6.34308L6.54799 7.60852C5.6819 8.68111 5.17924 9.94991 5.04001 11.2502H3.25V10.7502C3.25 10.336 2.91421 10.0002 2.5 10.0002C2.08579 10.0002 1.75 10.336 1.75 10.7502L1.75 13.2502C1.75 13.6645 2.08579 14.0002 2.5 14.0002C2.91421 14.0002 3.25 13.6645 3.25 13.2502L3.25 12.7502H5.0401C5.17945 14.0503 5.6821 15.3188 6.54802 16.3912L5.28246 17.6567L4.92888 17.3032C4.63599 17.0103 4.16112 17.0103 3.86822 17.3032C3.57533 17.5961 3.57533 18.0709 3.86822 18.3638L5.63599 20.1316C5.92888 20.4245 6.40376 20.4245 6.69665 20.1316C6.98954 19.8387 6.98954 19.3638 6.69665 19.0709L6.34312 18.7174L7.60868 17.4519C8.68116 18.3178 9.9498 18.8205 11.25 18.9598V20.75H10.75C10.3358 20.75 10 21.0858 10 21.5C10 21.9142 10.3358 22.25 10.75 22.25L13.25 22.25C13.6642 22.25 14 21.9142 14 21.5C14 21.0858 13.6642 20.75 13.25 20.75H12.75V18.9598C14.0502 18.8205 15.3188 18.3178 16.3913 17.4519L17.6569 18.7174L17.3034 19.071C17.0105 19.3639 17.0105 19.8388 17.3034 20.1317C17.5963 20.4246 18.0711 20.4246 18.364 20.1317L20.1318 18.3639C20.4247 18.071 20.4247 17.5961 20.1318 17.3032C19.8389 17.0104 19.364 17.0103 19.0711 17.3032L18.7176 17.6568L17.452 16.3912C18.3179 15.3188 18.8205 14.0503 18.9599 12.7502H20.75L20.75 13.2502C20.75 13.6644 21.0858 14.0002 21.5 14.0002C21.9142 14.0002 22.25 13.6644 22.25 13.2502V10.7502C22.25 10.3359 21.9142 10.0002 21.5 10.0002C21.0858 10.0002 20.75 10.3359 20.75 10.7502V11.2502H18.96C18.8208 9.95002 18.3182 8.68132 17.4522 7.60879L18.7177 6.34337L19.0709 6.69665C19.3638 6.98954 19.8387 6.98954 20.1316 6.69665C20.4245 6.40376 20.4245 5.92888 20.1316 5.63599L18.3638 3.86822C18.0709 3.57533 17.5961 3.57533 17.3032 3.86822C17.0103 4.16111 17.0103 4.63599 17.3032 4.92888L17.657 5.28271L16.3916 6.54807C15.3191 5.68193 14.0503 5.1792 12.75 5.03989V3.25H13.25C13.6642 3.25 14 2.91421 14 2.5ZM15.8891 15.8889C13.7412 18.0368 10.2588 18.0368 8.11091 15.8889C5.96303 13.741 5.96303 10.2586 8.11091 8.11075C10.2588 5.96287 13.7412 5.96287 15.8891 8.11075C18.037 10.2586 18.037 13.741 15.8891 15.8889Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVirusIcon;
