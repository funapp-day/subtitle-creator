import Subtitle from "src/components/atoms/Subtitle";
import { Subtitle as SubtitleType } from "src/types/interfaces";
import Styles from './index.module.scss';

export interface PropsType {
  items: SubtitleType[];
}

const SubtitleViewer = (props: PropsType) => {
  return (
    <ul className={Styles.SubtitleViewer}>
      {
        props.items && [...props.items].map((item) => {
          return (
            <li className="SubtitleViewer__Item">
              <Subtitle
                text={item.text}
              ></Subtitle>
            </li>
          );
        })
      }
    </ul>
  );
};

export default SubtitleViewer;
