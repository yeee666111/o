import { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface Iprops {
  children?: ReactNode
}

const Discover: React.FunctionComponent<Iprops> = (props: Iprops) => {
  return (
    <>
      <div>
        <NavBar />
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default memo(Discover)
