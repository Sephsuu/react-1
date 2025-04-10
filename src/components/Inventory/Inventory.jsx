import "./Inventory.css";
import "../../assets/css/Table.css";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";
import ButtonGroup from "../widgets/ButtonGroup.jsx";
import TotalStock from "./Table/TotalStock.jsx";
import LowStock from "./Table/LowStock.jsx";
import OutOfStock from "./Table/OutOfStock.jsx";
import IncomingStock from "./Table/IncomingStock.jsx"

import { Link } from 'react-router-dom';


import { useState } from "react";

export default function Inventory() {
    const [isHidden, setHidden] = useState(() => {
        const savedState = localStorage.getItem("buttonGroupHidden");
        return savedState === "true";
    });

    const hideButtonGroup = () => {
        setHidden(prevState => {
            const newState = !prevState;
            localStorage.setItem("buttonGroupHidden", newState);
            return newState;
        });
    };

    const [selectedTable, setSelectedTable] = useState("Total Stock");


    const inventoryStocks = {
        "stocks": {
            totalStock: 1000,
            outOfStock: 10,
            lowStock: 9,
            incomingStock: 100,
            availableStock: 1000,
            foodStock: 10,
            utilityStock: 10,
            totalAmount: 10000
        },
    }

    return(
        <div className="d-flex w-100">
            <NavigationBar />

            <div className="inventory w-100 pb-5 overflow-x-hidden overflow-y-auto">
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn toggle_hide d-flex align-items-center" onClick={ () => hideButtonGroup() }>
                        <h5 className="fw-bold mt-2">Inventory</h5> 
                        <div className="ms-2"><img src="/images/down.png" width="10px" /></div>
                    </button>
                    <Link to="/dashboard" className="home_btn me-4 d-none"><img src="/images/home.png" width="15px" /></Link>
                </div>
                <div className={ isHidden ? "d-none" : "inventory_button_group d-grid" }>
                    <ButtonGroup imagePath="/images/total_stock.png" count={ inventoryStocks.stocks.totalStock } description="Total Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/low_stock.png" count={ inventoryStocks.stocks.lowStock } description="Low Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/out-of-stock.png" stock={ inventoryStocks.stocks.outOfStock } description="Out of Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/incoming_stock.png" count={ inventoryStocks.stocks.incomingStock } description="Incoming Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/available_stock.png" count={ inventoryStocks.stocks.availableStock } description="Available Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/available_stock.png" count={ inventoryStocks.stocks.availableStock } description="Food Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/available_stock.png" count={ inventoryStocks.stocks.availableStock } description="Utility Stock" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="" stock={ inventoryStocks.stocks.availableStock } description="Total Amount"></ButtonGroup>
                </div>

                {
                    selectedTable === "Total Stock" ? (
                        <TotalStock />
                    ) : selectedTable === "Low Stock" ? (
                        <LowStock />
                    ) : selectedTable === "Out of Stock" ? (
                        <OutOfStock />
                    ) : selectedTable === "Incoming Stock" ? (
                        <IncomingStock />
                    ) : null
                    
                    
                }
            </div>

        </div>
    )
}

