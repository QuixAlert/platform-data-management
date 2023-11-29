// LoginPage.js
import React, { useState } from 'react';
import { Button, Card, Form, Input, Space } from 'antd';
import './style.css';
import { useMutation } from 'react-query';
import { signIn } from '../../api/user';
import {useAuth} from "./AuthProvider";
import  QuixAlertLogo from '../../assets/images/QuixAlertLogo.png';

function LoginPage() {
    const { login, setTokens } = useAuth();

    const userLoginMutation = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            login();
            setTokens(data)
        }
    });

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; checked: any; type: any; }; }) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    return (
        <Card className="card-login">

                
            <h1 className="title"> QuixAlert login!</h1>

            <Form className="login-form">
                <Form.Item>
                    <Input
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Space></Space>
                <Form.Item className="login-btn">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={() =>
                            userLoginMutation.mutate({
                                email: formData.username,
                                password: formData.password,
                            })
                        }
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default LoginPage;
