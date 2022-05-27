import * as React from 'react';

function SvgAlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V13Z"
        fill="currentColor"
      />
      <path
        d="M12 18C12.6904 18 13.25 17.4404 13.25 16.75C13.25 16.0596 12.6904 15.5 12 15.5C11.3096 15.5 10.75 16.0596 10.75 16.75C10.75 17.4404 11.3096 18 12 18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C12.3544 2 12.6823 2.18754 12.8619 2.49298L22.8619 19.493C23.0438 19.8022 23.0461 20.1851 22.868 20.4965C22.69 20.8079 22.3587 21 22 21H2C1.64128 21 1.31005 20.8079 1.13195 20.4965C0.953855 20.1851 0.956189 19.8022 1.13807 19.493L11.1381 2.49298C11.3177 2.18754 11.6456 2 12 2ZM20.2516 19L12 4.97231L3.74842 19H20.2516Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlertIcon;
