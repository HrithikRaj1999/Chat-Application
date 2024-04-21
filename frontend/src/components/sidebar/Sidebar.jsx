import Conversations from "./Conversations";
import Footer from "./Footer";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Footer />
    </div>
  );
};
export default Sidebar;
