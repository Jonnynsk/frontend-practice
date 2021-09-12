import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router'

import { privateRoutes, publicRoutes, RouteNames } from '../router'

const AppRouter: FC = () => {

    const auth = true

    return (
        auth
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
                <Redirect to={RouteNames.EVENT}/>
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
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    )
}

export default AppRouter