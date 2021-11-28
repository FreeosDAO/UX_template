// S-V-R Sending results of single user interactions to back-end to summarize
// import notifyAlert from 'src/services/notify-alert'
import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from '../../utils/proton'
import { Notify } from 'quasar'
// import { RpcError } from 'eosjs'
// ---
// surveyAdd
// Where called: survey.vue
export async function surveyAdd ({ state }, data) {
  const
    {
      currentAccountName, q1radio1, q2slider1, q3radio2, q4slider2,
      q5priority1, q5priority2, q5priority3
    } = data
  const actions = [{
    account: process.env.APP_NAME,
    name: 'survey',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      user: currentAccountName,
      q1response: q1radio1,
      q2response: q2slider1,
      q3response: q3radio2,
      q4response: q4slider2,
      q5choice1: q5priority1,
      q5choice2: q5priority2,
      q5choice3: q5priority3
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Survey Data submission successful'
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
// VOTE
// void freeosgov::vote(name user, uint8_t q1response, uint8_t q2response,
// double q3response, string q4response, uint8_t q5response, uint8_t q6choice1, uint8_t q6choice2, uint8_t q6choice3)
//
// voteAdd
// Where called: vote.vue
export async function voteAdd ({ state }, data) {
  const { currentAccountName, q1slider, q2slider, q3slider, q4radio, q5slider, q6choice1, q6choice2, q6choice3 } = data
  console.log('### data =', data, 'APP_NAME', process.env.APP_NAME)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      name: currentAccountName,
      q1response: q1slider, // uint8_t
      q2response: q2slider, // uint8_t
      q3response: q3slider, // double
      q4response: q4radio, // string
      q5response: q5slider, // uint8_t
      q6choice1: q6choice1, // -"-
      q6choice2: q6choice2, // -"-
      q6choice3: q6choice3 // -"-
    }
  }]
  //
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    // let responseMessage = result.processed.action_traces[0].console
    // if (!responseMessage) {
    // responseMessage = 'Vote Successful'
    // }
    // Notify.create({
    // message: responseMessage,
    // color: 'positive'
    // })
    return result
  } catch (e) {
    console.log(e)
    // return e
  }
}

// ratify:
export async function addRatifyResult ({ state }, data) {
  const { currentAccountName, answer } = data
  console.log('ratify data', data)
  try {
    const actions = [{
      account: process.env.APP_NAME,
      name: 'ratify',
      authorization: [{
        actor: currentAccountName,
        permission: 'active'
      }],
      data: {
        user: currentAccountName,
        ratify_vote: answer
      }
    }]
    const result = await ProtonSDK.sendTransaction(actions)
    return result
  } catch (e) {
    console.log(e)
  }
}

// ---
// svrs table
// Where called: landing.vue
// retrieve userStatus info
//
export async function getSvrsTable (state, name) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: name,
    table: 'svrs',
    limit: 12
  })
  const val = {
    key: 'SVRSData',
    value: result.rows
  }
  state.commit('setSVRSTableAttrVal', val)
}

//
// ---
// parameters table (retrieve)
// Where called: MainLayout.vue
//
export async function getParametersTable (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'parameters',
    limit: 10
  })
  const val = {
    key: 'ParamData',
    value: result.rows
  }
  state.commit('setParamTableAttrVal', val)
}

//
// ---
// system table (retrieve)
// Where called: MainLayout.vue
export async function getSystemTable (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'system'
    // limit: 1
  })
  const val = {
    key: 'SystemData',
    value: result.rows
  }
  state.commit('setSystemTableAttrVal', val)
}

//
export async function actionRatifyTest ({ state }, data) {
  const { accountName, answertype } = data
  console.log(' data: ', data, 'env: ', process.env.APP_NAME, answertype, accountName)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'verify',
    authorization: [{
      actor: accountName,
      permission: 'active'
    }],
    data: {
      // name: accountName,
      // ratifyvote: (false).toString()
    }
  }]

  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Ratify Transmission successful'
    }
    Notify.create({
      message: responseMessage,
      color: 'positive'
    })
    return result
  } catch (e) {
    return e
  }
}

export async function actionVote ({ state }, data) {
  const { currentAccountName, q1response, q2response, q3response } = data
  console.log('@@@ data =', data)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      accountName: currentAccountName,
      q1response: q1response,
      q2response: q2response,
      q3response: q3response
    }
  }]

  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Vote Update Successful'
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
