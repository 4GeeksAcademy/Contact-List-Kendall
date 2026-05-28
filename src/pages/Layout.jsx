import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"

// Base component that maintains the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Outlet />
        </ScrollToTop>
    )
}