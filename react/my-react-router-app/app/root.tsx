import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

async function logginMiddleware(
  {request,context},
  next,
){
  console.log(
    `${new Date().toISOString()} ${request.method} ${request.url}`
  );
  const start = performance.now()
  const response = await next()
  const duration = performance.now() - start
  console.log(
    `${new Date().toString()} Response ${response.status} (${duration}ms) `
  )
  return response
}

export const unstable_middleware = [logginMiddleware]

export default function App() {
  return <Outlet />;
}




