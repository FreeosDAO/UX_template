// S-V-R Sending results of single user interactions to back-end to summarize
// import notifyAlert from 'src/services/notify-alert'
import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from '../../utils/proton'
import { Notify } from 'quasar'
// import { RpcError } from 'eosjs'

// ---
// surveyAdd
// Where called: survey.vue
export async function surveyAdd (data) {
  // const {
  // currentAccountName, q1radio1, q1radio2, q1radio3, q2slider,
  // q3radio1, q3radio2, q3radio3, q4slider,
  // q5select1, q5select2, q5select3, q5select4, q5select5, q5select6
  // } = data // eslint-disable-line
  const actions = [{
    account: process.env.APP_NAME,
    name: 'survey',
    authorization: [{
      actor: 'alanappleton', // currentAccountName,
      permission: 'active'
    }],
    data: {
      // user: currentAccountName,
      // r0: q1radio1,
      // r1: q1radio2,
      // r2: q1radio3,
      // r3: q2slider,
      // r4: q3radio1,
      // r5: q3radio2,
      // r6: q3radio3,
      // r7: q4slider,
      // r8: q5select1,
      // r9: q5select2,
      // r10: q5select3,
      // r11: q5select4,
      // r12: q5select5,
      // r13: q5select6
      user: 'alanappleton', // currentAccountName,
      r0: true, // q1radio1,
      r1: false, // q1radio2,
      r2: false, // q1radio3,
      r3: 23, // q2slider,
      r4: true, // q3radio1,
      r5: false, // q3radio2,
      r6: false, // q3radio3,
      r7: 24, // q4slider,
      r8: 3, // q5select1,
      r9: 2, // q5select2,
      r10: 1, // q5select3,
      r11: 0, // q5select4,
      r12: 0, // q5select5,
      r13: 0 // q5select6
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
  const { currentAccountName /*, q1slider, q2slider, q3slider, q4radio, q5slider, q6choice1, q6choice2, q6choice3 */ } = data
  console.log('### data =', data, 'APP_NAME', process.env.APP_NAME)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      name: currentAccountName
      /*
      q1response: q1slider, // uint8_t
      q2response: q2slider, // uint8_t
      q3response: q3slider, // double
      q4response: q4radio, // string
      q5response: q5slider, // uint8_t
      q6choice1: q6choice1, // -"-
      q6choice2: q6choice2, // -"-
      q6choice3: q6choice3 // -"-
      */
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
export async function addRatifyResult ({ state }, accountName, ratifyvote) {
  try {
    const actions = [{
      account: process.env.AIRCLAIM_CONTRACT,
      name: 'ratify',
      authorization: [{
        actor: accountName,
        permission: 'active'
      }],
      data: {
        user: accountName,
        ratify_vote: ratifyvote
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
// TODO TEST below - remove
// export async function actionFakeReceiver (state, data) {
// const { currentAccountName, answertype, actionT } = data
// const actions = [{
// account: process.env.APP_NAME,
// name: 'fakereceiver',
// authorization: [{
// actor: currentAccountName,
// permission: 'active'
// }],
// data: {
// username: currentAccountName,
// answertype: answertype,
// action: actionT
// }
// }]
//
// try {
// const result = await ProtonSDK.sendTransaction(actions)
// let responseMessage = result.processed.action_traces[0].console
// if (!responseMessage) {
// responseMessage = 'TESTING: Transaction Complete,'
// }
// Notify.create({
// message: responseMessage,
// color: 'positive'
// })
// return result
// } catch (e) {
// console.log(e)
// return e
// }
// const result = await ProtonSDK.sendTransaction(actions)
// return result
// } catch (e) {
// console.log(e)
// }
// export async function actionFakeReceiver (state, data) {
// const { currentAccountName, answertype, actionT } = data
// try {
// const actions = [{
// account: process.env.APP_NAME,
// name: 'freceiver',
// authorization: [{
// actor: process.env.APP_NAME,
// permission: 'active'
// }],
// data: {
// username: currentAccountName,
// answertype: answertype,
// action: actionT
// }
// }]
// const result = await ProtonSDK.sendTransaction(actions)
// return result
// } catch (e) {
// console.log(e)
// }
// }
//
//
// actionSurveyTest', 'actionVoteTest', 'actionRatifyTest
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

// export async function onRegisterUser ({ state }, dataload) { // TEST
// const { aaccountName, answer } = dataload
// console.log('### accountName', aaccountName, ' ### answer', answer)
// try {
// const actions = [{
// account: process.env.APP_NAME,
// name: 'ratify',
// authorization: [{
// actor: aaccountName,
// permission: 'active'
// }],
// data: {
// accountName: aaccountName,
// ratifyvote: answer
// }
// }]
// const result = await ProtonSDK.sendTransaction(actions)
// return result
// } catch (e) {
// console.log(e)
// }
// }
// // //
/* export async function actionOwnerChange ({ state }, data) {
  const { currentAccountName, target } = data
  console.log('@@@ data =', data)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'ratify',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      accountName: currentAccountName,
      ratifyvote: target
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
*/
export async function actionVote ({ state }, data) {
  const { currentAccountName } = data
  console.log('@@@ data =', data)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      accountName: currentAccountName
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
