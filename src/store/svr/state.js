export default () => ({
  // svr state
  user_mode: 1, // TODO change back to zero after test // This shows the final route decision (to route to S,V, or R page).
  initUTC: 0, // Initial time point in UTC seconds (read from System table and converted).
  //             Counted in: setSystemTableAttrVal.
  // Used to transfer from parameters table to setSVRSTableAttrVal:
  lockfactor: 0,
  ratifyend: 0,
  ratifystart: 0,
  surveyend: 0,
  surveyranges: '',
  surveystart: 0,
  userlifespan: 0, // N/A
  voteend: 0,
  voteranges: '',
  votestart: 0,
  //
  // SVRSInfo: { // TODO Seems to be not longer necessary
  // SVRSData: []
  // },
  // SystemInfo: { // TODO Seems to be not longer necessary
  // SystemData: []
  // },// TODO end
  //
  // converted ranges for Survey slides
  surveyrange1s: 0,
  surveyrange1e: 0,
  surveyrange2s: 0,
  surveyrange2e: 0,
  //
  // userlifespan: 0, Not used now.
  // converted ranges for Vote sliders
  voterange1s: 0,
  voterange1e: 0,
  voterange2s: 0,
  voterange2e: 0,
  voterange5s: 0,
  voterange5e: 0,
  //
  iteration: 0, // current iteration counted 'by myself'
  // constants (eventually move to .env)
  iterationSize: 3600 // TODO after testing switch back to normal size of iteration: 604800 (read from env)
})
