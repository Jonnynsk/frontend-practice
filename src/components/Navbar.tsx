import { FC } from 'react'
import { useHistory } from 'react-router'
import { Layout, Menu, Row } from 'antd'

import { RouteNames } from '../router'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Navbar: FC = () => {

    const router = useHistory()
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify='center'>
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>Jonnynsk</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => console.log('Quit')} key={1}>Выйти</Menu.Item>
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