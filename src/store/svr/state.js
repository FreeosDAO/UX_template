export default () => ({
  // system status and user status info
  user_mode: 0, // This shows the decision to route to S,V, or R.
  // parameters table
  lockfactor: 0,
  ratifyend: 0,
  ratifystart: 0,
  surveyend: 0,
  surveyranges: '',
  surveystart: 0,
  userlifespan: 0,
  voteend: 0,
  voteranges: '',
  votestart: 0,
  // userStatus section:
  // surveyDone: false,
  // voteDone: false,
  // ratifyDone: false,
  SVRSInfo: {
    SVRSData: []
  },
  SystemInfo: {
    SystemData: []
  },
  // converted
  surveyrange1s: 0,
  surveyrange1e: 0,
  surveyrange2s: 0,
  surveyrange2e: 0,
  //
  // userlifespan: 0, N/A
  // converted
  voterange1s: 0,
  voterange1e: 0,
  voterange2s: 0,
  voterange2e: 0,
  voterange5s: 0,
  voterange5e: 0,
  //
  // Retrieved and converted from the system table:
  init_time_seconds: 0, // Initial time point converted from 'init' of system table.
  currentiteration: 0, // Current iteration number counted from blockchain data.
  iteration: 0, // as above but counted 'manually'
  // const
  iterationSize: 3600 // Normally: 604800
})
