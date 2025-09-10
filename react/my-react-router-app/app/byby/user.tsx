import type {Route} from './+types/user'

// export async function loader({params}: Route.LoaderArgs){

// }

export default function User({
    params
}: Route.ComponentProps){
    return(
        <div>
            <h1>User Page Here</h1>
            <h2>{params.username}</h2>
            <h2></h2>
        </div>
    )

}
