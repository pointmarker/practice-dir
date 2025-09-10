import { Outlet } from 'react-router'

export default function Nested(){
    return(
        <div>
            <div>
                <a href="/nested">home nested</a>
                <a href="/nested/nested1">nested1</a>
                <a href="/nested/nested2">nested2</a>
            </div>
            <h1>Nested Main Page</h1>
            <Outlet></Outlet>
        </div>
    )

}
