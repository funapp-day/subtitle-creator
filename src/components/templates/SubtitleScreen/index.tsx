import { ReactNode } from "react";
import Subtitle from "src/components/atoms/Subtitle";
import { Subtitle as SubtitleType } from "src/types/interfaces";
import Styles from './index.module.scss';

export interface PropsType {
  items: SubtitleType[];
}

const SubtitleScreen = (props: PropsType) => {
  return (
    <div className={Styles.SubtitleScreen}>
      <ul className={Styles.SubtitleList}>
        { [...props.items].map((item, key) => renderSubtitle(item.text, key)) }
      </ul>
    </div>
  );
};

const renderSubtitle = (text: string, key: number): ReactNode => {
  return (
    <li
      className={Styles.SubtitleList__Item}
      key={key}
    >
      <Subtitle
        text={text}
      />
    </li>
  );
};

export default SubtitleScreen;
