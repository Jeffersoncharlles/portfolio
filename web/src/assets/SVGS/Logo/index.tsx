import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={181}
    height={193}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M98.547 186.17c54.083-3.25 63.834-34.633 0-186.17L181 192.081s-132.988 2.068-164.315 0c-31.328-2.069-10.936-5.911 0-5.911s27.778 3.251 81.862 0Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={283.567}
        y1={161.779}
        x2={-69.114}
        y2={190.614}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.191} stopColor="#737373" />
        <stop offset={0.897} stopColor="#CECECE" />
      </linearGradient>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
