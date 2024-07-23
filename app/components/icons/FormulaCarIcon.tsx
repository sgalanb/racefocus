export default function FormulaCarIcon({
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
        d="M8.95381 9H7.5C6.67157 9 6 9.67157 6 10.5V12.5L4.5 13V12C4.5 11.1716 3.82843 10.5 3 10.5H1.5C0.671573 10.5 0 11.1716 0 12V16.5C0 17.3284 0.671573 18 1.5 18H3C3.82843 18 4.5 17.3284 4.5 16.5V14.5L6.03931 13.9869C6.27193 15.4122 7.50893 16.5 9 16.5H9.85714L10.0714 18H4.5C4.5 18.8284 5.17157 19.5 6 19.5H10.2857L10.2879 19.5151C10.4096 20.3671 11.1393 21 12 21C12.8607 21 13.5904 20.3671 13.7121 19.5151L13.7143 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18H13.9286L14.1429 16.5H15C16.4911 16.5 17.7281 15.4122 17.9607 13.9869L19.5 14.5V16.5C19.5 17.3284 20.1716 18 21 18H22.5C23.3284 18 24 17.3284 24 16.5V12C24 11.1716 23.3284 10.5 22.5 10.5H21C20.1716 10.5 19.5 11.1716 19.5 12V13L18 12.5V10.5C18 9.67157 17.3284 9 16.5 9H15.0461L14.6711 7.5H19.5C20.3284 7.5 21 6.82843 21 6H14.2961L14.2762 5.92025C14.0675 5.08556 13.3176 4.5 12.4572 4.5H11.5428C10.6824 4.5 9.93242 5.08556 9.72375 5.92025L9.70381 6H3C3 6.82843 3.67157 7.5 4.5 7.5H9.32881L8.95381 9ZM15 10.5H16.5V13.5C16.5 14.3284 15.8284 15 15 15H14.3571L15 10.5ZM10.5 9L13.5 9L12.821 6.28405C12.7793 6.11711 12.6293 6 12.4572 6L11.5428 6C11.3707 6 11.2207 6.11711 11.179 6.28405L10.5 9ZM9 10.5H7.5V13.5C7.5 14.3284 8.17157 15 9 15H9.64286L9 10.5Z"
      ></path>
    </svg>
  )
}
