import { Link } from "@/i18n/routing";
import SideMenu from "../general/SideMenu";
import Teleport from "../Teleport";


const MobileMenu = ({
    show,
    items,
    title,
    onClose,
  }: {
    show: boolean;
    items: Array<{ value: string; path: string }>;
    title: string;
    onClose: () => void;
  }) => {
    if (!show) return null;
  
    return (
      <Teleport to="body">
        <SideMenu close={onClose} title={title}>
          <nav>
            <ul className="flex list-none flex-col px-4">
              {items.map((item) => (
                <li onClick={onClose} key={item.path}>
                  <Link
                    href={item.path}
                    className="block py-2 text-sm text-list-color transition-colors hover:text-gray-400"
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SideMenu>
      </Teleport>
    );
  };
  export default  MobileMenu;