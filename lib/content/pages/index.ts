import { currentLocale, type Localized, type Widen } from "@/lib/content";
import { commonCopy as zhCommon } from "./zh/common";
import { homeCopy as zhHome } from "./zh/home";
import { aboutCopy as zhAbout } from "./zh/about";
import { casesCopy as zhCases } from "./zh/cases";
import { contactCopy as zhContact } from "./zh/contact";
import { newsCopy as zhNews } from "./zh/news";
import { servicesCopy as zhServices } from "./zh/services";
import { serviceDetailCopy as zhServiceDetail } from "./zh/service-detail";
import { solutionsCopy as zhSolutions, solutionDetailCopy as zhSolutionDetail } from "./zh/solutions";
import { trainingCopy as zhTraining } from "./zh/training";
import { privacyCopy as zhPrivacy, termsCopy as zhTerms } from "./zh/legal";

import { commonCopy as hkCommon } from "./hk/common";
import { homeCopy as hkHome } from "./hk/home";
import { aboutCopy as hkAbout } from "./hk/about";
import { casesCopy as hkCases } from "./hk/cases";
import { contactCopy as hkContact } from "./hk/contact";
import { newsCopy as hkNews } from "./hk/news";
import { servicesCopy as hkServices } from "./hk/services";
import { serviceDetailCopy as hkServiceDetail } from "./hk/service-detail";
import { solutionsCopy as hkSolutions, solutionDetailCopy as hkSolutionDetail } from "./hk/solutions";
import { trainingCopy as hkTraining } from "./hk/training";
import { privacyCopy as hkPrivacy, termsCopy as hkTerms } from "./hk/legal";

import { commonCopy as enCommon } from "./en/common";
import { homeCopy as enHome } from "./en/home";
import { aboutCopy as enAbout } from "./en/about";
import { casesCopy as enCases } from "./en/cases";
import { contactCopy as enContact } from "./en/contact";
import { newsCopy as enNews } from "./en/news";
import { servicesCopy as enServices } from "./en/services";
import { serviceDetailCopy as enServiceDetail } from "./en/service-detail";
import { solutionsCopy as enSolutions, solutionDetailCopy as enSolutionDetail } from "./en/solutions";
import { trainingCopy as enTraining } from "./en/training";
import { privacyCopy as enPrivacy, termsCopy as enTerms } from "./en/legal";

const copies = {
  zh: {
    common: zhCommon,
    home: zhHome,
    about: zhAbout,
    cases: zhCases,
    contact: zhContact,
    news: zhNews,
    services: zhServices,
    serviceDetail: zhServiceDetail,
    solutions: zhSolutions,
    solutionDetail: zhSolutionDetail,
    training: zhTraining,
    privacy: zhPrivacy,
    terms: zhTerms,
  },
  "zh-HK": {
    common: hkCommon,
    home: hkHome,
    about: hkAbout,
    cases: hkCases,
    contact: hkContact,
    news: hkNews,
    services: hkServices,
    serviceDetail: hkServiceDetail,
    solutions: hkSolutions,
    solutionDetail: hkSolutionDetail,
    training: hkTraining,
    privacy: hkPrivacy,
    terms: hkTerms,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    cases: enCases,
    contact: enContact,
    news: enNews,
    services: enServices,
    serviceDetail: enServiceDetail,
    solutions: enSolutions,
    solutionDetail: enSolutionDetail,
    training: enTraining,
    privacy: enPrivacy,
    terms: enTerms,
  },
};

export type PageCopies = Widen<typeof copies.zh>;

const localized: Localized<PageCopies> = copies;

/** 读取当前语言的全部页面文案 */
export async function getPages(): Promise<PageCopies> {
  return localized[await currentLocale()];
}

/** 读取通用文案（导航、页脚、CTA、表单） */
export async function getCommonCopy(): Promise<PageCopies["common"]> {
  return (await getPages()).common;
}
