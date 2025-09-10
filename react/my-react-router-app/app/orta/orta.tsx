import type {Route} from './+types/orta'

export async function loader({ params }: Route.LoaderArgs){
  
} 
export default function Orta({
  params
}:Route.ComponentProps) {
    return (
      <>
        <div>Orta MAIN PAGE</div>
        <a href="/orta/byby">bybyyyyyyy</a>
        <a href="/byby">ana byby</a>
      </>
    ) 
  }
  