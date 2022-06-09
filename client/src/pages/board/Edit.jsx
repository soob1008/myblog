import React from 'react';
import Layout from '../../components/Base/Layout';
import WriteForm from '../../components/board/WriteForm';

const Edit = () => {
    return (
        <Layout>
            <div className="inner">
                <WriteForm isEdit={true} />
            </div>
        </Layout>
    );
};

export default Edit;
