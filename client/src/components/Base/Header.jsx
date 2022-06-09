import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../actions/user_action';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header className={'header ' + (scrollPosition > 50 ? 'on' : '')}>
            <div className="hd-inner">
                <Link to="/" className="logo">
                    MyBlog
                </Link>
                <HeaderContent />
            </div>
        </header>
    );
};

const HeaderMobile = (props) => {
    const [isOpen, setOpen] = useState(false);

    const onOpenHandler = (e) => {
        setOpen(!isOpen);
    };

    return (
        <div className="hd-toggle">
            <button
                type="button"
                className={`hd-menu-btn ${isOpen && 'active'}`}
                onClick={onOpenHandler}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`hd-menu-list ${isOpen && 'active'}`}>
                <ul onClick={onOpenHandler}>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/board/list">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="hd-btn" onClick={onOpenHandler}>
                    {props.login ? (
                        <button
                            className="btn btn-type1 medium radius"
                            onClick={props.loginHandler}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-type1 medium radius"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

const HeaderPc = (props) => {
    return (
        <div className="hd-gnb">
            <nav>
                <div className="gnb">
                    <Link to="/about">About</Link>
                    <Link to="/board/list">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <div className="hd-btn">
                {props.login ? (
                    <button
                        className="btn btn-type1 medium radius"
                        onClick={props.loginHandler}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="btn btn-type1 medium radius">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

const HeaderContent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState();

    //media query - react-responsive
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)',
    });

    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response.data));
    }, []);

    useEffect(() => {
        dispatch(auth()).then((response) => {
            setLogin(response.payload.isAuth);
        });
    });

    const onLogoutHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            if (response.data.success) {
                alert('로그아웃 되었습니다.');
                navigate('/');
            } else {
                alert('로그아웃 실패');
            }
        });
    };

    return (
        <div>
            {isTablet ? (
                <HeaderMobile login={login} loginHandler={onLogoutHandler} />
            ) : (
                <HeaderPc login={login} loginHandler={onLogoutHandler} />
            )}
        </div>
    );
};

export default Header;
