interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium":
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }
  return (
    <>
      <svg
        width={sizeLogo}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="30" fill="#39D2D4" />
        <line x1="17.4996" y1="18.02" x2="16.4996" y2="43.02" stroke="white" />
        <path
          d="M36.5 18L39.5309 26.6373H49.3393L41.4042 31.9754L44.4351 40.6127L36.5 35.2746L28.5649 40.6127L31.5958 31.9754L23.6607 26.6373H33.4691L36.5 18Z"
          fill="#FCFF3E"
        />
      </svg>
    </>
  );
};
