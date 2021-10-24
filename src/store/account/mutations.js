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

// export const SET_USER_MODE = function (state, mode) {
// state.user_mode = mode
// }

export const setUserModeAct = (state, activevalue) => {
  state.user_mode = activevalue
}
