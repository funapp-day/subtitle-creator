import SubtitleViewer from "src/components/organisms/SubtitleViewer";
import { Subtitle as SubtitleType } from "src/types/interfaces";
import Styles from './index.module.scss';

export interface PropsType {
  items: SubtitleType[];
}

const SubtitleScreen = (props: PropsType) => {
  return (
    <div className={Styles.SubtitleScreen}>
    <SubtitleViewer
        items={props.items}
      ></SubtitleViewer>
    </div>
  );
};

export default SubtitleScreen;
