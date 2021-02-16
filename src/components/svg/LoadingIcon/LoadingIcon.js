import React from 'react';

function LoadingIcon() {
  return (
    // Thank you, Sam Herbert <3
    <svg width="74" height="74" viewBox="0 0 38 38">
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor="#b6bcbf" stopOpacity="0" offset="0%" />
          <stop stopColor="#b6bcbf" stopOpacity=".631" offset="63.146%" />
          <stop stopColor="#b6bcbf" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill="#b6bcbf" cx="36" cy="18" r="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}

export default LoadingIcon;
