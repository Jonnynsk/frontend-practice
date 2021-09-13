import { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {

    const dispatch = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        dispatch(AuthActionCreators.login(username, password))
    }

    return (
        <Form 
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                    {error}
                </div>}
            <Form.Item
                label='Имя пользователя'
                name='username'
                rules={[rules.required('Введите имя пользователя!')]}
            >
                <Input 
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label='Пароль'
                name='password'
                rules={[rules.required('Введите пароль!')]}
            >
                <Input 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;