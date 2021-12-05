// import notifyAlert from 'src/services/notify-alert'

// S V R S ---
export const setSVRSTableAttrVal = function (state, payload) {
  // - No need to store any parameters of svrs into Vuex.
  // - The parameters of svrs are used only to compute userStatus variables like:
  // surveyDone, voteDone, and ratifyDone, then only 'mode' is passed to landing.vue
  // through Vuex.
  //
  // Deal with parameters (LOGIC for PARAMETERS)
  console.log('*** PARAMETERS processing') // test
  // console.log('paramname.lockfactor', val[0].value) // not used here yet
  // state.userlifespan = val[6].value // not used
  //
  let isSurveyActive = false
  let isVoteActive = false
  let isRatifyActive = false
  const currentT = Math.floor((new Date()).getTime() / 1000) // Current time in sec (msec cut off).
  const currentoffset = (currentT - state.initUTC) % state.iterationSize
  console.log(' currentT = ', currentT)
  console.log(' init_time_seconds = ', state.initUTC)
  console.log(' currentoffset = ', currentoffset)
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
  if ((ratifystart <= currentoffset) && (currentoffset <= ratifyend)) { isRatifyActive = true }
  console.log('mu.33: surveystart=', surveystart, ' currentoffset=', currentoffset,
    ' surveyend=', surveyend)
  console.log('mu.33: votestart=', votestart, ' currentoffset=', currentoffset,
    ' voteend=', voteend)
  console.log('mu.33: ratifystart=', ratifystart, ' currentoffset=', currentoffset,
    ' ratifyend=', ratifyend)
  console.log('mu.40: is Active? S=', isSurveyActive, ' V=', isVoteActive, ' R=', isRatifyActive)
  // end of parameters processing
  //
  // === === ===
  //
  // SYSTEM data processing
  //
  const currentTimeSec = Math.floor((new Date()).getTime() / 1000)
  const diff = Math.floor(((currentTimeSec - state.initUTC) / state.iterationSize) + 1) // TODO myEpoch take from Vuex
  state.iteration = diff // active iteration number
  console.log('iteration:', diff)
  //
  // === === ===
  //
  // SVRS processing - Main Body
  //
  // const attr = payload.key
  const val = payload.value
  console.log('*** SVRS payload (landing)', JSON.stringify(val)) // test
  // state.SVRSInfo[attr] = val
  //
  let surveyDone = false
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
    ' SV_OK:', SV_OK, ' R_OK:', R_OK) // todo UNDER TESTING
  console.log('isSurveyActive: ', isSurveyActive)
  console.log('isVoteActive: ', isVoteActive)
  console.log('isRatifyActive: ', isRatifyActive)
  if (isSurveyActive) {
    // state.user_mode = 0 means system inactive
    if (nothing) { state.user_mode = 1 } // Survey Open
    if (surveyOK) { state.user_mode = 2 } // Wait for Vote // S-true, V,R - N/A
  }
  console.log('115', isVoteActive, nothing)
  if (isVoteActive) {
    if (nothing) {
      state.user_mode = 3
      console.log('Vote NOW')
    } // Vote Open/Start Vote Now
    if (surveyOK) { state.user_mode = 3 } // Vote Open/Start Vote Now
    if (SV_OK) { state.user_mode = 4 } // Wait for Ratify
  }
  if (isRatifyActive) {
    if (nothing) { state.user_mode = 5 } // Wait for New Iteration
    if (surveyOK) { state.user_mode = 6 } // Ratify Open
    if (voteOK) { state.user_mode = 6 } // Ratify Open
    if (SV_OK) { state.user_mode = 6 } // Ratify Open // extras
    if (R_OK) { state.user_mode = 5 } // Wait for New Iteration
  }
  console.log(' final user_mode = ', state.user_mode)
}

// P A R A M E T E R S --- TODO NOT TOUCH ------
export const setParamTableAttrVal = function (state, payload) {
  // Called from LayoutMain.vue
  // Parameters read are stored in Vuex, then used by SVRS.
  //
  const val = payload.value
  state.ratifyend = val[1].value
  state.ratifystart = val[2].value
  state.surveyend = val[3].value
  state.surveystart = val[5].value
  state.voteend = val[7].value
  state.votestart = val[9].value
  console.log('*** PARAMETERS payload:', JSON.stringify(val)) // test
  // TODO Unpack slider ranges for SVR displays here
  // console.log(' ratifyend = ', val[1].value) // test
}

// S Y S T E M // TODO NOT TOUCH
// Function setSystemTableAttrVal called from getSystemTable called from LayoutMain.vue
// // in computed()
// Input Backend (freeosgov): system table
// Output (to Vuex):
// - initUTC - init time in seconds (converted from 'init' of system table).
// - iteration (current iteration build up from already existing data) // Not used now
//
export const setSystemTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** SYSTEM Table Payload', JSON.stringify(val))
  const str = val[0].init
  const replaced = str.replace('T', ', ')
  const myDate = new Date(replaced)
  const initUTC = myDate.getTime() / 1000.0
  state.initUTC = initUTC // init point in UTC seconds
  console.log('init in UTC sec.', initUTC)
  // console.log('(* direct system.iteration = ', val[0].iteration, ' *) ') // NOT read directly from system
  // state.currentiteration = val[0].iteration // not correct now as iterations are shorter
  // NOTE I count now iteration number by myself in system data processing section of
  // the setSVRSTableAttrVal.
}
// TODO parameters table can be in any order
