// import notifyAlert from 'src/services/notify-alert'

export const setSVRSTableAttrVal = function (state, payload) {
  // Note: There is no need to store any parameters of svrs into Vuex store.
  // The parameters of svrs are used only to compute userStatus variable like:
  // surveyDone, voteDone, and ratifyDone, then are saved in Vuex store for use
  // by SVR pages.
  //
  // const attr = payload.key
  const val = payload.value
  console.log('*** svrs payload', JSON.stringify(val)) // test
  // state.SVRSInfo[attr] = val
  //
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
  const thisIteration = this.state.currentiteration
  if ((survey1 !== thisIteration) && (survey2 !== thisIteration) &&
     (survey3 !== thisIteration) && (survey4 !== thisIteration)) {
    console.log('user has already completed the survey')
    state.surveyDone = true
  } else state.surveyDone = false
  if ((vote1 !== thisIteration) && (vote2 !== thisIteration) &&
    (vote3 !== thisIteration) && (vote4 !== thisIteration)) {
    console.log('user has already completed the vote')
    state.voteDone = true
  } else state.voteDone = false
  if ((ratify1 !== thisIteration) && (ratify2 !== thisIteration) &&
    (ratify3 !== thisIteration) && (ratify4 !== thisIteration)) {
    console.log('user has already completed the ratify')
    state.ratifyDone = true
  } else state.ratifyDone = false
  console.log('userStatus: S=', state.surveyDone, ' V=', state.voteDone, ' R=', state.ratifyDone,
    ' thisIteration=', thisIteration)
}

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
  console.log('*** parameters:', JSON.stringify(val)) // test
  // console.log('paramname.lockfactor', val[0].value) // not used here yet
  // state.userlifespan = val[6].value // not used
  //
  // Reset systemStatus variables in Vuex.
  state.isSurveyActive = false
  state.isVoteActive = false
  state.isRatifyActive = false
  const currentT = Math.floor((new Date()).getTime() / 1000) // Current time in sec (msec cut off).
  const currentoffset = (currentT - this.state.init_time_seconds) % 604800
  const ratifyend = val[1].value
  const ratifystart = val[2].value
  const surveyend = val[3].value
  const surveystart = val[5].value
  const voteend = val[7].value
  const votestart = val[9].value
  // set userStatus:
  if (surveystart <= currentoffset <= surveyend) { state.isSurveyActive = true } // We are in Survey period.
  if (votestart <= currentoffset <= voteend) { state.isVoteActive = true } // -- "" --  Vote period.
  if (ratifystart <= currentoffset <= ratifyend) { state.isRatifyActive = true } // -- "" --  Ratify period.
  // Unpack slider ranges for SVR displays:
  // const surveyranges = val[4].value // TODO
  // const voteranges = val[8].value // TODO
  console.log(' votestart - ', val[9].value) // test
  console.log(' ratifyend = ', val[1].value) // test
  // state.ParamInfo[attr] = val // N/A
}
// Function setSystemTableAttrVal called from getSystemTable called from landing.vue in computed()
// Input Backend (freeosgov): system table
// Output (to Vuex):
// - init_time_seconds
// - iteration (current iteration build up from already existing data)
//
export const setSystemTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** System Table', JSON.stringify(val)) // test
  console.log('init', val[0].init)
  const str = val[0].init
  const replaced = str.replace('T', ', ')
  const myDate = new Date(replaced)
  console.log('myDate', replaced)
  const myEpoch = myDate.getTime() / 1000.0
  console.log('epoch', myEpoch)
  console.log('(* direct system.iteration = ', val[0].iteration, ' *) ') // read directly from system
  state.currentiteration = val[0].iteration
  state.init_time_seconds = myEpoch // init point in UTC seconds
  // state.SystemInfo[attr] = val // N/A
}
