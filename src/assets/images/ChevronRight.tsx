import React from 'react'

type Props = {
  fill?: string
  className?: string
  style?: React.CSSProperties
}

const ChevronRight = (props: Props) => {
  const { fill = '#131D47', className = '', style = {} } = props

  return (
    <svg
      width='58'
      height='58'
      viewBox='0 0 58 58'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      style={style}
    >
      <path d='M24.1663 14.5L20.7588 17.9075L31.8271 29L20.7588 40.0925L24.1663 43.5L38.6663 29L24.1663 14.5Z' />
    </svg>
  )
}
export default ChevronRight
