export default function DirtRoadIcon({
  className,
  ...props
}: {
  className: string
  props?: React.SVGProps<SVGSVGElement>
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3H16C19.7712 3 21.6569 3 22.8284 4.17157C24 5.34315 24 7.22876 24 11V13C24 16.7712 24 18.6569 22.8284 19.8284C21.6569 21 19.7712 21 16 21H8C4.22876 21 2.34315 21 1.17157 19.8284C0 18.6569 0 16.7712 0 13V11C0 7.22876 0 5.34315 1.17157 4.17157C2.34315 3 4.22876 3 8 3ZM6 18H3V9C3 7.34315 4.34315 6 6 6H10.5C12.1569 6 13.5 7.34315 13.5 9V13C13.5 14.1046 14.3954 15 15.5 15H16C17.1046 15 18 14.1046 18 13V6H21V15C21 16.6569 19.6569 18 18 18H13.5C11.8431 18 10.5 16.6569 10.5 15V11C10.5 9.89543 9.60457 9 8.5 9H8C6.89543 9 6 9.89543 6 11V18Z"
      ></path>
    </svg>
  )
}
