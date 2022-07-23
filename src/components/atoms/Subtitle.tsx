import { CSSProperties, ReactNode } from "react";

export interface PropsType {
    text: string;
    style?: CSSProperties;
}

const Subtitle = (props: PropsType): ReactNode => {
  return (
    <div
      className="Subtitle"
      style={{
        ...props.style,
      }}
    >
      { props.text }
    </div>
  );
};

export default Subtitle;
