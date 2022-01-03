/* Table of Content
setSVRSTableAttrVal - svrs - 12
setParamTableAttrVal - parameters - 180
setSystemTableAttrVal - system - 225
setUserTableAttrVal - user - 245
setExchangeTableAttrVal - exchange - TODO not defined !!!
setRegPopUp - end
*/
// ===
// import notifyAlert from 'src/services/notify-alert'

// ===    set SVRS Table Attr Val    ===
export const setSVRSTableAttrVal = function (state, payload) {
  //
  // TODO TEST
  // sample:
  // const str = '2021-09-15T00:00:00.000 GMT+00:00' // TODO ADD GMT
  // const replaced = str.replace('T', ', ')
  // const myDate = new Date(replaced)
  // const initUTC = myDate.getTime() / 1000.0
  // state.initUTC = initUTC // init point in UTC seconds
  // console.log('Basic =>init in UTC sec.', initUTC)
  // //
  // https://www.epochconverter.com/
  // TODO test END --- --- --- --- --- --- --- --- ---
  let isSurveyActive = false
  let isVoteActive = false
  let isRatifyActive = false
  const currentT = Math.floor((new Date().getTime() / 1000)) // Current UTC GMT time in sec (msec cut off). TODO use this!
  const currentoffset = (currentT - state.initUTC) % state.iterationSize
  state.timerOffset = currentoffset // Update timer in Vuex
  console.log(' current_Time = ', currentT)
  // console.log('Time Zone =', n)
  console.log(' init_time_seconds = ', state.initUTC)
  console.log(' current_offset = ', currentoffset)
  // const now = new Date()
  // console.log('My Time=', Math.floor(now.getTime() / 1000)) // TODO Seems to be the best one. TODO LOOKS OK AS GMT UTC
  // TODO this timer is not implemented for counting of the iteration TODO TODO !!! === === === === === === === === ===
  const ratifyend = state.ratifyend
  const ratifystart = state.ratifystart
  const surveyend = state.surveyend
  const surveystart = state.surveystart
  const voteend = state.voteend
  const votestart = state.votestart
  // set userStatus:
  console.log('mu.30: is Active? S=', isSurveyActive, ' V=', isVoteActive, ' R=', isRatifyActive)
  if ((surveystart <= currentoffset) && (currentoffset <= surveyend)) { isSurveyActive = true } // We are in Survey period.
  if ((votestart <= currentoffset) && (currentoffset <= voteend)) { isVoteActive = true } // -- "" --  Vote period.
  if ((ratifystart <= currentoffset) && (currentoffset <= ratifyend)) { isRatifyActive = true } // Ratify period
  // console.log('mu.33: surveystart=', surveystart, ' currentoffset=', currentoffset, ' surveyend=', surveyend)
  // console.log('mu.33: votestart=', votestart, ' currentoffset=', currentoffset, ' voteend=', voteend)
  // console.log('mu.33: ratifystart=', ratifystart, ' currentoffset=', currentoffset, ' ratifyend=', ratifyend)
  // console.log('mu.40: is Active? S=', isSurveyActive, ' V=', isVoteActive, ' R=', isRatifyActive)
  //
  // end of parameters processing
  //
  // SYSTEM data processing
  //
  // const currentTimeSec = Math.floor((new Date()).getTime() / 1000) // ?? delete
  const diff = Math.floor(((currentT - state.initUTC) / state.iterationSize) + 1)
  state.iteration = diff // active iteration number
  console.log('Counted ITERATION:', diff)
  //
  // SVRS data processing TODO only this may be here ! === === ===
  //
  // const attr = payload.key
  const val = payload.value
  console.log('*** SVRS payload (landing)', JSON.stringify(val)) // test
  // state.SVRSInfo[attr] = val
  //
  let surveyDone = false // Keep it as it is (whatever do you think :) )
  let voteDone = false
  let ratifyDone = false
  const survey1 = val[0].survey1
  console.log('val[0]survey1', val[0].survey1)
  const survey2 = val[0].survey2
  const survey3 = val[0].survey3
  const survey4 = val[0].survey4
  const vote1 = val[0].vote1
  const vote2 = val[0].vote2
  const vote3 = val[0].vote3
  const vote4 = val[0].vote4
  const ratify1 = val[0].ratify1
  const ratify2 = val[0].ratify2
  const ratify3 = val[0].ratify3
  const ratify4 = val[0].ratify4
  const thisIteration = state.iteration
  console.log('thisIteration = ', thisIteration)
  // Note: All of this is already updated by the S-V-R pages.
  if ((survey1 !== thisIteration) && (survey2 !== thisIteration) &&
     (survey3 !== thisIteration) && (survey4 !== thisIteration)) {
    surveyDone = false
  } else {
    surveyDone = true
    console.log('user has already completed the survey')
  }
  if ((vote1 !== thisIteration) && (vote2 !== thisIteration) &&
    (vote3 !== thisIteration) && (vote4 !== thisIteration)) {
    voteDone = false
  } else {
    voteDone = true
    console.log('user has already completed the vote')
  }
  if ((ratify1 !== thisIteration) && (ratify2 !== thisIteration) &&
    (ratify3 !== thisIteration) && (ratify4 !== thisIteration)) {
    ratifyDone = false
  } else {
    ratifyDone = true
    console.log('user has already completed the ratify')
  }
  console.log('userStatus: S=', surveyDone, ' V=', voteDone, ' R=', ratifyDone,
    ' thisIteration=', thisIteration)
  let nothing = false
  let surveyOK = false
  let voteOK = false
  let SV_OK = false
  let R_OK = false
  // // nothing - all three false
  if ((surveyDone === false) && (voteDone === false) && (ratifyDone === false)) { nothing = true }
  if ((surveyDone === true) && (voteDone === false) && (ratifyDone === false)) { surveyOK = true }
  if ((voteDone === true) && (ratifyDone === false)) { voteOK = true } // S-any, V-true, R-false
  if ((surveyDone === true) && (voteDone === true) && (ratifyDone === false)) { SV_OK = true }
  if (ratifyDone === true) { R_OK = true } // S, V - any value, but R-true
  console.log('nothing:', nothing, ' surveyOK:', surveyOK, ' voteOK:', voteOK,
    ' SV_OK:', SV_OK, ' R_OK:', R_OK)
  console.log('SystemStatus isSurveyActive: ', isSurveyActive, 'isVoteActive: ', isVoteActive, 'isRatifyActive: ', isRatifyActive)
  const delay = state.delay
  if (isSurveyActive) {
    // state.user_mode = 0 means system inactive
    if (nothing) {
      state.user_mode = 1
      state.timer = surveyend - currentoffset + delay // survey timer in seconds
    } // Survey Open
    if (surveyOK) {
      state.user_mode = 2
      state.timer = surveyend - currentoffset // survey timer in seconds
    } // Wait for Vote // Required Conditions: S-true, V,R - N/A
  }
  // console.log('119', isVoteActive, nothing)
  if (isVoteActive) {
    if (nothing) {
      state.user_mode = 3
      state.timer = voteend - currentoffset // vote timer in seconds
      // console.log('Vote NOW')
    } // Vote Open/Start Vote Now
    if (surveyOK) {
      state.user_mode = 3
      state.timer = voteend - currentoffset // vote timer in seconds
    } // Vote Open/Start Vote Now
    if (SV_OK) {
      state.user_mode = 4
      state.timer = voteend - currentoffset // vote timer in seconds
    } // Wait for Ratify
  }
  if (isRatifyActive) {
    if (nothing) {
      state.user_mode = 6
      state.timer = ratifyend - currentoffset // ratify timer in seconds
    } // Wait for New Iteration
    if (surveyOK) {
      state.user_mode = 5
      state.timer = ratifyend - currentoffset // ratify timer in seconds
    } // Ratify Open
    if (voteOK) {
      state.user_mode = 5
      state.timer = ratifyend - currentoffset // ratify timer in seconds
    } // Ratify Open
    if (SV_OK) {
      state.user_mode = 5
      state.timer = ratifyend - currentoffset // ratify timer in seconds
    } // Ratify Open // extras
    if (R_OK) {
      state.user_mode = 6
      state.timer = ratifyend - currentoffset // ratify timer in seconds
    } // Wait for New Iteration
  }
  console.log(' => final user_mode => ', state.user_mode)
}

// === === === === === === === === === === === === === === === === === === === === ===
// P A R A M E T E R S --- TODO NOT TOUCH ------
export const setParamTableAttrVal = function (state, val) { // TODO Note: This may be sorted out.
  // Note: I am reading only 10 rows from the backend's parameters table, even if there is more.
  // Note: Read parameters may come in any order.
  // Called by LayoutMain.vue
  // Parameters read are stored in Vuex, then used by SVRS.
  //
  // console.log('++val.value==', val.value[1].value)
  // console.log('++val.paramname==', val.value[1].paramname)
  for (let i = 9; i >= 0; i--) { // Read from backend in any order.
    // console.log(' i=', i)
    // All payload placed in 'state.svr' Vuex
    if (val.value[i].paramname === 'lockfactor') { state.lockfactor = val.value[i].value }
    if (val.value[i].paramname === 'ratifyend') { state.ratifyend = val.value[i].value }
    if (val.value[i].paramname === 'ratifystart') { state.ratifystart = val.value[i].value }
    if (val.value[i].paramname === 'surveyend') { state.surveyend = val.value[i].value }
    if (val.value[i].paramname === 'surveystart') { state.surveystart = val.value[i].value }
    if (val.value[i].paramname === 'userlifespan') { state.userlifespan = val.value[i].value }
    if (val.value[i].paramname === 'voteend') { state.voteend = val.value[i].value }
    if (val.value[i].paramname === 'votestart') { state.votestart = val.value[i].value }
    if (val.value[i].paramname === 'surveyranges') { state.surveyranges = val.value[i].value }
    if (val.value[i].paramname === 'voteranges') { state.voteranges = val.value[i].value }
  }
  // state.voterange3s = process.env.HARD_EXCHANGE_RATE_FLOOR // parametrize question 3 slider
  state.voterange3e = state.lockfactor * state.current_price // TODO define current_price source!
  // console.log('*** PARAMETERS payload:', JSON.stringify(payload)) // test
  console.log('= state.lockfactor = ', state.lockfactor)
  console.log('= state.ratifyend = ', state.ratifyend)
  console.log('= state.ratifystart = ', state.ratifystart)
  console.log('= state.surveyend = ', state.surveyend)
  console.log('= state.surveystart = ', state.surveystart)
  console.log('= state.userlifespan = ', state.userlifespan)
  console.log('= state.voteend = ', state.voteend)
  console.log('= state.votestart = ', state.votestart)
  console.log('= state.surveyranges = ', state.surveyranges)
  console.log('= state.voteranges = ', state.voteranges)

  // TODO Unpack slider ranges for SVR displays here!!!:
  //
} // === end of parameters table service ===

// === === === === === === === === === === === === === === === === === === === === ===
// S Y S T E M // TODO NOT TOUCH
// Function setSystemTableAttrVal called from getSystemTable
// Called in LayoutMain.vue
//
// Input Backend (freeosgov): system table
// Output (to Vuex):
// - initUTC - init time in seconds (achieved from 'init' of system table).
// - iteration (current iteration build up from already existing data) // TODO Not use the system iteration now!
// - all remaining parameters - may be stored in Vuex - just in case, however consider further development of the prototype
// when system may be called again somwhere in the code.
export const setSystemTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** SYSTEM Table Payload', JSON.stringify(val))
  const str = val[0].init
  const replaced = str.replace('T', ', ')
  // ' GMT+00:00' TODO add it! after 'replaced' not before!
  const myDate = new Date(replaced + ' GMT+00:00') // very important!, otherwise javascript will change to local time by default.
  const initUTC = myDate.getTime() / 1000.0
  state.initUTC = initUTC // init point in UTC seconds
  console.log('init in UTC sec.', initUTC)

  // console.log('(* direct system.iteration = ', val[0].iteration, ' *) ') // NOT read directly from system
  // state.currentiteration = val[0].iteration // not correct
  // NOTE I count now iteration number by myself in system data processing section of the setSVRSTableAttrVal.
}

// === === === === === === === === === === === === === === === === === === === === ===
// U S E R --- TODO NOT TOUCH ------
export const setUserTableAttrVal = function (state, payload) { // Unpack users table values to Vuex
  // Called from landing.vue
  const val = payload.value
  console.log('*** USERS payload:', JSON.stringify(val)) // test
  // console.log('*** USERS stake:', val[0].stake) // test
  // console.log('*** USERS account_type:', val[0].account_type) // test
  // console.log('*** USERS registered_iteration:', val[0].registered_iteration) // test
  // console.log('*** USERS staked_iteration:', val[0].staked_iteration) // test
  // console.log('*** USERS votes:', val[0].votes) // test
  // console.log('*** USERS issuances:', val[0].issuances) // test
  // console.log('*** USERS last_issuance:', val[0].last_issuance) // test
  // console.log('*** USERS total_issuance_amount:', val[0].total_issuance_amount) // test
  state.stake = val[0].stake
  state.account_type = val[0].account_type
  state.registered_iteration = val[0].registered_iteration
  state.staked_iteration = val[0].staked_iteration
  state.votes = val[0].votes
  state.issuances = val[0].issuances
  state.last_issuances = val[0].last_issuances
  state.total_issuance_amount = val[0].total_issuance_ammount
}

export const setRegPopUp = function (state, payload) { // DO NOT TOUCH! TODO need review
  state.isRegOpen = payload
  console.log('=> isRegOpen=, payload', state.isRegOpen, payload)
}
