import { CSSProperties } from "react";
import Styles from './index.module.scss';

export interface PropsType {
    text: string;
    style?: CSSProperties;
}

const Subtitle = (props: PropsType) => {
  return (
    <div
      className={Styles.Subtitle}
      style={{
        ...props.style,
      }}
    >
      { props.text }
    </div>
  );
};

export default Subtitle;
