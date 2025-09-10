import {
    type RouteConfig,
    route,
} from "@react-router/dev/routes"

export default[
    route("/","index.html"),
    route("/api","public/pages/api.html")
]satisfies RouteConfig