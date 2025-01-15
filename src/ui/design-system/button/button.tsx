import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { IconProps } from "@/types/iconProps";
import { LinksType, LinkType } from "@/lib/link-type";
import Link from "next/link";
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: () => void;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
}: Props) => {
  let variantStyle = "";
  let sizeStyle: string = "";
  let iconSize: number = 0;

  switch (variant) {
    case "accent": // Default
      variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";

      break;
    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        //Default
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }
  switch (size) {
    case "small":
      sizeStyle = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      } `;
      iconSize = 18;
      break;
    case "medium": // Default
      sizeStyle = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      } `;
      iconSize = 20;
      break;
    case "large":
      sizeStyle = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      } `;
      iconSize = 24;
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner size="small" />
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={iconSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        )}
      </div>
    </>
  );
  const buttonElement = (
    <>
      <button
        type="button"
        className={clsx(
          variantStyle,
          sizeStyle,
          iconSize,
          isLoading && "cursor-wait",
          "relative animate"
        )}
        onClick={handleClick}
        disabled={disabled}
      >
        {buttonContent}
      </button>
    </>
  );
  if (baseUrl) {
    if (linkType === LinksType.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }
  return buttonElement;
};
