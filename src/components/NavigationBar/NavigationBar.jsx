import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";

function NavigationBar() {

    let role = "Owner", routes;

    role === "Owner" ? (
        routes = [
            { "/admin": ["/images/admin.png", "Admin"] }, 
            { "/branches": ["/images/branches.png", "Branches"] }, 
            { "/inventory": ["/images/inventory.png", "Inventory"] }, 
            { "/messaging": ["/images/messaging.png", "Messaging"] },
            { "/salesReport": ["/images/sales_report.png", "Sales Report"] },
            { "/humanResource":  ["/images/human_resource.png", "Human Resource"] },
        ]
    ) : routes = [
            { "/inventory": ["/images/inventory.png", "Inventory"] }, 
            { "/messaging": ["/images/messaging.png", "Messaging"] },
            { "/salesReport": ["/images/sales_report.png", "Sales Report"] },
            { "/humanResource":  ["/images/human_resource.png", "Human Resource"] },
    ]

    return (
        <div className="navigation_bar">

            <Sidebar routes={ routes } />

            <BottomBar routes={ routes } />

        </div>
    )
}

export default NavigationBar;