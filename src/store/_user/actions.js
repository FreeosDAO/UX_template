import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from 'src/utils/proton'
import { Notify } from 'quasar'
// import ProtonSDK from 'src/utils/proton'
// import { Notify } from 'quasar'
// import notifyAlert from 'src/services/notify-alert'
// import { RpcError } from 'eosjs'

// retrieve all NFTs info
export async function getNftTable (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'nfts',
    limit: 20
  })
  const val = {
    key: 'Nft_Data',
    value: result.rows
  }
  state.commit('setNftTableAttrVal', val)
  state.commit('setCount', result.rows.length)
}

export async function actionOwnerChange ({ state }, data) {
  const { currentAccountName, targetAccountName, nftKey } = data
  const actions = [{
    account: process.env.APP_NAME,
    name: 'regchown',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      userfrom: currentAccountName,
      userto: targetAccountName,
      nft_id: nftKey
    }
  }]

  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Ownership Change Successful'
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
