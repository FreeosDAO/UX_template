// import notifyAlert from 'src/services/notify-alert'

export const setSVRSTableAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log('*** svrs payload', JSON.stringify(val)) // test
  state.SVRSInfo[attr] = val
}

export const setParamTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** parameters:', JSON.stringify(val)) // test
  // console.log('paramname.lockfactor', val[0].value)
  state.ratifyend = val[1].value
  state.ratifystart = val[2].value
  state.surveyend = val[3].value
  state.surveyranges = val[4].value
  state.surveystart = val[5].value
  // state.userlifespan = val[6].value
  state.voteend = val[7].value
  state.voteranges = val[8].value
  state.votestart = val[9].value
  console.log(' votestart - ', val[9].value)
  console.log(' ratifyend = ', val[1].value)
  // state.ParamInfo[attr] = val
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
  state.init_time_seconds = myEpoch // init point in UTC seconds
  // state.SystemInfo[attr] = val // TODO not yet if at all
}
