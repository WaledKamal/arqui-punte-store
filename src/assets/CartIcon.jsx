import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={58} height={54} {...props}>
    <defs>
      <filter
        id="a"
        x={16}
        y={0}
        width={42}
        height={42}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="blur" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Group 46" transform="translate(-.156 11.963)">
      <rect
        data-name="Rectangle 8"
        width={41}
        height={42}
        rx={11}
        transform="translate(.156 .037)"
      />
      <path
        d="m31.543 13.238-1.635 8.808a2.885 2.885 0 0 1-2.837 2.356H16.793a2.885 2.885 0 0 1-2.837-2.356l-1.337-7.24a.962.962 0 0 0-.962-.789H9.426a.962.962 0 1 1 0-1.923H30.58a.961.961 0 0 1 .962 1.135ZM18.081 25.382a2.885 2.885 0 1 0 2.885 2.885 2.885 2.885 0 0 0-2.884-2.884Zm7.692 0a2.885 2.885 0 1 0 2.885 2.885 2.885 2.885 0 0 0-2.884-2.884Z"
        fill="#fff"
      />
    </g>
    <g data-name="Group 47">
      <g transform="translate(.004 -.004)" filter="url(#a)">
        <circle
          data-name="Ellipse 1"
          cx={12}
          cy={12}
          r={12}
          transform="translate(25 6)"
          fill="#fff"
        />
      </g>
      <text
        data-name={2}
        transform="translate(33 22)"
        fill="#fb6d3a"
        fontSize={13}
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight={700}
      >
        <tspan x={0} y={0}>
         {props.itemLength}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgComponent
