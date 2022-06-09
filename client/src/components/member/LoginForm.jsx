import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user_action';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    //evnet
    const onEmailandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };

        /* 
            Dispatch 
            :Action Creator로 return 해준 Action을 파라미터로 받아
            store의 reducer에게 넘겨주는 역할을 해주는 열차
        */
        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                navigate('/');
            } else {
                alert(response.payload.message);
            }
        });
    };

    return (
        <div className="member-wrap">
            <div className="member-form">
                <form onSubmit={onSubmitHandler}>
                    <h2>LOGIN</h2>
                    <div className="input-type type1 w100">
                        <label className="sr-only">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={Email}
                            onChange={onEmailandler}
                            placeholder="이메일"
                        ></input>
                    </div>

                    <div className="input-type type1 w100">
                        <label className="sr-only">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={Password}
                            onChange={onPasswordHandler}
                            placeholder="비밀번호"
                        ></input>
                    </div>

                    <button type="submit" className="btn btn-type1 w100">
                        LOGIN
                    </button>
                </form>
                <div className="member-utils">
                    If you don't have an account,
                    <Link to="/join">Click here</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
