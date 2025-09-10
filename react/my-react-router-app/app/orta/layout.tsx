import { Outlet, useParams } from 'react-router'

export default function OrtaLayout() {
    return (
      <>
        <div>Orta HEADER</div>
        <Outlet></Outlet>
        <div>Orta FOOTER</div>
      </>
    ) 
  }
  