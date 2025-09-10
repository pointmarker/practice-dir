import type { useLoaderData } from 'react-router';
import type {Route} from './+types/orta'

export async function loader({ params }: Route.LoaderArgs){
  const { "*":splat } = params;
  return {splat}
} 

export default function OrtaCatchAll({
    params,
    loaderData,
    actionData,
    matches
  }:Route.ComponentProps) {
    return (
      <>
        <div>Empty Page</div>
        <div>loader data: {JSON.stringify(loaderData)}</div>
        <div>action data: {JSON.stringify(actionData)}</div>
        <div>route parameters : {JSON.stringify(params)}</div>
        <div>matched routes: {JSON.stringify(matches)}</div>
        <a href="/">go to the main menasasu</a>
      </>
    ) 
  }
  
  