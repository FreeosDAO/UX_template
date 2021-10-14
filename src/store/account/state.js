export default () => ({
  accountName: null,
  autoLogout: false, // Automatic logout at the end of each page not used yet
  connecting: false,
  userType: 0, // 1- proposer, 2,3 - voters, 4 - other
  path: '/',
  active: true,
  proposer: '', // proposer account name
  isProposer: false,
  proposalInfo: {
    proposalInfo: {
      key: '',
      eosaccount: 'empty account',
      roi_target_cap: '',
      proposal_percentage: '',
      locked: '',
      expires_at: '',
      threshold: '',
      rates_left: '',
      accrued: ''
    }
  }
})
