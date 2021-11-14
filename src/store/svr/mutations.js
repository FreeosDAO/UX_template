// import notifyAlert from 'src/services/notify-alert'

// S V R S ---
export const setSVRSTableAttrVal = function (state, payload) {
  // - No need to store any parameters of svrs into Vuex.
  // - The parameters of svrs are used only to compute userStatus variables like:
  // surveyDone, voteDone, and ratifyDone, then only 'mode' is passed to landing.vue
  // through Vuex.
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
  const thisIteration = state.currentiteration // TODO undefined
  console.log('mutations:27:thisIteration = ', thisIteration)
  // Note: All of this is already updated after S-V-R update by the S-V-R pages.
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
  let SVR_OK = false
  // TODO this can make no sense to keep all of this variables in the store (consider??)
  if ((surveyDone === false) && (voteDone === false) && (ratifyDone === false)) { nothing = true }
  if ((surveyDone === true) && (voteDone === false) && (ratifyDone === false)) { surveyOK = true }
  if ((surveyDone === false) && (voteDone === true) && (ratifyDone === false)) { voteOK = true }
  if ((surveyDone === true) && (voteDone === true) && (ratifyDone === false)) { SV_OK = true }
  if ((surveyDone === true) && (voteDone === true) && (ratifyDone === true)) { SVR_OK = true }
  console.log('mutations:57: ', nothing, surveyOK, voteOK, SV_OK, SVR_OK) // todo UNDER TESTING
  console.log('mutation:58: isSurveyActive: ', state.isSurveyActive)
  if (state.isSurveyActive) {
    // state.user_mode = 0 means system inactive
    if (nothing) { state.user_mode = 1 }
    if (surveyOK) { state.user_mode = 2 }
  }
  if (state.isVoteActive) {
    if (nothing) { state.user_mode = 3 }
    if (surveyOK) { state.user_mode = 3 }
    if (SV_OK) { state.user_mode = 4 }
  }
  if (state.isRatifyActive) {
    if (nothing) { state.user_mode = 5 }
    if (surveyOK) { state.user_mode = 6 }
    if (voteOK) { state.user_mode = 6 }
    if (SVR_OK) { state.user_mode = 5 }
  }
  console.log(' mutation:end: user_mode = ', state.user_mode)
}

// P A R A M E T E R S ---
export const setParamTableAttrVal = function (state, payload) {
  // Note: This mutation is called from xxx each time when landing (home) page
  // is displayed.
  // Parameters received as 'parameters' table from the backend are not
  // saved directly to the Vuex. They are used only to count the systemStatus
  // variables like: isSurveyActive, isVoteActive, and isRatifyActive.
  // Next the above are stored in Vuex to be accessible by SVR pages
  // appropriately.
  //
  // const attr = payload.key // not used now
  const val = payload.value
  console.log('*** PARAMETERS payload:', JSON.stringify(val)) // test
  // console.log('paramname.lockfactor', val[0].value) // not used here yet
  // state.userlifespan = val[6].value // not used
  //
  // Reset systemStatus variables in Vuex.
  state.isSurveyActive = false
  state.isVoteActive = false
  state.isRatifyActive = false
  const currentT = Math.floor((new Date()).getTime() / 1000) // Current time in sec (msec cut off).
  const currentoffset = (currentT - state.init_time_seconds) % state.iterationSize
  console.log(' mutation:96: currentT = ', currentT)
  console.log(' mutation:97: init_time_seconds = ', state.init_time_seconds) // TODO wrong?
  console.log(' mutation:98: currentoffset = ', currentoffset)
  const ratifyend = val[1].value
  const ratifystart = val[2].value
  const surveyend = val[3].value
  const surveystart = val[5].value
  const voteend = val[7].value
  const votestart = val[9].value
  // set userStatus:
  console.log('mutations:106: S-V-R Active?', state.isSurveyActive, state.isVoteActive, state.isRatifyActive)

  if ((surveystart <= currentoffset) && (currentoffset <= surveyend)) { state.isSurveyActive = true } // We are in Survey period.
  if ((votestart <= currentoffset) && (currentoffset <= voteend)) { state.isVoteActive = true } // -- "" --  Vote period.
  console.log('mutations:107: V Active?', votestart, currentoffset, voteend)
  if ((ratifystart <= currentoffset) && (currentoffset <= ratifyend)) { state.isRatifyActive = true } // -- "" --  Ratify period.
  console.log('mutations:110: S-V-R Active?', state.isSurveyActive, state.isVoteActive, state.isRatifyActive)
  // TODO Unpack slider ranges for SVR displays:
  // const surveyranges = val[4].value // TODO
  // const voteranges = val[8].value // TODO
  console.log(' votestart - ', val[9].value) // test
  console.log(' ratifyend = ', val[1].value) // test
  // state.ParamInfo[attr] = val // N/A
}

// S Y S T E M
// Function setSystemTableAttrVal called from getSystemTable called from LayoutMain.vue in computed()
// Input Backend (freeosgov): system table
// Output (to Vuex):
// - init_time_seconds
// - iteration (current iteration build up from already existing data)
//
export const setSystemTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** SYSTEM Table Payload', JSON.stringify(val)) // test
  console.log('init', val[0].init)
  const str = val[0].init
  const replaced = str.replace('T', ', ')
  const myDate = new Date(replaced)
  console.log('init formatted:', replaced)
  const initUTC = myDate.getTime() / 1000.0
  console.log('init in UTC sec.', initUTC)
  console.log('(* direct system.iteration = ', val[0].iteration, ' *) ') // read directly from system
  state.currentiteration = val[0].iteration // not agree now as iterations are shorter
  state.init_time_seconds = initUTC // init point in UTC seconds
  // console.log(' mutation:152:state.init_time_seconds =', state.init_time_seconds)
  // console.log(' mutation:153:state.currentiteration =', state.currentiteration)
  // state.SystemInfo[attr] = val // N/A
  // Note that getTime() returns milliseconds, not plain seconds:
  const currentTimeSec = Math.floor((new Date()).getTime() / 1000)
  const diff = Math.floor(((currentTimeSec - initUTC) / state.iterationSize) + 1) // TODO myEpoch take from Vuex
  state.iteration = diff // active iteration number
  console.log('mutations:161:iteration:', diff)
}
