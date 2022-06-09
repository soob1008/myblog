import React from 'react';
import Layout from '../../components/Base/Layout';
import JoinForm from '../../components/member/JoinForm';

const Join = () => {
    return (
        <Layout>
            <div className="inner">
                <JoinForm />
            </div>
        </Layout>
    )
}

export default Join;