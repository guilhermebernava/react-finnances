import { Link } from "@mui/material";
import { FunctionComponent } from "react";

interface LinkComponentProps {
  margin: string;
  href: string;
  label: string;
}

const LinkComponent: FunctionComponent<LinkComponentProps> = ({
  margin,
  href,
  label,
}) => {
  return (
    <Link
      href={href}
      sx={{
        color: "#DADADA",
        textDecoration: "none",
        margin: margin,
        ":hover": {
          color: "#1B8FB1",
        },
      }}
    >
      {label}
    </Link>
  );
};

export default LinkComponent;
