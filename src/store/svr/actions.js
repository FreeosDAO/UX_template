// S-V-R Sending results of single user interactions to back-end to summarize
// import notifyAlert from 'src/services/notify-alert'
import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from '../../utils/proton'
import { Notify } from 'quasar'
// import { RpcError } from 'eosjs'

// void freeosgov::vote(name user, uint8_t q1response, uint8_t q2response, double q3response, string q4response,
// uint8_t q5response, uint8_t q6choice1, uint8_t q6choice2, uint8_t q6choice3)
// ---
// surveyAdd
// Where called: survey.vue
export async function surveyAdd (data) {
  const {
    currentAccountName, q1radio1, q1radio2, q1radio3, q2slider,
    q3radio1, q3radio2, q3radio3, q4slider,
    q5select1, q5select2, q5select3, q5select4, q5select5, q5select6
  } = data // eslint-disable-line
  const actions = [{
    account: process.env.APP_NAME,
    name: 'survey',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      user: currentAccountName,
      r0: q1radio1,
      r1: q1radio2,
      r2: q1radio3,
      r3: q2slider,
      r4: q3radio1,
      r5: q3radio2,
      r6: q3radio3,
      r7: q4slider,
      r8: q5select1,
      r9: q5select2,
      r10: q5select3,
      r11: q5select4,
      r12: q5select5,
      r13: q5select6
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = '' // result.processed.action_traces[0].console
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
export async function voteAdd (data) {
  const {
    currentAccountName, q1slider, q2slider, q3slider, q4radio, q5slider, q6choice1, q6choice2, q6choice3
  } = data // eslint-disable-line
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      user: currentAccountName,
      q1response: q1slider, // uint8_t
      q2response: q2slider, // uint8_t
      q3response: q3slider, // double
      q4response: q4radio, // string
      q5response: q5slider, // uint8_t
      q6choice1: q6choice1, // -"- TODO verify - the data may be deliver as numeric strings?
      q6choice2: q6choice2, // -"-
      q6choice3: q6choice3 // -"-
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    let responseMessage = '' // result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Voting Data submission successful'
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
