import Layout from '../components/Base/Layout';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Layout>
            <div className="inner about">
                {/* about */}
                <div className="about-sec01">
                    <h2 className="title large">
                        Frontend<span className="underline"></span>
                    </h2>
                    <div className="me">
                        <div className="left">
                            <img src={require('../images/me.png')} alt="" />
                        </div>
                        <div className="right">
                            <ul>
                                <li className="name">
                                    Kim Su-Been(1994.10.08)
                                </li>
                                <li>010.3249.2471</li>
                                <li>1008sb354@gmail.com</li>
                                <li>
                                    <a target="_blank" className="btn btn-type1 medium radius" href='https://soob108.notion.site/Front-End-Developer-d807636973ed4b409684c47389d52bc7'>Resume</a>
                                    <a target="_blank" className="btn btn-type1 medium radius" href='https://github.com/soob1008'>Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* skill */}
                <div className="about-sec02">
                    <h2 className="title large">
                        Skill<span className="underline"></span>
                    </h2>
                    <ul>
                        <li></li>
                    </ul>
                    <ul className="skill-img-list">
                        <li>
                            <img
                                src={require('../images/html.png')}
                                alt="html"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/css.png')}
                                alt="css"
                                width={70}
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/js.png')}
                                alt="javascript"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/scss.png')}
                                alt="scss"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/react.png')}
                                alt="react"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/react_native.png')}
                                alt="react-native"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/redux.png')}
                                alt="redux"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../images/nodejs.png')}
                                alt="nodejs"
                            />
                        </li>
                    </ul>
                    <ul className="skill-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-Native</li>
                        <li>Redux</li>
                        <li>Redux</li>
                        <li>Node.js + express</li>
                    </ul>
                </div>
                {/* career */}
                <div className="about-sec03">
                    <div className="career">
                        <h2 className="title large">
                            Career<span className="underline"></span>
                        </h2>       
                        <div className="cr">
                            <dl>
                                <dt>엠싱크</dt>
                                <dd>2020.07 - 2022.04</dd>
                            </dl>
                            <p>
                                API를 활용한 데이터 입출력<br/>
                                사용자 인터페이스 작업
                            </p>
                            <ul>
                                <li>- 동원몰 앱 구축</li>
                                <li>- 미래엔, 유앤어스 웹 개발</li>
                                <li>- SDG 설문조사 기능 추가 개발</li>
                            </ul>
                        </div>
                    </div>
                    <div className="career">
                        <h2 className="title large">
                            Education<span className="underline"></span>
                        </h2>
                        <div className="cr">
                            <dl>
                                <dt>에이콘 아카데미 웹 개발자 양성과정</dt>
                                <dd>2017.03 - 2017.09</dd>
                            </dl>
                        </div>
                        <div className="cr">
                            <dl>
                                <dt>건국대학교 글로컬캠퍼스 컴퓨터공학과 학사 졸업</dt>
                                <dd>2013.03 - 2017.02</dd>
                            </dl>
                        </div>
                    </div>
                  
                </div>
                <div className="about-sec03">
                    <div className="career">
                        <h2 className="title large">
                            Certification<span className="underline"></span>
                        </h2>
                        <div className="cr">
                            <dl>
                                <dt>정보처리기사</dt>
                                <dd>2016.07</dd>
                            </dl>
                        </div>
                    </div>
                 </div>
                {/* skill */}
            </div>
        </Layout>
    );
};

export default About;
