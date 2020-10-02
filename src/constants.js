function getBaseUrl() {
  const env = process.env.DEPLOY_ENV;
  const baseUrl = "https://dpcc.niaidceirs";

  switch (env) {
    case "PROD":
      return baseUrl + ".org";

    case "STAG":
      return baseUrl + "-staging.net";

    case "DEV":
    default:
      return baseUrl + "-dev.net";
  }
}

export const USER_PROFILE_URL = getBaseUrl() + "/portal/intranet/profile/";
export const ACCOUNT_INFO_URL =
  getBaseUrl() + "/ometa/accountInformation.action";
export const LOGOUT_URL = getBaseUrl() + "/ometa/logout.action";
export const CEIRS_REPORTS_URL = getBaseUrl() + "/ometa/centerreport.action";
export const WEB_ANALYTICS_URL = getBaseUrl() + "/ometa/analytics.action";
export const SUBMIT_DATA_URL =
  getBaseUrl() + "/ometa/eventLoader.action?filter=sr";
export const SEARCH_EDIT_URL = getBaseUrl() + "/ometa/eventDetail.action";
export const EVENTS_HISTORY_URL = getBaseUrl() + "/ometa/eventHistory.action";
export const COLLABORATION_URL = "https://dpcc.niaidceirs.org/portal/intranet/";
export const REPORTS_URL =
  getBaseUrl() + "/ometa/popup.action?t=projectDetails";
export const SEQUENCING_URL = getBaseUrl() + "/ometa/sequencing_request.action";
export const REAGENTS_URL = getBaseUrl() + "/ometa/reagents.action";
export const HELP_DESK_URL = getBaseUrl() + "/ometa/help/";
export const DATA_STANDARDS_URL =
  "https://dpcc.niaidceirs.org/ometa/help/data-standards/";
export const FAQ_URL = getBaseUrl() + "/ometa/help/faqs/";
export const TRAINING_URL = getBaseUrl() + "/ometa/help/training-materials/";
export const CONTACT_US_URL = getBaseUrl() + "/ometa/support.action";
export const PROJECT_REGISTRATION_URL =
  getBaseUrl() + "/ometa/eventLoader.action?filter=pr";
export const PROJECT_MANAGEMENT_URL =
  getBaseUrl() + "/ometa/editProject.action";
export const METADATA_SETUP_URL =
  getBaseUrl() + "/ometa/metadataSetup.action?type=e";
export const ACTOR_URL = getBaseUrl() + "/ometa/addActor.action";
export const ROLE_MANAGEMENT_URL = getBaseUrl() + "/ometa/actorRole.action";
