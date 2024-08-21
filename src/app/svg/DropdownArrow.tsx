import { FC } from 'react'

interface DropdownArrow {
  fill?: string
  height?: string
  width?: string
  dropdownOpen?: boolean
}

export const DropdownArrow: FC<DropdownArrow> = ({ fill, height = '24px', width = '24px', dropdownOpen = false }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      width={width}
      viewBox='0 0 24 24'
      fill={fill}
      aria-hidden='true'
      style={{ transform: dropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
    >
      <path d='M12 15.41l-6.41-6.41 1.41-1.41 5 5 5-5 1.41 1.41z' />
    </svg>
  )
}
