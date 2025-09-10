import { Outlet } from 'react-router'

export default function AuthLayout() {
    return (
      <>
        <div>Welcome to authorization page</div>
        <Outlet></Outlet>
      </>
    ) 
  }
  