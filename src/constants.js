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
