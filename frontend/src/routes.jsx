import {ListCharacters} from "./views/Characters";
import {Login , Register , ListUsers } from "./views/User";
const dashboardRoutes = [

  {
    path: "/characters",
    name: "Characters",
    component: ListCharacters,
    layout: "/admin"
  }, 
  {
    path: "/users",
    name: "ListUser",
    component: ListUsers,
    layout: "/admin"
  }, 
{
    path: "/sign-in",
    name: "User Profile",
    component: Login,
    layout: "/auth"
},
{
    path: "/sign-up",
    name: "User Profile",
    component: Register,
    layout: "/auth"
}
];

export default dashboardRoutes;
