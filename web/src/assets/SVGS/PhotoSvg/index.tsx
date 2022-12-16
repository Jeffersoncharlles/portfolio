import * as React from "react"
import styles from './styles.module.css'

interface Props extends React.SVGProps<SVGSVGElement> {
  styleClass?: string;
  urlImage?: string;
}

const SvgComponent = ({ urlImage, styleClass, ...rest }:Props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g filter="url(#a)">
      <rect
        x={80.981}
        y={29.248}
        rx={2}
        fill="#D5D6D8"
        className={styles.background_img}
      />
      <image className={styles.images} href={urlImage}  x={80.981} y={29.248} />
    </g>
    <rect
      x={56.97}
      y={15.161}
      rx={3}
      transform="rotate(-1.766 56.97 15.16)"
      stroke="#868587"
      strokeWidth={2}
      className={styles.borderImg}
    />


    <defs>
      <filter
        id="a"
        x={0.981}
        y={29.248}
        width={586}
        height={730}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={3.623} />
        <feGaussianBlur stdDeviation={1.812} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.0209047 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_301_216" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={10.017} />
        <feGaussianBlur stdDeviation={5.009} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.03 0" />
        <feBlend
          in2="effect1_dropShadow_301_216"
          result="effect2_dropShadow_301_216"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={24.118} />
        <feGaussianBlur stdDeviation={12.059} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.0390953 0" />
        <feBlend
          in2="effect2_dropShadow_301_216"
          result="effect3_dropShadow_301_216"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={80} />
        <feGaussianBlur stdDeviation={40} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.06 0" />
        <feBlend
          in2="effect3_dropShadow_301_216"
          result="effect4_dropShadow_301_216"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect4_dropShadow_301_216"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
