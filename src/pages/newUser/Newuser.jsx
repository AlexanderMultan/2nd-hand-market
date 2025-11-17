import HeaderBackOffice from "@/HeaderBackOffice";
import AddNewUser from "@/AddNewUser";

export const Newuser = () => {
    return (
        <div style={{ backgroundColor: "var(--color-gray-alt)" }}>
            <HeaderBackOffice />
            <AddNewUser />
        </div>
    );
};