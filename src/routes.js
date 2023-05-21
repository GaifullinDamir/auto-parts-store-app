import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import PartPage from "./pages/PartPage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PART_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

//authRoutes - только для тех, кто авторизован.
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PART_ROUTE + '/:id',
        Component: PartPage
    }

];