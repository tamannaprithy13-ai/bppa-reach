export type Language = "en" | "bn";
export type Localized = { en: string; bn: string };
export type RoutePath = "/" | "/about" | "/para-pickleball" | "/athletes" | "/events" | "/news" | "/contact" | "/accessibility";
export type NavItem = { path: RoutePath; label: Localized };
export type ContentCard = { id: string; title: Localized; summary: Localized; meta?: Localized; tag?: Localized };

export const t = (value: Localized, language: Language) => value[language];
export const pending: Localized = { en: "Sample Content — Pending Official Confirmation", bn: "নমুনা বিষয়বস্তু — আনুষ্ঠানিক নিশ্চিতকরণের অপেক্ষায়" };
export const navItems: NavItem[] = [
  { path: "/", label: { en: "Home", bn: "হোম" } },
  { path: "/about", label: { en: "About BPPA", bn: "বিপিপিএ সম্পর্কে" } },
  { path: "/para-pickleball", label: { en: "Para Pickleball", bn: "প্যারা পিকলবল" } },
  { path: "/athletes", label: { en: "Athletes", bn: "অ্যাথলেট" } },
  { path: "/events", label: { en: "Events", bn: "ইভেন্ট" } },
  { path: "/news", label: { en: "News & Media", bn: "সংবাদ ও মিডিয়া" } },
  { path: "/contact", label: { en: "Contact", bn: "যোগাযোগ" } },
];
export const programs: ContentCard[] = [
  { id: "development", title: { en: "Athlete Development", bn: "অ্যাথলেট উন্নয়ন" }, summary: { en: "A future pathway for skill development, coaching and sustained participation.", bn: "দক্ষতা উন্নয়ন, কোচিং ও ধারাবাহিক অংশগ্রহণের ভবিষ্যৎ পথ।" }, tag: pending },
  { id: "training", title: { en: "Training & Participation", bn: "প্রশিক্ষণ ও অংশগ্রহণ" }, summary: { en: "Structured opportunities designed around access, confidence and sporting growth.", bn: "অ্যাক্সেস, আত্মবিশ্বাস ও ক্রীড়া বিকাশকে কেন্দ্র করে পরিকল্পিত সুযোগ।" }, tag: pending },
  { id: "awareness", title: { en: "Awareness & Inclusion", bn: "সচেতনতা ও অন্তর্ভুক্তি" }, summary: { en: "Building wider understanding of para pickleball and inclusive sport.", bn: "প্যারা পিকলবল ও অন্তর্ভুক্তিমূলক ক্রীড়া সম্পর্কে বৃহত্তর বোঝাপড়া তৈরি।" }, tag: pending },
  { id: "community", title: { en: "Community Programs", bn: "কমিউনিটি কর্মসূচি" }, summary: { en: "Local participation concepts that can connect athletes, families and communities.", bn: "অ্যাথলেট, পরিবার ও কমিউনিটিকে যুক্ত করার স্থানীয় অংশগ্রহণ ধারণা।" }, tag: pending },
];
export const events: ContentCard[] = [
  { id: "intro-session", title: { en: "Introductory Para Pickleball Session", bn: "প্যারা পিকলবল পরিচিতি সেশন" }, summary: { en: "A sample participation session format for new athletes and supporters.", bn: "নতুন অ্যাথলেট ও সহায়কদের জন্য নমুনা অংশগ্রহণ সেশন।" }, meta: { en: "Date & venue to be confirmed", bn: "তারিখ ও স্থান নিশ্চিত করা হবে" }, tag: { en: "SAMPLE EVENT", bn: "নমুনা ইভেন্ট" } },
  { id: "coach-workshop", title: { en: "Inclusive Coaching Workshop", bn: "অন্তর্ভুক্তিমূলক কোচিং কর্মশালা" }, summary: { en: "A demonstration listing for future coach and volunteer learning.", bn: "ভবিষ্যৎ কোচ ও স্বেচ্ছাসেবক প্রশিক্ষণের নমুনা তালিকা।" }, meta: { en: "Schedule pending confirmation", bn: "সময়সূচি নিশ্চিতকরণের অপেক্ষায়" }, tag: { en: "SAMPLE EVENT", bn: "নমুনা ইভেন্ট" } },
  { id: "community-day", title: { en: "Community Participation Day", bn: "কমিউনিটি অংশগ্রহণ দিবস" }, summary: { en: "A sample open-day concept focused on accessible participation.", bn: "অ্যাক্সেসযোগ্য অংশগ্রহণকে কেন্দ্র করে নমুনা উন্মুক্ত দিবস।" }, meta: { en: "Location pending confirmation", bn: "স্থান নিশ্চিতকরণের অপেক্ষায়" }, tag: { en: "SAMPLE EVENT", bn: "নমুনা ইভেন্ট" } },
];
export const athletes: ContentCard[] = [
  { id: "athlete-01", title: { en: "Sample Athlete Profile 01", bn: "নমুনা অ্যাথলেট প্রোফাইল ০১" }, summary: { en: "This demonstration profile shows how a future athlete biography and verified sporting journey may appear.", bn: "এই প্রদর্শনী প্রোফাইলটি ভবিষ্যৎ অ্যাথলেট জীবনী ও যাচাইকৃত ক্রীড়া যাত্রার কাঠামো দেখায়।" }, meta: pending, tag: { en: "DEMONSTRATION PROFILE", bn: "প্রদর্শনী প্রোফাইল" } },
  { id: "athlete-02", title: { en: "Sample Athlete Profile 02", bn: "নমুনা অ্যাথলেট প্রোফাইল ০২" }, summary: { en: "Classification and achievements will appear only after official confirmation.", bn: "শ্রেণিবিন্যাস ও অর্জন কেবল আনুষ্ঠানিক নিশ্চিতকরণের পরে প্রকাশিত হবে।" }, meta: pending, tag: { en: "DEMONSTRATION PROFILE", bn: "প্রদর্শনী প্রোফাইল" } },
  { id: "athlete-03", title: { en: "Sample Athlete Profile 03", bn: "নমুনা অ্যাথলেট প্রোফাইল ০৩" }, summary: { en: "A respectful placeholder for a future athlete story, image and participation pathway.", bn: "ভবিষ্যৎ অ্যাথলেটের গল্প, ছবি ও অংশগ্রহণের পথের জন্য সম্মানজনক স্থানধারক।" }, meta: pending, tag: { en: "DEMONSTRATION PROFILE", bn: "প্রদর্শনী প্রোফাইল" } },
];
export const news: ContentCard[] = [
  { id: "platform", title: { en: "BPPA digital platform in development", bn: "বিপিপিএ ডিজিটাল প্ল্যাটফর্ম উন্নয়নাধীন" }, summary: { en: "This sample article demonstrates the bilingual news publishing structure prepared for future verified updates.", bn: "এই নমুনা নিবন্ধ ভবিষ্যৎ যাচাইকৃত আপডেটের জন্য প্রস্তুত দ্বিভাষিক সংবাদ কাঠামো প্রদর্শন করে।" }, meta: { en: "Publication date pending", bn: "প্রকাশের তারিখ অপেক্ষমাণ" }, tag: { en: "SAMPLE ANNOUNCEMENT", bn: "নমুনা ঘোষণা" } },
  { id: "participation", title: { en: "Future participation information", bn: "ভবিষ্যৎ অংশগ্রহণের তথ্য" }, summary: { en: "Official registration, venue and programme information will be published after confirmation.", bn: "আনুষ্ঠানিক নিবন্ধন, স্থান ও কর্মসূচির তথ্য নিশ্চিতকরণের পরে প্রকাশিত হবে।" }, meta: { en: "Source: BPPA placeholder", bn: "সূত্র: বিপিপিএ স্থানধারক" }, tag: { en: "SAMPLE NEWS", bn: "নমুনা সংবাদ" } },
  { id: "media", title: { en: "Media resources coming soon", bn: "মিডিয়া রিসোর্স শীঘ্রই আসছে" }, summary: { en: "A future space for verified photographs, video and press information.", bn: "যাচাইকৃত ছবি, ভিডিও ও প্রেস তথ্যের জন্য ভবিষ্যৎ স্থান।" }, meta: { en: "Media library pending", bn: "মিডিয়া লাইব্রেরি অপেক্ষমাণ" }, tag: { en: "SAMPLE MEDIA", bn: "নমুনা মিডিয়া" } },
];
