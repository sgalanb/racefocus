export default function DirtOvalIcon({
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
        d="M8 3H16C19.7712 3 21.6569 3 22.8284 4.17157C24 5.34315 24 7.22876 24 11V13C24 16.7712 24 18.6569 22.8284 19.8284C21.6569 21 19.7712 21 16 21H8C4.22876 21 2.34315 21 1.17157 19.8284C0 18.6569 0 16.7712 0 13V11C0 7.22876 0 5.34315 1.17157 4.17157C2.34315 3 4.22876 3 8 3ZM9 9H15C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9ZM15 6H9C5.68629 6 3 8.68629 3 12C3 15.3137 5.68629 18 9 18H15C18.3137 18 21 15.3137 21 12C21 8.68629 18.3137 6 15 6Z"
      ></path>
    </svg>
  )
}
