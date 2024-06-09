import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Steps, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import '../context/styles/About.css'

export const About = () => {

    return(
        <AboutFrame>
            <Contents>
                <Header1>For All Web3 Users</Header1>
                <Span1>Transactions Tracking Application</Span1>
                <Header2>What is this?</Header2>
                <Sapn2>このアプリケーションは特定のアドレスが行った過去の全トランザクションを解析し、最も関連性の高いアドレスをトレーシングする、全Web3ユーザーのためのアプリケーションです。</Sapn2>
                <FlexFrame>
                    <InfoFrame>
                        <Span3>投資家</Span3>
                            <ListFrame>
                                <ul style={{fontSize: '24px', color : 'white'}}>
                                    <li>特定のイーサリアムアドレスの取引履歴を調べ、信頼性の高いアドレスを特定する。</li>
                                    <li>取引量の多いアドレスを分析し、潜在的な市場の動向を把握する。</li>
                                </ul>
                            </ListFrame>
                    </InfoFrame>
                    <InfoFrame>
                        <Span3>リサーチャー</Span3>
                        <ListFrame>
                            <ul style={{fontSize: '24px', color : 'white'}}>
                                <li>イーサリアムネットワーク上での取引行動を研究し、市場の動向や取引パターンを分析する。</li>
                                <li>特定のアドレスの活動履歴を追跡し、不正行為の検出や防止に役立てる。</li>
                            </ul>
                        </ListFrame>
                    </InfoFrame>
                </FlexFrame>
                <Header3>Feture</Header3>
                <ProgressDiv>
                    <Steps
                        
                        direction="vertical"
                        size="default"
                        current={1}
                        items={[
                            {title: 'フェーズ1', description: 'トランザクショントレース機能リリース'},
                            {title: 'フェーズ2', description: 'NFTトレース機能リリース'},
                            {title: 'フェーズ3', description: 'トランザクショントレース機能複数通貨対応'},
                        ]}
                    />
                </ProgressDiv>
                <Header3>Developer</Header3>
                <FlexFrame style={{marginTop: '80px'}}>
                        <div style={{ marginLeft : '140px'}}>
                            <Avatar size={120} icon={<UserOutlined></UserOutlined>} ></Avatar>
                            <div style={{marginTop: '10px', color: 'white'}}>
                                <span style={{display: 'block', textAlign: 'center', width : '100%'}}>
                                    まいける。
                                </span>
                            </div>
                        </div>
                        <div style={{width: '540px', marginLeft : '40px', color: 'white'}}>
                            都内在住システムエンジニア。<br></br>
                            フロントはReact、バックエンドはJavaが得意。JavaGold取得済み。<br></br>
                            新しいものが好き。大学生の頃から仮想通貨が好きでさまざま銘柄で遊んできました。<br></br>
                            戦績は聞かないでください。<br></br>
                            このAppは学生時代の仮想通貨業界にインターン中、リサーチ業務の最中にこんなのあったらいいなを思い出したので作りました。<br></br>
                        </div>
                </FlexFrame>
            </Contents>
        </AboutFrame>
    )
}

const AboutFrameAnimation = keyframes`
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const AboutFrame = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto; /* Content内でスクロールを有効にする */
    max-height: 100vh; /* 縦スクロールが必要な場合の最大高さ */
    background: transparent;
    animation: ${AboutFrameAnimation} 1s forwards;
`;

const Contents = styled.div`
    height: 3100px;
`

const Header1 = styled.h1`
    font-size: 128px;
    color: white;
    text-align: center;
`

const Header2 = styled(Header1)`
    margin-top: 400px;
`

const Header3= styled(Header1)`
    margin-top: 40px;
`

const Span1 = styled.span`
    display: block;
    font-size: 32px;
    color: white;
    text-align: center;
    margin: 0 auto;
    margin-top: -80px;
`
const Sapn2 = styled(Span1)`
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
`

const Span3 = styled(Span1)`
    top: 0%;
    margin-top: 10px;
`

const FlexFrame = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
`


const InfoFrame = styled.div`
    width: 350px;
    height: 400px;
    border: 2px solid white ;
    margin: 20px;
    overflow-y: auto;
`

const ListFrame = styled(InfoFrame)`
    width: 100%;
    height: 68%;
    margin-left: -10px;
    border: 0;
`

const ProgressDiv = styled.div`
    width: 10%;
    justify-content: center;
    margin: 0 auto;
`