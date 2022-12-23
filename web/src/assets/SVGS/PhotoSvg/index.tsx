import Image from "next/image";
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
    className={styles.pictureSvg}
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
  </svg>
)

export default SvgComponent
