// S-V-R Sending results of single user interactions to back-end to summarize
import { connect } from 'src/utils/smartContractRequest'
import ProtonSDK from '../../utils/proton'
import { Notify } from 'quasar'
import notifyAlert from 'src/services/notify-alert'
// import { RpcError } from 'eosjs'
// ---
// addSurveyResult
// called: void freeosgov::survey(name user, uint8_t q1response,
// uint8_t q2response, uint8_t q3response, uint8_t q4response, uint8_t q5choice1, uint8_t q5choice2, uint8_t q5choice3) {
//
// Where called: survey.vue
//
export async function addSurveyResult ({ state }, data) {
  const {
    currentAccountName,
    q1radio,
    q2slider,
    q3radio,
    q4slider,
    q5priority1,
    q5priority2,
    q5priority3
  } = data
  console.log('### data =', data, 'APP_NAME', process.env.APP_NAME)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'survey',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: { // TODO sliders should be double TODO
      user: currentAccountName,
      q1response: q1radio,
      q2response: q2slider,
      q3response: q3radio,
      q4response: q4slider,
      q5choice1: q5priority1,
      q5choice2: q5priority2,
      q5choice3: q5priority3
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    console.log('@@@ result=', result)
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
// calls: void freeosgov::vote(name user, uint8_t q1response, uint8_t q2response, double q3response,
// string q4response, uint8_t q5response, uint8_t q6choice1, uint8_t q6choice2, uint8_t q6choice3)
//
// a d d V o t e R e s u l t s -------
// Where called: vote.vue
export async function addVoteResult ({ state }, data) {
  const { currentAccountName, q1slider, q2slider, q3slider, q4radio, q5slider, q6choice1, q6choice2, q6choice3 } = data
  console.log('### data =', data, 'APP_NAME', process.env.APP_NAME)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'vote',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: { // TODO Sliders should be double TODO
      user: currentAccountName,
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
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    console.log('@@@ result=', result)
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
  console.log(' ----- ratify data ----- ', data)
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
    scope: name, // Note: Depends on Scope. Data are specific for a given user.
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
// ----- g e t P a r a m e t e r s T a b l e -----
//
// parameters table (retrieve)
// Where called: MainLayout.vue
//
export async function getParametersTable (state) {
  console.log('getParameters', process.env.APP_NAME)
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'parameters',
    limit: process.env.PARAM_NUMBER // Number of parameters in backend parameters table
  })
  const val = {
    key: 'ParamData',
    value: result.rows
  }
  console.log('val.value==', val.value[1].paramname)
  console.log('val.paramname==', val.value[1].value)
  state.commit('setParamTableAttrVal', val)
}

// === === === TODO
// Called in MainLayout.vue
export async function getExchangeTable (state) {
  console.log('getParameters', process.env.APP_NAME)
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'exchangerate',
    limit: 1
  })
  const val = {
    key: 'ExchangeData',
    value: result.rows
  }
  // console.log('EXCHANGE.currentprice ==', val.value[0].currentprice) // todo something
  // console.log('EXCHANGE.targetprice ==', val.value[0].targetprice) // todo something
  state.commit('setExchangeTableAttrVal', val)
}

// === === ===
//
// ---
// === g e t S y s t e m T a b l e ===
// Where called: MainLayout.vue
export async function getSystemTable (state) {
  const result = await connect({
    json: true,
    code: process.env.APP_NAME,
    scope: process.env.APP_NAME,
    table: 'system',
    limit: 1
  })
  const val = {
    key: 'SystemData',
    value: result.rows
  }
  state.commit('setSystemTableAttrVal', val)
}

// R E G I S T R A T I O N
//

//
/* Headers from Backend
  [[eosio::action]] void reguser(name user);
  [[eosio::action]] void reregister(name user);
  bool is_user_verified(name user);
 */

// === a d d R e g U s e r ===
export async function addRegUser ({ state }, currentAccountName) {
  // Write user data to users table on the backend
  console.log('&&& acc name=', currentAccountName)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'reguser',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: {
      user: currentAccountName
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    console.log('@@@ result=', result)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Registration successful'
      state.commit('setRegPopUp', false) // Remove pop-up window if any.
      Notify.create({
        message: responseMessage,
        color: 'positive'
      })
    }
    return result
  } catch (e) {
    console.log(e)
    return e
  }
}

// === a d d R e R e g U s e r ===
export async function addReRegUser ({ state }, currentAccountName) {
  console.log('&&& acc name=', currentAccountName)
  const actions = [{
    account: process.env.APP_NAME,
    name: 'reregister',
    authorization: [{
      actor: currentAccountName,
      permission: 'active'
    }],
    data: { // TODO sliders should be double TODO
      user: currentAccountName
    }
  }]
  try {
    const result = await ProtonSDK.sendTransaction(actions)
    console.log('@@@ result=', result)
    let responseMessage = result.processed.action_traces[0].console
    if (!responseMessage) {
      responseMessage = 'Re-registering successful'
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

// === === === g e t U s e r T a b l e === === ===
// Is called by landing.vue
// Read all the data from table for a given user (scope)
// Additionally, set-up the
export async function getUserTable (state, name) {
  try {
    const result = await connect({
      json: true,
      code: process.env.APP_NAME,
      scope: name,
      table: 'users',
      limit: 1
    })
    const val = {
      key: 'UserData',
      value: result.rows
    }
    console.log(' ## getUserTable', result)
    state.commit('setUserTableAttrVal', val)
  } catch (e) {
    console.log('E=', e)
    if (e.message.startsWith('Cannot read properties')) {
      notifyAlert('err', 'E: User is definitely not Registered.')
      // Set 'on' the (pop-up) 'Registration's window trigger on Vuex:
      state.commit('setRegPopUp', true) // The Register Pop-up is open.
    } else { // The user may be registered, however may have not valid account type.
      notifyAlert('success', 'User may be Registered. Account type verification in progress.')
      state.commit('setRegPopUp', false) // The Register Pop-up is closed.
    }
  }
}

// export async function setUserData (state, name) {
// TODO write user data to users table on the backend
// state.commit('setRegPopUp', false)
// this.commit('setIsRegOpen', false)
// }
