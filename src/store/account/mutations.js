import notifyAlert from 'src/services/notify-alert'

export const setAccount = function (state, { accountName, walletId }) {
  if (!state.accountName) {
    localStorage.walletId = walletId
    state.accountName = accountName
    state.connecting = false
    if (this.$router.currentRoute.fullPath !== state.path) {
      this.$router.push({ path: state.path })
    }
  }
}

export const clearAccount = function (state) {
  localStorage.removeItem('walletId')
  state.accountName = null
  if (this.$router.currentRoute.fullPath !== '/') {
    this.$router.push({ path: '/' })
  }
  notifyAlert(1, 'logout successful')
}

export const setConnecting = (state, connecting) => {
  state.connecting = connecting
}

export const setPath = function (state, pathe) {
  // console.log('pathe1', pathe)
  state.path = pathe
}

export const setProposalAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log(val) // test
  state.proposalInfo[attr] = val
}

// export const setUserAfterBalance = (state, balance) => { TODO eventually remove
// state.userAfterBalance = balance
// }

// Identify the account name of the proposer and store it
// Compare proposer account with current account - store the result
export const setwhitelistTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  if (val[0].idno === 1) { state.proposer = val[0].user }
  if (val[1].idno === 1) { state.proposer = val[1].user }
  if (val[2].idno === 1) { state.proposer = val[2].user }
  console.log('*whitelist proposer*', state.proposer)
}
