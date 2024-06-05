import { APIKEY } from "../context/config/config"; 

export const getListTransactions = async (address: string) => {
    const URI = 'https://api.etherscan.io/api'.concat(
        '?module=account',
        '&action=txlist',
        `&address=${address}`,
        '&startblock=0',
        '&endblock=99999999',
        '&page=1',
        '&sort=asc',
        `&apikey=${APIKEY}`,
    ); 
    return fetch(URI)
        .then(e => e.json())
        .then(e => e.result);
}

export const isValidAddress = (address : string) : boolean => {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
}