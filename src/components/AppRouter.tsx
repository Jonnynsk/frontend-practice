import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector'

import { privateRoutes, publicRoutes, RouteNames } from '../router'

const AppRouter: FC = () => {

    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    )
}

export default AppRouter