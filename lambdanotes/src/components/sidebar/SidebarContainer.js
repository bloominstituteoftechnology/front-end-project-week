import React from "react";
import SidebarButtons from "./SidebarButtons";
import SideBarHeader from "./SidebarHeader";

function SideBarContainer() {
	return (
		<div className="sidebar-container">
			<SideBarHeader />
			<SidebarButtons />
		</div>
	);
}

export default SideBarContainer;
