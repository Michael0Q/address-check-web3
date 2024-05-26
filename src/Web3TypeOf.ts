export type Transaction = {
        "blockNumber": string,
        "timeStamp": string,
        "hash": string,
        "nonce": string,
        "blockHash": string,
        "transactionIndex": string,
        "from": string,
        "to": string,
        "value": string,
        "gas": string,
        "gasPrice": string,
        "isError": string,
        "txreceipt_status": string,
        "input": string,
        "contractAddress": string,
        "cumulativeGasUsed": string,
        "gasUsed": string,
        "confirmations": string,
        "methodId": string,
        "functionName": string
    }[];

    export type Transactions = {
        "status": string,
        "message": string,
        "result": Transaction
    }

    export const sampleTransactions: Transactions = {
        status: "1",
        message: "OK",
        result: [
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "A",
            to: "C",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345679",
            timeStamp: "1618912557",
            hash: "0xa1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0",
            nonce: "1",
            blockHash: "0xdef123ghi456jkl789mno012pqr345stu678vwx901yz234abc567890def123gh",
            transactionIndex: "1",
            from: "A",
            to: "B",
            value: "10", // 0.5 ETH in Wei
            gas: "10",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "42000",
            gasUsed: "21000",
            confirmations: "5",
            methodId: "0x",
            functionName: ""
        },       {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "C",
            to: "A",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "A",
            to: "D",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "B",
            to: "A",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "A",
            to: "E",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "A",
            to: "D",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "A",
            to: "C",
            value: "19", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
        {
            blockNumber: "12345678",
            timeStamp: "1618912457",
            hash: "0x5d9b9fd00db73897edeeeb81cb2a1e7af9874b030d6c9d5c9a2e7e7a68abf2b5",
            nonce: "0",
            blockHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abc123de",
            transactionIndex: "0",
            from: "F",
            to: "A",
            value: "10", // 1 ETH in Wei
            gas: "21000",
            gasPrice: "5000000000", // 5 Gwei
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "10",
            methodId: "0x",
            functionName: ""
        },
    ]
};