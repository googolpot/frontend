import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'POT',
    lpAddresses: {
      97: '0x9faDe4B80a05a8d49f6f8852E1Bd6Ff2edf259Ca',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'POT-WBNB LP',
    lpAddresses: {
      97: '0x321785FaC6C15dE0a07D4cA17d7C1197DcA05ae0',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'MILKY-POT LP',
    lpAddresses: {
      97: '0x1FFC8D8b6Aca596d197476fB9D9a0bb4acAfaaf5',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.cake,
    quoteToken: tokens.milky,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-POT LP',
    lpAddresses: {
      97: '0xce6E38945b3329d04490bE7057FF9A921A7031F1',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
]

export default farms
