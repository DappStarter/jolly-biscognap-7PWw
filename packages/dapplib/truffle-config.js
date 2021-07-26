require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach cruise snow hospital guess indoor foster general'; 
let testAccounts = [
"0xad5adcbbf36ee0fee77b5dc1e83712d236ae40eb5cded298d0721b430a93a4ee",
"0x4c022237309a646549e5105fe20eeb9e26345b505e4fc9ef59ce5f4e22aaf17c",
"0x40cea5e515984879f6e5d093721ac3f390105167c212ff9f24662a63a224e407",
"0x86494930d54d99a7843aa7c80db1cb05e3e2f285955d5ce879e37e4086f6390c",
"0xed32bd15b7100e0e4a11748ba0385417ef825ed818928f280c03f372716e1ed0",
"0x36a37328359f19a185cb5442bfd0f919e5c5c138e8c0b63bd2e3bc579e0f3f66",
"0x2843af09232998890c97900c1385353a4c3a5964f604adab681481637cb309fa",
"0xe445f6bee93e04f47f9dd9968895b061ed52f39f9f2b6c4ab61b1eb9021e2b28",
"0x8aff819c9f718f1723f1386964d68e929e14c86eb280807a1c705991bcf18f78",
"0x95b5022792cf6cad9d9c45dbf1f83d7839bd8df74aa03543cc76ad4384544c23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


