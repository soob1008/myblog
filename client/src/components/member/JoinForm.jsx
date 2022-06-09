import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinUser } from '../../actions/user_action';
import { useNavigate } from 'react-router-dom';

const JoinForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };

    //submit
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야합니다.');
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
        };

        dispatch(joinUser(body)).then((response) => {
            console.log(response);
            if (response.payload.success) {
                alert('회원가입 완료');
                navigate('/login');
            } else {
                alert(
                    response.payload.message
                        ? response.payload.message
                        : '회원가입에 실패하였습니다.'
                );
            }
        });
    };

    return (
        <div className="member-wrap">
            <div className="member-form">
                <form onSubmit={onSubmitHandler}>
                    <h2>JOIN</h2>
                    <div className="input-type type1 w100">
                        <label className="sr-only">Id</label>
                        <input
                            type="text"
                            name="email"
                            value={Email}
                            onChange={onEmailHandler}
                            placeholder="이메일"
                        ></input>
                    </div>
                    <div className="input-type type1 w100">
                        <label className="sr-only">Name</label>
                        <input
                            name="name"
                            value={Name}
                            onChange={onNameHandler}
                            placeholder="이름"
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
                    <div className="input-type type1 w100">
                        <label className="sr-only">Confirm Password</label>
                        <input
                            type="password"
                            name="passwordConfirm"
                            value={ConfirmPassword}
                            onChange={onConfirmPasswordHandler}
                            placeholder="비밀번호 확인"
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-type1 w100">
                        REGISTER
                    </button>
                </form>
                <div className="member-utils">
                    If you have an account,
                    <Link to="/login">Click here</Link>
                </div>
            </div>
        </div>
    );
};

export default JoinForm;
