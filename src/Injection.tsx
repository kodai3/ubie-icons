import * as React from "react";

function SvgInjection(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.475 2.64641C15.8655 2.25588 16.4987 2.25588 16.8892 2.64641L21.1319 6.88905C21.5224 7.27957 21.5224 7.91274 21.1319 8.30326C20.7413 8.69379 20.1082 8.69379 19.7176 8.30326L19.3641 7.94972L17.1268 10.187L19.4252 12.4854C19.8157 12.8759 19.8157 13.5091 19.4252 13.8996C19.0347 14.2901 18.4015 14.2901 18.011 13.8996L17.3039 13.1925L17.3037 13.1926L10.5148 19.9815C9.92074 20.5756 9.01881 20.7351 8.2571 20.3808L6.1468 19.3992L4.222 21.324C3.83148 21.7146 3.19831 21.7146 2.80779 21.324C2.41726 20.9335 2.41726 20.3003 2.80779 19.9098L4.73278 17.9848L3.75158 15.8753C3.39729 15.1135 3.55678 14.2116 4.15081 13.6176L10.9398 6.82861L10.9399 6.82849L10.2328 6.12141C9.84229 5.73089 9.84229 5.09772 10.2328 4.7072C10.6233 4.31668 11.2565 4.31668 11.647 4.7072L13.5913 6.65146L15.8286 4.41418L15.475 4.06062C15.0845 3.6701 15.0845 3.03693 15.475 2.64641ZM17.9498 6.53563L17.2427 5.82852L15.1498 7.92136L15.8569 8.62846L17.9498 6.53563ZM15.8895 11.7784L12.354 8.24283L10.763 9.83386L12.5305 11.6015C12.8234 11.8943 12.8234 12.3692 12.5305 12.6621C12.2376 12.955 11.7628 12.955 11.4699 12.6621L9.70229 10.8945L8.64174 11.9551L10.4094 13.7228C10.7023 14.0157 10.7023 14.4906 10.4094 14.7834C10.1166 15.0763 9.64168 15.0763 9.34878 14.7834L7.58107 13.0157L5.56502 15.0318L6.68741 17.4449L9.10056 18.5673L15.8895 11.7784Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInjection;