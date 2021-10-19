import notifyAlert from 'src/services/notify-alert'

// TODO Sample
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

// TODO Sample
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

export const setProposalAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log(val) // test
  state.proposalInfo[attr] = val
}

