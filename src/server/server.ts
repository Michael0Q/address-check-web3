import express from "express";
import { Request, Response } from "express";
import Web3, { Web3Eth } from 'web3'
import { Network, Alchemy } from 'alchemy-sdk';

const app: express.Express = express();
const port = 8000;
app.use(express.json());// body-parser setting
const alchemy_configs = {
    apiKey: "Em1CQzfO5looteUOyNHHMNAYyYc8hqPO",
    network: Network.ETH_MAINNET,
};
const INFURA = {
    APIKEY : '493914d0f6444bc2981061ce1a337e40',
    URL : 'https://arbitrum-mainnet.infura.io/v3/493914d0f6444bc2981061ce1a337e40'
};
// const alchemy = new Alchemy(alchemy_configs);
const web3 = new Web3(INFURA.URL);

const getBalance = async (address : string) => {
    web3.eth.getBalance(address, 'latest')
        .then((elt) => {
            console.log(web3.utils.fromWei(elt, 'ether'));
        });
}
getBalance('0xE5095A594a76Bd703CBa44493530C888fDEA1Aed')

app.post("/addAddress", (req: Request, res: Response) => {
    const walletInfo = {
        'name' : req.body.name,
        'address' : req.body.address,
    };
    //ここにdb-insert
    res.send(walletInfo);
});

app.get("/getAmount", (req: Request, res: Response) => {
    //下記でリクエストquery(address)を取得できる
    const address : string = req.query.address as string;
    console.log(address);
    web3.eth.getBalance(address, 'latest')
    .then((elt) : void => {
        res.status(200).send(web3.utils.fromWei(elt, 'ether').toString());
    });
});

app.get("/test", (req: Request, res: Response) => {
    console.log('request');
    const walletInfo = {
        "name" : 'mike',
        "address" : "0x23nD8cuwt4nu9e0w9uf4tgfn3roe",
        amount : 0
    }
    res.send(walletInfo);
});

//以下サーバー起動コマンド
//npx ts-node-dev --respawn server.ts
app.listen(port, () => {
    console.log(`port ${port} でサーバー起動中`);
});