import notifyAlert from 'src/services/notify-alert'
import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from '../../utils/proton'
import { Notify } from 'quasar'

// get verification info on user eligibility for survey TODO rewrite
export function getUserInfo (state) {
  state.dispatch('getActionProposal')
}

// retrieve current user info TODO rewrite
export async function getActionProposal (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'proposals',
    limit: -1
  })
  const val = {
    key: 'proposalInfo',
    value: result.rows[0]
  }
  state.commit('setProposalAttrVal', val)
}

export const setpath = function ({ commit }, pathe) {
  console.log(this.$route.fullPath)
  console.log('whatever', pathe)
  commit('setPath', pathe)
  // this.$router.push('/')
}

// run action query from the blockchain TODO replace whole function
export async function getVersionQuery ({ state }, accountName) {
  const actions = [{
    account: process.env.APP_NAME,
    name: 'version',
    authorization: [{
      actor: accountName,
      permission: 'active'
    }],
    data: {
      eosaccount: accountName
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Version identified'
    }
    Notify.create({
      message: responseMessage,
      color: 'positive'
    })
    return result
  } catch (e) {
    console.log(e)
    return e
  }
}

// sample getTable TODO remove later
export async function getwhitelistTable (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'whitelist',
    limit: 3
  })
  const val = {
    // key: accountName,
    value: result.rows
  }
  state.commit('setwhitelistTableAttrVal', val)
}
