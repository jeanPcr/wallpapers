import React from "react";
import { useTheme } from "../../contexts/theme.context";

import "./AppLayout.css";

const AppLayout = (props) => {
  const { isDark } = useTheme();
  return (
    <div
      className={isDark ? `bg-dark app-container` : `bg-light app-container`}
    >
      {props.children}
    </div>
  );
};

export default AppLayout;
