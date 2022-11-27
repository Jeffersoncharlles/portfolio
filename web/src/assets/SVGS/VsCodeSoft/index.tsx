import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={530}
    height={387}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#21252B" d="M0 0h530v37H0z" />
      <circle cx={18.596} cy={18.596} r={5.579} fill="#FF4A4A" />
      <circle cx={37.193} cy={18.596} r={5.579} fill="#FFB83D" />
      <circle cx={55.789} cy={18.596} r={5.579} fill="#00C543" />
      <path fill="#000" fillOpacity={0.01} d="M0 36.07h530V37H0z" />
      <path fill="#282C34" d="M0 37.193h530v349.614H0z" />
      <g clipPath="url(#b)">
        <g clipPath="url(#c)">
          <text
            fill="#98C379"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={70.667} y={75.022}>
              {".about"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#d)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={116.667} y={75.022}>
              {"{"}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 81.509h-.93v22h.93z" />
        <g clipPath="url(#e)">
          <text
            fill="#BABABA"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={97.022}>
              {"/* "}
            </tspan>
            <tspan x={126.093} y={97.022}>
              {"basic "}
            </tspan>
            <tspan x={171.858} y={97.022}>
              {"info "}
            </tspan>
            <tspan x={209.995} y={97.022}>
              {"\uD83E\uDC63 "}
            </tspan>
            <tspan x={226.966} y={97.022}>
              {"*/"}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 103.509h-.93v22h.93z" />
        <g clipPath="url(#f)">
          <text
            fill="#E06C75"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={119.022}>
              {"name"}
            </tspan>
          </text>
        </g>
        <text
          fill="#fff"
          fillOpacity={0.3}
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={134.211} y={119.022}>
            {":"}
          </tspan>
        </text>
        <g clipPath="url(#g)">
          <text
            fill="#E5C07B"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={155.228} y={119.022}>
              {"jefferson"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#h)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={224.228} y={119.022}>
              {","}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 125.509h-.93v22h.93z" />
        <g clipPath="url(#i)">
          <text
            fill="#E06C75"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={141.022}>
              {"skills"}
            </tspan>
          </text>
        </g>
        <text
          fill="#fff"
          fillOpacity={0.3}
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={149.211} y={141.022}>
            {":"}
          </tspan>
        </text>
        <g clipPath="url(#j)">
          <text
            fill="#E5C07B"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={170.228} y={141.022}>
              {
                "[\u201Cfront-end\u201D,\u201Cback-end\u201D,\u201Cmobile\u201D]"
              }
            </tspan>
          </text>
        </g>
        <g clipPath="url(#k)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={422.228} y={141.022}>
              {","}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 147.509h-.93v22h.93z" />
        <g clipPath="url(#l)">
          <text
            fill="#E06C75"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={163.022}>
              {"age"}
            </tspan>
          </text>
        </g>
        <text
          fill="#fff"
          fillOpacity={0.3}
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={126.211} y={163.022}>
            {":"}
          </tspan>
        </text>
        <g clipPath="url(#m)">
          <text
            fill="url(#n)"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={147.228} y={163.022}>
              {"33"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#o)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={163.228} y={163.022}>
              {","}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 169.509h-.93v22h.93z" />
        <g clipPath="url(#p)">
          <text
            fill="#E06C75"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={185.022}>
              {"married"}
            </tspan>
          </text>
        </g>
        <text
          fill="#fff"
          fillOpacity={0.3}
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={157.211} y={185.022}>
            {":"}
          </tspan>
        </text>
        <g clipPath="url(#q)">
          <text
            fill="#0EA5E9"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={178.228} y={185.022}>
              {"true"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#r)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={209.228} y={185.022}>
              {";"}
            </tspan>
          </text>
        </g>
        <path fill="#fff" fillOpacity={0.15} d="M71.597 191.509h-.93v22h.93z" />
        <g clipPath="url(#s)">
          <text
            fill="#E06C75"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={103.211} y={207.022}>
              {"personality"}
            </tspan>
          </text>
        </g>
        <text
          fill="#fff"
          fillOpacity={0.3}
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={187.211} y={207.022}>
            {":"}
          </tspan>
        </text>
        <g clipPath="url(#t)">
          <text
            fill="#E5C07B"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={208.228} y={207.022}>
              {"introvert"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#u)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={277.228} y={207.022}>
              {";"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#v)">
          <text
            fill="#fff"
            fillOpacity={0.75}
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={70.667} y={229.022}>
              {"}"}
            </tspan>
          </text>
        </g>
      </g>
      <g clipPath="url(#w)">
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={75.022}>
            {"1"}
          </tspan>
        </text>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={97.022}>
            {"2"}
          </tspan>
        </text>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={119.022}>
            {"3"}
          </tspan>
        </text>
        <g clipPath="url(#x)">
          <text
            fill="#717C94"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={37.004} y={141.022}>
              {"4"}
            </tspan>
          </text>
        </g>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={163.022}>
            {"5"}
          </tspan>
        </text>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={185.022}>
            {"6"}
          </tspan>
        </text>
        <g clipPath="url(#y)">
          <text
            fill="#717C94"
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}
            fontFamily="Cascadia Code"
            fontSize={13.018}
            letterSpacing="0em"
          >
            <tspan x={37.004} y={207.022}>
              {"7"}
            </tspan>
          </text>
        </g>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={229.022}>
            {"8"}
          </tspan>
        </text>
        <text
          fill="#717C94"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Cascadia Code"
          fontSize={13.018}
          letterSpacing="0em"
        >
          <tspan x={37.004} y={251.022}>
            {"9"}
          </tspan>
        </text>
      </g>
    </g>
    <defs>
      <clipPath id="b">
        <path
          fill="#fff"
          transform="translate(70.667 59.509)"
          d="M0 0h359.561v176H0z"
        />
      </clipPath>
      <clipPath id="c">
        <path
          fill="#fff"
          transform="translate(70.667 59.509)"
          d="M0 0h46v22H0z"
        />
      </clipPath>
      <clipPath id="d">
        <path
          fill="#fff"
          transform="translate(116.667 59.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="e">
        <path
          fill="#fff"
          transform="translate(103.211 81.509)"
          d="M0 0h140v22H0z"
        />
      </clipPath>
      <clipPath id="f">
        <path
          fill="#fff"
          transform="translate(103.211 103.509)"
          d="M0 0h31v22H0z"
        />
      </clipPath>
      <clipPath id="g">
        <path
          fill="#fff"
          transform="translate(155.228 103.509)"
          d="M0 0h69v22H0z"
        />
      </clipPath>
      <clipPath id="h">
        <path
          fill="#fff"
          transform="translate(224.228 103.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="i">
        <path
          fill="#fff"
          transform="translate(103.211 125.509)"
          d="M0 0h46v22H0z"
        />
      </clipPath>
      <clipPath id="j">
        <path
          fill="#fff"
          transform="translate(170.228 125.509)"
          d="M0 0h252v22H0z"
        />
      </clipPath>
      <clipPath id="k">
        <path
          fill="#fff"
          transform="translate(422.228 125.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="l">
        <path
          fill="#fff"
          transform="translate(103.211 147.509)"
          d="M0 0h23v22H0z"
        />
      </clipPath>
      <clipPath id="m">
        <path
          fill="#fff"
          transform="translate(147.228 147.509)"
          d="M0 0h16v22H0z"
        />
      </clipPath>
      <clipPath id="o">
        <path
          fill="#fff"
          transform="translate(163.228 147.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="p">
        <path
          fill="#fff"
          transform="translate(103.211 169.509)"
          d="M0 0h54v22H0z"
        />
      </clipPath>
      <clipPath id="q">
        <path
          fill="#fff"
          transform="translate(178.228 169.509)"
          d="M0 0h31v22H0z"
        />
      </clipPath>
      <clipPath id="r">
        <path
          fill="#fff"
          transform="translate(209.228 169.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="s">
        <path
          fill="#fff"
          transform="translate(103.211 191.509)"
          d="M0 0h84v22H0z"
        />
      </clipPath>
      <clipPath id="t">
        <path
          fill="#fff"
          transform="translate(208.228 191.509)"
          d="M0 0h69v22H0z"
        />
      </clipPath>
      <clipPath id="u">
        <path
          fill="#fff"
          transform="translate(277.228 191.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="v">
        <path
          fill="#fff"
          transform="translate(70.667 213.509)"
          d="M0 0h8v22H0z"
        />
      </clipPath>
      <clipPath id="w">
        <path
          fill="#fff"
          transform="translate(22.316 59.509)"
          d="M0 0h22.316v198H0z"
        />
      </clipPath>
      <clipPath id="x">
        <path
          fill="#fff"
          transform="translate(22.316 125.509)"
          d="M0 0h22.316v22H0z"
        />
      </clipPath>
      <clipPath id="y">
        <path
          fill="#fff"
          transform="translate(22.316 191.509)"
          d="M0 0h22.316v22H0z"
        />
      </clipPath>
      <linearGradient
        id="n"
        x1={160.748}
        y1={150.479}
        x2={146.416}
        y2={162.494}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00D8FF" />
        <stop offset={1} stopColor="#43DCF8" />
      </linearGradient>
      <filter
        id="a"
        x={-46.9}
        y={-27.814}
        width={623.8}
        height={480.607}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={10.489} />
        <feGaussianBlur stdDeviation={15.947} />
        <feColorMatrix values="0 0 0 0 0.470588 0 0 0 0 0.470588 0 0 0 0 0.486275 0 0 0 0.01 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_301_220" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={19.087} />
        <feGaussianBlur stdDeviation={23.45} />
        <feColorMatrix values="0 0 0 0 0.470588 0 0 0 0 0.470588 0 0 0 0 0.486275 0 0 0 0.0234306 0" />
        <feBlend
          in2="effect1_dropShadow_301_220"
          result="effect2_dropShadow_301_220"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_301_220"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
