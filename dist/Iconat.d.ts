import React from "react";
type IconatProps = {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    size?: number;
    color?: string;
};
declare function Iconat({ icon, className, style, size, color, ...props }: IconatProps): JSX.Element;
export default Iconat;
