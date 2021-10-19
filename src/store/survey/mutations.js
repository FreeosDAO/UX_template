import notifyAlert from 'src/services/notify-alert'

export const setPath = function (state, pathe) {
  // console.log('pathe1', pathe)
  state.path = pathe
}
// TODO rewrite or delete
export const setProposalAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log(val) // test
  state.proposalInfo[attr] = val
}

// Identify the account name of the proposer and store it // TODO Rewrite or delete
// Compare proposer account with current account - store the result
export const setwhitelistTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  if (val[0].idno === 1) { state.proposer = val[0].user }
  if (val[1].idno === 1) { state.proposer = val[1].user }
  if (val[2].idno === 1) { state.proposer = val[2].user }
  console.log('*whitelist proposer*', state.proposer)
}
