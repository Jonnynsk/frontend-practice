import { FC } from 'react'
import { useHistory } from 'react-router'
import { Layout, Menu, Row } from 'antd'

import { RouteNames } from '../router'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const Navbar: FC = () => {

    const router = useHistory()
    const dispatch = useDispatch()
    const { isAuth, user } = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify='center'>
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())} key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    )
}

export default Navbar