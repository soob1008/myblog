import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../actions/user_action';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
    /*
        option - null, true, false
        null: 아무나 출입
        true: 로그인한 유저만 출입 O
        false: 로그인한 유저는 출입 X
    */

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then((response) => {
                // console.log(response);
                // console.log(response.payload.isAuth);
                //로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    //로그인해야 접근 가능한 페이지
                    if (option) {
                        navigate('/login');
                    }
                } else {
                    //로그인 한 상태
                    //사용자가 admin 페이지 접근
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/');
                    } else {
                        //로그인한 유저가 출입 불가능한 페이지에 접근할 때
                        if (option === false) {
                            navigate('/');
                        }
                    }
                }
            });
        }, []);

        return <SpecificComponent />;
    }
    return AuthenticationCheck;
}
