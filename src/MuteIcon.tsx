import * as React from 'react';

function SvgMuteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L7.56019 8.9744L7 8.9744C6.44772 8.9744 6 9.42212 6 9.9744V13.9844C6 14.5367 6.44772 14.9844 7 14.9844L9 14.9844L14.266 20.676C14.8838 21.3438 16 20.9067 16 19.9969V17.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM14 15.4142L9.56019 10.9744L8 10.9744V12.9844H9.87429L14 17.4436V15.4142Z"
        fill="currentColor"
      />
      <path
        d="M14 6.54213V10.5858L16 12.5858V4.00201C16 3.09399 14.8874 2.65597 14.2684 3.3203L10.6345 7.22026L12.0496 8.63536L14 6.54213Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMuteIcon;
