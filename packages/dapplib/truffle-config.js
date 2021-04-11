require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture hill fresh skull drift repeat night proud include area bottom gesture'; 
let testAccounts = [
"0x8d5795785d20e109d0fc78f41f8aec1d6fae2cd3a1ab7471bcf86a1a18d33d88",
"0x685c3646c41750dedcab00284ceee3a2b06263f464c4f2f431f743b44f292d87",
"0x72b923101b6f2278949979ef5a27119b7e29a9387fdc82e0abb5cbc956c62185",
"0xe04caebbd0ef7677193915b651bcfbfd789945a7deea07e385e5fb12be1ccb39",
"0xef30977df56c10dcb45e321d60c020ce1ca10e3a0b42a1b59c2ee4d4e9be458b",
"0x0582ef7e350269a488238566a0dc8daa5667eb448a07dfe3deb265dfc3e685c9",
"0x2a698c29c4b760c2317b7ded7c6f81dfd549177b5a121447369e1b27230da1f4",
"0x1295d160d603cf564932a8baa3784d4086cc6c522b8f45cc3176dcdba4f6a3db",
"0x9810b2067fcb69a8f590f481dc6176b0c86bb2c8c186d326f2a41730c7ab0585",
"0xbc46988a7476620b9e2c112e9a5e7b00f3c75539fc0d027a07becffa6557c58f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

