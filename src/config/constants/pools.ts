import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xbcE45daD36B2a5eC85e6e9Ff549BaaBB0cFb593C',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.wbnb,
    contractAddress: {
      97: '0x321785FaC6C15dE0a07D4cA17d7C1197DcA05ae0',
      56: '0xd623a32da4a632ce01766c317d07cb2cad56949b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
  },
  {
    sousId: 110,
    stakingToken: tokens.cake,
    earningToken: tokens.milky,
    contractAddress: {
      97: '0x1FFC8D8b6Aca596d197476fB9D9a0bb4acAfaaf5',
      56: '0xd623a32da4a632ce01766c317d07cb2cad56949b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
  },
  {
    sousId: 110,
    stakingToken: tokens.cake,
    earningToken: tokens.busd,
    contractAddress: {
      97: '0xce6E38945b3329d04490bE7057FF9A921A7031F1',
      56: '0xd623a32da4a632ce01766c317d07cb2cad56949b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
  },
]

export default pools
