export default function OvalIcon({
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
        d="M18 7.5H6C4.34315 7.5 3 8.84315 3 10.5V11.2918C3 12.4281 3.64201 13.4669 4.65836 13.9751L7.30426 15.298C10.2603 16.776 13.7397 16.776 16.6957 15.298L19.3416 13.9751C20.358 13.4669 21 12.4281 21 11.2918V10.5C21 8.84315 19.6569 7.5 18 7.5ZM6 4.5H18C21.3137 4.5 24 7.18629 24 10.5V11.2918C24 13.5644 22.716 15.642 20.6833 16.6584L18.0374 17.9813C14.2368 19.8816 9.76324 19.8816 5.96262 17.9813L3.31672 16.6584C1.28401 15.642 0 13.5644 0 11.2918V10.5C0 7.18629 2.68629 4.5 6 4.5Z"
      ></path>
    </svg>
  )
}
