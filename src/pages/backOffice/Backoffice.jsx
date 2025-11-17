import React from 'react';
import {Header} from "@/Header";
import HeaderBackOffice from "@/HeaderBackOffice";
import MaintainItems from "@/MaintainItems";

export const Backoffice = () => {
    return (
            <div style ={{
                backgroundColor: "var(--color-gray-alt)",
            }}>
                <HeaderBackOffice/>
                <MaintainItems />
            </div>
    );
};