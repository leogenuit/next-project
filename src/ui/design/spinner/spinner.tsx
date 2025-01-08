import clsx from "clsx";
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyle: string;
  let sizeStyle: string;

  switch (size) {
    case "small":
      sizeStyle = "w-5 h-5";
      break;
    case "medium": // Default
      sizeStyle = "w-9 h-9";
      break;
    case "large":
      sizeStyle = "w-20 h-20";
      break;
  }

  switch (variant) {
    case "primary": // Default
      variantStyle = "text-primary";
      break;
    case "white":
      variantStyle = "text-white";
      break;
  }

  return (
    <svg
      role="spinner"
      className={clsx(sizeStyle, variantStyle, "animate-spin")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <g fill="none" fill-rule="evenodd">
        <circle
          cx="7"
          cy="7"
          r="6"
          stroke="#000"
          stroke-opacity=".3"
          stroke-width="2"
        />

        <path
          fill="#fff"
          fill-opacity=".5"
          fill-rule="nonzero"
          d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"
        />
      </g>
    </svg>
  );
};
