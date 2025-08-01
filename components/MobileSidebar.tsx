// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidbar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/" className="link-logo">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>
        <SidebarComponent ref={(s) => (sidebar = s!)} />
        <button onClick={toggleSidbar}>
          <img
            src="/assets/icons/menu.svg"
            alt="menu"
            className="size-7 cursor-pointer"
          />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidbar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
