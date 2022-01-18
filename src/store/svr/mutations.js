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

// ===               set SVRS Table Attr Val               ===

import notifyAlert from 'src/services/notify-alert'
// import customAlert from 'src/services/customAlert'

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
  state.timerOffset = currentoffset
  // console.log(' current_Time = ', currentT)
  // console.log('Time Zone =', n)
  // console.log(' init_time_seconds = ', state.initUTC)
  console.log(' current_offset = ', currentoffset)
  // console.log(' state.timerOffset = ', state.timerOffset)
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
  console.log('systemStatus: isSurveyActive=', isSurveyActive, ' isVoteActive=', isVoteActive, ' isRatifyActive=', isRatifyActive)
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
  // console.log('Counted ITERATION:', diff)
  //
  // SVRS data processing TODO only this may be here ! === === ===
  //
  // const attr = payload.key
  const val = payload.value
  console.log('*** SVRS payload', JSON.stringify(val)) // test
  // state.SVRSInfo[attr] = val
  //
  let surveyDone = false // Keep it as it is (whatever do you think :) )
  let voteDone = false
  let ratifyDone = false
  const survey1 = val[0].survey1
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
  console.log('userStatus: S=', surveyDone, ' V=', voteDone, ' R=', ratifyDone)
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
  // console.log('nothing:', nothing, ' surveyOK:', surveyOK, ' voteOK:', voteOK,
  // ' SV_OK:', SV_OK, ' R_OK:', R_OK)
  console.log('systemStatus isSurveyActive: ', isSurveyActive, 'isVoteActive: ', isVoteActive, 'isRatifyActive: ', isRatifyActive)
  // const delay = state.delay
  if (isSurveyActive) {
    // state.user_mode = 0 means system inactive
    if (nothing) {
      state.user_mode = 1
      state.timer = surveyend - currentoffset // + delay // survey timer in seconds
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
  // state.voterange3e = state.lockfactor * state.currentprice
  // console.log(' VOTERANGES =', state.voterange3s, state.voterange3e)
  // console.log(' A lockfactor/currentprice =', state.lockfactor, state.currentprice)
  // console.log('*** PARAMETERS payload:', JSON.stringify(payload)) // test
  // console.log('= state.lockfactor = ', state.lockfactor)
  // console.log('= state.ratifyend = ', state.ratifyend)
  // console.log('= state.ratifystart = ', state.ratifystart)
  // console.log('= state.surveyend = ', state.surveyend)
  // console.log('= state.surveystart = ', state.surveystart)
  // console.log('= state.userlifespan = ', state.userlifespan)
  // console.log('= state.voteend = ', state.voteend)
  // console.log('= state.votestart = ', state.votestart)
  // console.log('= state.surveyranges = ', state.surveyranges)
  // console.log('= state.voteranges = ', state.voteranges)

  // Unpack slider ranges for Survey displays here:
  const str = state.surveyranges
  const commapos = str.indexOf(',')
  // console.log('$ commapos', commapos)
  const part1 = str.slice(5, commapos)
  // console.log('$ part1', part1)
  const part2 = str.slice(commapos + 6)
  // console.log('$ part2', part2)
  const commapos1 = part1.indexOf('-')
  const snum1 = part1.slice(0, commapos1)
  const snum2 = part1.slice(commapos1)
  const commapos2 = part2.indexOf('-')
  const snum3 = part2.slice(0, commapos2)
  const snum4 = part2.slice(commapos2)
  const num1 = snum1.replace(/\D/g, '')
  const num2 = snum2.replace(/\D/g, '')
  const num3 = snum3.replace(/\D/g, '')
  const num4 = snum4.replace(/\D/g, '')
  // console.log('$ num', num1, num2, num3, num4)
  state.surveyrange1s = parseFloat(num1)
  state.surveyrange1e = parseFloat(num2)
  state.surveyrange2s = parseFloat(num3)
  state.surveyrange2e = parseFloat(num4)

  // Unpack slider ranges for Vote displays here:
  const vstr = state.voteranges
  const vcommapos1 = vstr.indexOf(',')
  const vcommapos2 = vstr.lastIndexOf(',')
  // console.log('$ vcommapos1', vcommapos1)
  // console.log('$ vcommapos2', vcommapos2)
  const vpart1 = vstr.slice(3, vcommapos1) // before first comma
  // console.log('$ vpart1', vpart1)
  const vpart2 = vstr.slice(vcommapos1 + 4) // after first comma (before second)
  // console.log('$ vpart2', vpart2)
  // cut at comma position
  const vcommapos3 = vpart2.indexOf(',')
  const vpart2a = vpart2.slice(0, vcommapos3)
  // console.log('$ vpart2a', vpart2a)
  const vpart3 = vstr.slice(vcommapos2 + 4) // after second comma
  // console.log('$ vpart3', vpart3)
  // separate from first part
  const commapos1v = vpart1.indexOf('-')
  const vsnum1 = vpart1.slice(0, commapos1v)
  const vsnum2 = vpart1.slice(commapos1v)
  // separate from second part
  const commapos2v = vpart2a.indexOf('-')
  const vsnum3 = vpart2a.slice(0, commapos2v)
  const vsnum4 = vpart2a.slice(commapos2v)
  // separate third part
  const commapos3v = vpart3.indexOf('-')
  const vsnum5 = vpart3.slice(0, commapos3v)
  const vsnum6 = vpart3.slice(commapos3v)
  //
  const vnum1 = vsnum1.replace(/\D/g, '')
  const vnum2 = vsnum2.replace(/\D/g, '')
  const vnum3 = vsnum3.replace(/\D/g, '')
  const vnum4 = vsnum4.replace(/\D/g, '')
  const vnum5 = vsnum5.replace(/\D/g, '')
  const vnum6 = vsnum6.replace(/\D/g, '')
  //
  // console.log('$ vnums', vnum1, vnum2, vnum3, vnum4, vnum5, vnum6)
  state.voterange1s = parseFloat(vnum1)
  state.voterange1e = parseFloat(vnum2)
  state.voterange2s = parseFloat(vnum3)
  state.voterange2e = parseFloat(vnum4)
  state.voterange5s = parseFloat(vnum5)
  state.voterange5e = parseFloat(vnum6)
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
export const setSystemTableAttrVal = function (state, payload) { // TODO WTF?
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
  console.log(' account_type=', state.account_type)
  state.registered_iteration = val[0].registered_iteration
  state.staked_iteration = val[0].staked_iteration
  state.votes = val[0].votes
  state.issuances = val[0].issuances
  state.last_issuances = val[0].last_issuances
  state.total_issuance_amount = val[0].total_issuance_ammount
}

export const setcongratulationTitle = function (state, payload) { // DO NOT TOUCH! TODO need review
  state.setcongratulationTitle = payload
  // console.log('=> congratulationTitle=, payload', state.congratulationTitle, payload)
}

export const setRegPopUp = function (state, payload) {
  state.isRegOpen = payload
  console.log('=> isRegOpen=, payload', state.isRegOpen, payload)
  // true - Registration Pop-Up is open, else closed.
  if (!payload) { // false; so, the user's record exists, :|
    if (state.account_type === 'v') {
      // The user's record exists with correct account type :)
      state.isRegOpen = false
      console.log('=>1 isRegOpen=', state.isRegOpen)
    } else { // The user's record exists, with incorrect account type :| TODO This should be decided later!
      state.isRegOpen = false // TODO Note: At this moment (only for development) the registration page will be not displayed
      state.isUserRecordExists = true
      notifyAlert('warning', 'User account is not "v" type.') // todo this is original
      console.log('=>2 isRegOpen=', state.isRegOpen)
    }
  } else { // The user's record do not exist at all :(
    state.isRegOpen = true // User need registration - the register page will be displayed
    console.log('=>3 isRegOpen=', state.isRegOpen)
  }
}

export const setExchangeTableAttrVal = function (state, payload) { // DO NOT TOUCH! TODO need review
  //
  const val = payload.value
  // console.log('*** Exchange payload:', JSON.stringify(val)) // test
  console.log('val[0].target_price', val[0].targetprice)
  console.log('val[0].currentprice', val[0].currentprice)
  state.targetprice = val[0].targetprice
  state.currentprice = val[0].currentprice
  //
  state.voterange3s = process.env.HARD_EXCHANGE_RATE_FLOOR // parametrize question 3 slider
  state.voterange3e = state.lockfactor * state.currentprice
  console.log(' VOTERANGES =', state.voterange3s, state.voterange3e)
  console.log(' A lockfactor/currentprice =', state.lockfactor, state.currentprice)
}

export const showModal = function (state) {
  state.isRegOpen = true
}

export const hideModal = function (state) {
  state.isRegOpen = false
}

export const increment = function (state) {
  state.Increment++
}

export const noSVRS = function (state) {
  //
  // TODO
  let isSurveyActive = false
  let isVoteActive = false
  let isRatifyActive = false
  const currentT = Math.floor((new Date().getTime() / 1000)) // Current UTC GMT time in sec (msec cut off). TODO use this!
  const currentoffset = (currentT - state.initUTC) % state.iterationSize
  state.timerOffset = currentoffset
  //
  const ratifyend = state.ratifyend
  const ratifystart = state.ratifystart
  const surveyend = state.surveyend
  const surveystart = state.surveystart
  const voteend = state.voteend
  const votestart = state.votestart
  // set userStatus:
  console.log('systemStatus: isSurveyActive=', isSurveyActive, ' isVoteActive=', isVoteActive, ' isRatifyActive=', isRatifyActive)
  if ((surveystart <= currentoffset) && (currentoffset <= surveyend)) { isSurveyActive = true } // We are in Survey period.
  if ((votestart <= currentoffset) && (currentoffset <= voteend)) { isVoteActive = true } // -- "" --  Vote period.
  if ((ratifystart <= currentoffset) && (currentoffset <= ratifyend)) { isRatifyActive = true } // Ratify period
  //
  // SYSTEM data processing
  //
  // const currentTimeSec = Math.floor((new Date()).getTime() / 1000) // ?? delete
  const diff = Math.floor(((currentT - state.initUTC) / state.iterationSize) + 1)
  state.iteration = diff // active iteration number
  // console.log('Counted ITERATION:', diff)
  //
  let surveyDone = false // Keep it as it is (whatever do you think :) )
  let voteDone = false
  let ratifyDone = false
  const survey1 = 0
  const survey2 = 0
  const survey3 = 0
  const survey4 = 0
  const vote1 = 0
  const vote2 = 0
  const vote3 = 0
  const vote4 = 0
  const ratify1 = 0
  const ratify2 = 0
  const ratify3 = 0
  const ratify4 = 0
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
  console.log('userStatus: S=', surveyDone, ' V=', voteDone, ' R=', ratifyDone)
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
  // console.log('nothing:', nothing, ' surveyOK:', surveyOK, ' voteOK:', voteOK,
  // ' SV_OK:', SV_OK, ' R_OK:', R_OK)
  console.log('systemStatus isSurveyActive: ', isSurveyActive, 'isVoteActive: ', isVoteActive, 'isRatifyActive: ', isRatifyActive)
  // const delay = state.delay
  if (isSurveyActive) {
    // state.user_mode = 0 means system inactive
    if (nothing) {
      state.user_mode = 1
      state.timer = surveyend - currentoffset // + delay // survey timer in seconds
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
}
