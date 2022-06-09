import React from 'react';
import Layout from '../../components/Base/Layout';
import LoginForm from '../../components/member/LoginForm';

const Login = () => {
    return (
        <Layout>
            <div className="inner">
                <LoginForm />
            </div>
        </Layout>
    );
};

export default Login;
