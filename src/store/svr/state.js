export default () => ({
  // system status and user status info
  user_mode: 1, // This shows the decision to route to S,V, or R.
  // systemStatus section:
  isSurveyActive: false,
  isVoteActive: false,
  isRatifyActive: false,
  // userStatus section:
  surveyDone: false,
  voteDone: false,
  ratifyDone: false,
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
  currentiteration: 0 // Current iteration number counted from blockchain data.
})
