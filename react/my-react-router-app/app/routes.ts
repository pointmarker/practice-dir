import { type RouteConfig,
                    index,
                    route,
                    layout,
                    prefix
} from "@react-router/dev/routes";

import type {Config} from '@react-router/dev/config'

export default [
    index("routes/home.tsx"),

    ...prefix('auth',[
        layout("./auth/layout.tsx",[
            index("./auth/index.tsx"),
            route("login","./auth/login.tsx"),
            route('register',"./auth/register.tsx")
        ]),
        
    ]),
    ...prefix("orta",[
        layout("./orta/layout.tsx",[
            index("./orta/orta.tsx"),
            route("byby","./orta/ortabyby.tsx")
        ]),
        route("*","./orta/orta.catchall.tsx")
    ]),
    ...prefix("byby",[
        index("./byby/byby.tsx"),
        route("/user/:username?/","./byby/user.tsx"),
    ]),

    

    route("nested","./nested/nested.tsx",[ // urls will be nested/nested1 , nested/nested2 like prefix
        route('nested1',"./nested/nested1/nested1.tsx"),
        route('nested2','./nested/nested2/nested2.tsx')
    ]),
    // route("/*","./catchall.tsx") // error handler
    
] satisfies RouteConfig;
