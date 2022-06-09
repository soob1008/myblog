import React from 'react';
import Layout from '../../components/Base/Layout';
import WriteForm from '../../components/board/WriteForm';

const Write = () => {
    return (
        <Layout>
            <div className="inner">
                <div className="board-write">
                    <h2 className="title">Write your project!</h2>
                    <WriteForm />
                </div>
            </div>
        </Layout>
    );
};

export default Write;
