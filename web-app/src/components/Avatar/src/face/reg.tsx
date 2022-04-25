import React from "react";

export default function faceReg(): SVGElement {
    const maskId = `mask${Math.round(Math.random() * 9999999)}`;
    const pathId = `path${Math.round(Math.random() * 9999999)}`;
    return (
        <svg
            style={{
                width: "100%",
                height: "100%",
                position: "absolute"
            }}
            width="200"
            height="320"
            viewBox="0 0 200 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M154 319.5C139.6 299.5 128.333 260.834 127 241.5L58.5 212L30 319.5H154Z" fill="#AC6651"
                      stroke="black" strokeWidth="4"/>
                <mask id={maskId} mask-type="alpha" maskUnits="userSpaceOnUse" x="30" y="212" width="124" height="118">
                    <path d="M154 329.5C139.6 309.5 128.333 260.834 127 241.5L58.5 212L30 329.5H154Z" fill="#AC6651"/>
                </mask>
                <g mask={`url(#${maskId})`}>
                    <ellipse cx="124" cy="210" rx="59" ry="54" fill="#3f3f3f"/>
                </g>
                <mask id={pathId} fill="white">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"/>
                </mask>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"
                      fill="#AC6651"/>
                <path
                    d fill="black" mask={`url(#${pathId})`}/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="200" height="320" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}