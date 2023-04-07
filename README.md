# HAI 2021 Annual Report
[![Netlify Status](https://api.netlify.com/api/v1/badges/f9b7b05f-ce9c-4815-a40a-0befbfba802d/deploy-status)](https://app.netlify.com/sites/hai-2021-annual-report/deploys)

This repo contains a Netlify-hosted static website for the HAI 2021 Annual Report.  The site is hosted under SWS's Netlify account. You can login to Netlify here: https://app.netlify.com/

**IMPORTANT:** The [2022 Annual Report site](https://github.com/SU-SWS/hai-annual-report) has been launched out of a new `hai-annual-report` repo which should cover all reports in one repository. This has replaced the 2021 Annual Report on the live Stanford Annual Report URL: http://hai-annual-report.stanford.edu/ . However, this 2022 site is still active on the Netlify URL.

- Netlify URL: https://hai-2021-annual-report.netlify.app/

The repo was built off of the site for the previous year, [SU-SWS/hai-2020-annual-report](https://github.com/SU-SWS/hai-2020-annual-report), which was built off [SU-SWS/assets_stanford_edu](https://github.com/SU-SWS/assets_stanford_edu).

## Netlify Basics
- The Netlify site is directly connected to this repo through Github.
- The `/public` directory is where the static site files are (it is the `docroot` in other words).
    - The repo root is for Netlify configuration files.
- The `main` branch is configured as the Netlify base/deploy branch.
    - The code in the `main` branch is what gets deployed to the live site.
    - **IMPORTANT:** Whenever the `main` branch code is changed, it triggers a new deployment. This includes pushing directly to the `main` branch.

### Making a new deployment
1. Fetch the latest `main` branch
1. Create a new branch for your changes
1. Make changes
    - If supplied with new site files from vendor, wipe the existing `/public` directory and replace with new files.
1. After making changes, commit them, push up to repo, and create a PR.
    - Make sure the PR is set to merge into the `main` branch (it should be by default).
1. Netlify will run a few tests on the PR and also create a preview URL.
    - Wait for tests/checks to pass and then inspect/review the preview briefly for basic QA.
1. Once the code is ready to deploy, squash and merge the PR into the `main` branch.
    - Whenever the `main` branch code is changed, it triggers a new deployment.
