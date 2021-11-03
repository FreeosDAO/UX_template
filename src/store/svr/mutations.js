// import notifyAlert from 'src/services/notify-alert'

export const setSVRSTableAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log('payload', JSON.stringify(val)) // test
  state.SVRSInfo[attr] = val
}

export const setParamTableAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log('parameters:', JSON.stringify(val)) // test
  state.ParamInfo[attr] = val
}
