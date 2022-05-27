import * as React from 'react';

function SvgAddressIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.6741 2.50256C11.4309 1.83248 12.5688 1.83248 13.3256 2.50256L21.3234 9.58345C22.7018 10.8038 21.8386 13 19.9976 13H19.0001V13.9997C18.4186 13.563 17.7389 13.25 17.0001 13.1V11H19.9976L11.9998 4L4.00206 11H7.00006V20H11.416C11.7639 20.7963 12.3132 21.4844 12.9995 22H7.00006C5.89549 22 5.00006 21.1046 5.00006 20V13H4.00206C2.16108 13 1.29792 10.8038 2.67629 9.58346L10.6741 2.50256Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4999 16.7019V16.7008C18.4999 15.2092 17.3806 14 16 14C14.6193 14 13.5 15.2092 13.5 16.7008C13.5 16.7319 13.5005 16.763 13.5015 16.7939C13.4752 17.338 13.7938 18.8381 15.17 21.4801C15.524 22.1597 16.4933 22.1722 16.8664 21.5029C17.6265 20.1395 18.4999 18.2962 18.4999 16.7019ZM17.25 16.3621C17.25 17.0144 16.6904 17.5433 16 17.5433C15.3096 17.5433 14.75 17.0144 14.75 16.3621C14.75 15.7097 15.3096 15.1808 16 15.1808C16.6904 15.1808 17.25 15.7097 17.25 16.3621Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAddressIcon;
