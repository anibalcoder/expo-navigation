import { Link, LinkProps } from "expo-router";

interface Props extends LinkProps {
  color: "primary" | "secondary" | "tertiary" | "transparent";
  variant?: "contained" | "text-only";
}

const CustomLink = ({
  variant = "contained",
  color,
  className,
  children,
  href,
  ...rest
}: Props) => {
  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    transparent: "bg-transparent",
  }[color];

  const hasContent = variant === "contained" ? bgColor : "";

  return (
    <Link
      {...rest}
      href={href}
      className={`px-4 py-2 rounded-md font-bold ${hasContent} text-center ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
