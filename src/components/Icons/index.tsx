import { IconPrefix, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faS,
  faPlus,
  IconName,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

library.add(faB, faS, faPlus, faEllipsis);
interface IconProps {
  styleIcon: IconPrefix;
  nameIcon: IconName;
  classname: string;
}
function MyIcon({ styleIcon = "fas", nameIcon, classname }: IconProps) {
  return <FontAwesomeIcon icon={[styleIcon, nameIcon]} className={classname} />;
}

export default MyIcon;
