export type Language = 'en' | 'kn';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      mission: "Mission",
      programme: "Programme",
      eligibility: "Eligibility",
      impact: "Impact",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      headline: "Building India's Next Generation of Village Leaders",
      subheadline: "Every elected representative deserves the knowledge, digital tools and institutional support to lead with confidence. Namma Grama Nayaka combines AI, capacity building and community participation to strengthen grassroots governance.",
      primaryCta: "Become a Ward Member",
      secondaryCta: "Explore the Initiative",
      urgency: "The Grama Panchayat elections are approaching. The time to prepare is now."
    },
    about: {
      title: "Why This Initiative Exists",
      narrative: "Every five years, millions of citizens elect leaders to shape the future of their villages. Yet most representatives begin their journey without structured training, decision-support systems or digital governance tools.",
      highlightsTitle: "The Challenges Facing Elected Leaders",
      highlights: [
        {
          title: "Constitutional Responsibilities",
          desc: "Handling complex devolved duties under the 73rd Amendment across 29 subjects without prior governance training."
        },
        {
          title: "Multiple Schemes",
          desc: "Navigating dozens of central and state welfare programs, budgets, and compliance guidelines."
        },
        {
          title: "Limited Institutional Support",
          desc: "Entering public office without structured onboarding, continuous training, or mentorship."
        },
        {
          title: "Underutilized Resources",
          desc: "Struggling to translate available government grants into structured, impactful village development plans."
        },
        {
          title: "Citizen Expectations",
          desc: "Meeting high community demands for transparent, fast, and responsive service delivery."
        }
      ],
      transition: "Leadership should never depend on trial and error."
    },
    stats: {
      title: "The Landscape of Local Governance",
      panchayats: "Grama Panchayats",
      wards: "Approximate Wards",
      voters: "Rural Voters",
      acs: "Rural or Significantly Rural ACs",
      targetCandidates: "Potential Candidates for Ward Member (Goal)",
      targetWomen: "Women Candidates (Programme Ambition)"
    },
    whyMatter: {
      title: "Why Grama Panchayats Matter",
      subtitle: "The foundation of local self governance.",
      amenities: "Basic Amenities",
      amenitiesDesc: "Healthcare, Education, Housing, Sanitation, Drinking water, Sports and community facilities.",
      infra: "Foundational Infrastructure",
      infraDesc: "Roads and bridges, Electricity, Water, Irrigation, Digital connectivity, Community assets.",
      social: "Social Protection",
      socialDesc: "Welfare schemes, SC and ST communities, Women and children, Elderly citizens, Persons with disabilities, Family welfare, Scholarships and pensions.",
      earning: "Earning Opportunities",
      earningDesc: "Agriculture, Animal husbandry, Fisheries, Forestry, Self help groups, Farmer producer organisations, Cottage and small industries, Skills, credit, raw materials and market access."
    },
    leadership: {
      title: "Why Leadership at the Ward Level Matters",
      subtitle: "Empowered Ward Members are the foundation of effective grassroots governance.",
      points: [
        {
          title: "Closest to the People",
          desc: "Ward Members are the first point of contact for citizens, with the deepest understanding of local needs, challenges, and aspirations."
        },
        {
          title: "Foundation of Participatory Governance",
          desc: "Strong ward leadership encourages active citizen participation, ensuring that every voice contributes to local decision-making."
        },
        {
          title: "Turning Local Issues into Local Solutions",
          desc: "Effective leaders identify community challenges early, prioritize them, and drive timely action for better public service delivery."
        },
        {
          title: "Driving Inclusive Development",
          desc: "Ward-level leadership ensures that women, youth, vulnerable groups, and underserved communities are represented in development planning."
        },
        {
          title: "Building Transparent and Accountable Governance",
          desc: "Empowered Ward Members strengthen trust by promoting transparency, responsiveness, and continuous engagement with citizens."
        },
        {
          title: "The Building Blocks of Strong Gram Panchayats",
          desc: "Every successful Gram Panchayat begins with capable Ward Members who transform local leadership into sustainable village development."
        }
      ]
    },
    objectives: {
      title: "Putting the Pancha in Panchayats",
      youth: "Youth in Politics",
      youthDesc: "Bringing a new generation of energetic, capable young leaders into grassroots governance.",
      women: "Women Leaders",
      womenDesc: "Empowering women to take charge and lead development in their communities.",
      affordable: "Affordable Participation",
      affordableDesc: "Reducing excessive election expenditure to enable true participation based on merit.",
      tech: "Technology Led Governance",
      techDesc: "Using digital tools to improve transparency, planning, and citizen engagement.",
      progressive: "Progressive Local Agenda",
      progressiveDesc: "Focusing on actual development subjects rather than partisan politics."
    },
    timeline: {
      title: "How the Initiative Works",
      phase1: "Phase 1: Preparation",
      phase1Desc: "Establishing constituency coordinators, trainers, and panchayat level volunteers. Developing training content, digital tools, and programme structure.",
      phase2: "Phase 2: Identification",
      phase2Desc: "Identifying suitable candidates for ward member, with a major focus on youth aged 21 to 35, women, community leaders, SHG members, student leaders, social workers, and those with a progressive, public service mindset.",
      phase3: "Phase 3: Execution",
      phase3Desc: "Delivering training modules on understanding the ward, Ward Sabha agendas, local manifestos, campaign planning, and providing guidance on nomination and candidature filing.",
      disclaimer: "Final candidature and eligibility remain subject to applicable election laws, reservation rules, government notifications and official election procedures."
    },
    eligibility: {
      title: "Who Can Become a Ward Member",
      point1: "A resident genuinely interested in serving their local community.",
      point2: "A person willing to understand and solve issues at the ward level.",
      point3: "Young leaders, women, SHG members, student leaders, social workers, farmers, professionals, or community volunteers.",
      point4: "Someone committed to ethical and transparent public service.",
      point5: "Someone willing to undergo training and engage regularly with residents.",
      disclaimer: "Eligibility to contest a ward election is governed by applicable laws, reservation notifications and official election rules. Submission of this form does not guarantee selection, nomination or election candidature."
    },
    apply: {
      title: "Do You Want to Become a Ward Member?",
      subtitle: "If you want to serve your ward, participate in local governance and contribute to the development of your Grama Panchayat, please fill out the form below.",
      cta: "Fill the Ward Member Interest Form",
      fallback: "If the form is not visible on your device, please open it using the button below.",
      notice: "Your details will be reviewed by the Namma Grama Nayaka team. Filling out the form does not guarantee candidature or selection.",
      privacy: "By submitting the form, you consent to the collection and processing of the information you provide for communication, programme assessment, training and purposes related to participation. Please review the Google Form’s privacy information before submitting."
    },
    volunteer: {
      title: "Volunteer or Partner With Us",
      subtitle: "We are calling on youth networks, universities, NGOs, and goodwill ambassadors to join the movement.",
      cta: "Partner With the Initiative"
    },
    training: {
      title: "Training and Support",
      subtitle: "Selected participants may receive comprehensive support to prepare for public service.",
      items: [
        "Understanding Panchayati Raj and Ward responsibilities",
        "Citizen engagement and Ward Sabha preparation",
        "Local issue identification and Development planning",
        "Government schemes and welfare delivery",
        "Digital tools for transparent governance",
        "Ethical campaigning and Public communication",
        "Filing and awareness of the election process"
      ],
      disclaimer: "Note: The initiative does not promise guaranteed political endorsement, party tickets, nomination or election success."
    },
    impact: {
      title: "Expected Impact",
      targetsLabel: "Expected Outcomes & Targets",
      point1: "Stronger local accountability and transparency.",
      point2: "Improved citizen participation in Grama Sabhas.",
      point3: "More capable, trained leadership at the ward level.",
      point4: "Greater community awareness of local governance.",
      point5: "A shift towards merit driven grassroots participation."
    },
    partners: {
      title: "Together for Stronger Grama Panchayats",
      supportedBy: "An Initiative Of"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "What is Namma Grama Nayaka?",
      a1: "Namma Grama Nayaka is a initiative for capacity building aimed at identifying, preparing, and supporting capable young leaders to participate in governance at the ward level and strengthen Grama Panchayats.",
      q2: "Who can register?",
      a2: "Any resident interested in serving their community who is willing to undergo training and engage with citizens can register. This includes youth, women, social workers, farmers, and professionals.",
      q3: "Is this only for young people?",
      a3: "While there is a strong focus on empowering youth aged 21 to 35, anyone with a progressive, public service mindset is encouraged to participate.",
      q4: "Can women apply?",
      a4: "Yes, absolutely. A major ambition of the programme is to support thousands of women in entering grassroots public leadership.",
      q6: "Does filling out the form guarantee candidature?",
      a6: "No. Filling out the form expresses your interest. All eligibility related to elections, reservations, nominations, and procedures are strictly governed by applicable laws and official notifications.",
      q7: "Will participants receive training?",
      a7: "Yes. Participants will receive structured training on leadership, public speaking, local governance, Panchayati Raj, and capacity building. The programme aims to equip participants with the knowledge and skills needed for effective grassroots leadership.",
      q8: "Is there any registration fee?",
      a8: "Please refer to official programme communications regarding any specific training costs, but the core aim is affordable participation.",
      q9: "What documents may be required?",
      a9: "Standard identification and residence proof as required by election laws will be necessary if you choose to contest, but initial registration only requires the details in the form.",
      q10: "How will my information be used?",
      a10: "Your information will be used for communication, programme assessment, training, and purposes related to participation.",
      q11: "Can volunteers and organisations participate?",
      a11: "Yes, we actively welcome partnerships with NGOs, youth networks, universities, and trainers.",
      q12: "In which areas of Karnataka will the initiative operate?",
      a12: "The initiative aims to have a statewide reach across rural and significantly rural assembly constituencies in Karnataka.",
      q13: "What is the role of a ward member?",
      a13: "A ward member represents their local ward in the Grama Panchayat, acts as a bridge between citizens and government, and helps plan local development.",
      q14: "What is the difference between a Ward Sabha and a Grama Sabha?",
      a14: "A Ward Sabha is a meeting of voters within a specific ward, while a Grama Sabha is a meeting of all voters across the entire Grama Panchayat."
    },
    contact: {
      title: "Contact Us",
      email: "Email",
      phone: "Phone",
      address: "Address"
    },
    footer: {
      mission: "Preparing capable grassroots leaders to strengthen Karnataka’s Grama Panchayats.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      disclaimer: "Disclaimer",
      copyright: "© 2026 Namma Grama Nayaka. All rights reserved.",
      disclaimerText: "Namma Grama Nayaka is a initiative for capacity building and leadership. Registration or participation does not guarantee nomination, candidature, endorsement or election. All eligibility related to elections, reservations, nominations and procedures are governed by applicable laws and official notifications."
    }
  },
  kn: {
    // Kannada translations can be added here
    // Currently falling back to English keys to maintain structure, 
    // real translations should be provided by native speakers.
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ಬಗ್ಗೆ",
      mission: "ಉದ್ದೇಶ",
      programme: "ಕಾರ್ಯಕ್ರಮ",
      eligibility: "ಅರ್ಹತೆ",
      impact: "ಪರಿಣಾಮ",
      faq: "FAQ",
      contact: "ಸಂಪರ್ಕಿಸಿ"
    },
    hero: {
      headline: "ಭಾರತದ ಮುಂದಿನ ಪೀಳಿಗೆಯ ಗ್ರಾಮ ನಾಯಕರ ನಿರ್ಮಾಣ",
      subheadline: "ಪ್ರತಿಯೊಬ್ಬ ಚುನಾಯಿತ ಪ್ರತಿನಿಧಿಯೂ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಮುನ್ನಡೆಸಲು ಜ್ಞಾನ, ಡಿಜಿಟಲ್ ಉಪಕರಣಗಳು ಮತ್ತು ಸಾಂಸ್ಥಿಕ ಬೆಂಬಲವನ್ನು ಪಡೆಯಲು ಅರ್ಹರಾಗಿದ್ದಾರೆ. ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕವು ತಳಮಟ್ಟದ ಆಡಳಿತವನ್ನು ಸಶಕ್ತಗೊಳಿಸಲು AI, ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿ ಮತ್ತು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.",
      primaryCta: "ವಾರ್ಡ್ ಸದಸ್ಯರಾಗಿ",
      secondaryCta: "ಉಪಕ್ರಮವನ್ನು ಅನ್ವೇಷಿಸಿ",
      urgency: "ಗ್ರಾಮ ಪಂಚಾಯತಿ ಚುನಾವಣೆಗಳು ಸಮೀಪಿಸುತ್ತಿವೆ. ಸಿದ್ಧತೆಗೆ ಇದುವೇ ಸಕಾಲ."
    },
    about: {
      title: "ಈ ಉಪಕ್ರಮವೇಕೆ ಅಗತ್ಯ?",
      narrative: "ಪ್ರತಿ ಐದು ವರ್ಷಗಳಿಗೊಮ್ಮೆ, ಲಕ್ಷಾಂತರ ನಾಗರಿಕರು ತಮ್ಮ ಹಳ್ಳಿಗಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಲು ನಾಯಕರನ್ನು ಆರಿಸುತ್ತಾರೆ. ಆದರೆ ಹೆಚ್ಚಿನ ಪ್ರತಿನಿಧಿಗಳು ಯಾವುದೇ ರಚನಾತ್ಮಕ ತರಬೇತಿ, ನಿರ್ಧಾರ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆಗಳು ಅಥವಾ ಡಿಜಿಟಲ್ ಆಡಳಿತ ಉಪಕರಣಗಳಿಲ್ಲದೆ ತಮ್ಮ ಪಯಣವನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ.",
      highlightsTitle: "ಚುನಾಯಿತ ಪ್ರತಿನಿಧಿಗಳು ಎದುರಿಸುತ್ತಿರುವ ಸವಾಲುಗಳು",
      highlights: [
        {
          title: "ಸಂವಿಧಾನಾತ್ಮಕ ಜವಾಬ್ದಾರಿಗಳು",
          desc: "ಯಾವುದೇ ಪೂರ್ವಾಪರ ಆಡಳಿತ ತರಬೇತಿಯಿಲ್ಲದೆ 73ನೇ ತಿದ್ದುಪಡಿಯಡಿಯ 29 ವಿಷಯಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಸವಾಲು."
        },
        {
          title: "ಹಲವು ಯೋಜನೆಗಳು",
          desc: "ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರಗಳ ಹಲವಾರು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು, ಬಜೆಟ್‌ಗಳು ಮತ್ತು ನಿಯಮಾವಳಿಗಳನ್ನು ನಿಯಂತ್ರಿಸುವುದು."
        },
        {
          title: "ಪರಿಮಿತ ಸಾಂಸ್ಥಿಕ ಬೆಂಬಲ",
          desc: "ರಚನಾತ್ಮಕ ತರಬೇತಿ, ನಿರಂತರ ಕಲಿಕೆ ಅಥವಾ ಸಾಂಸ್ಥಿಕ ಮಾರ್ಗದರ್ಶನವಿಲ್ಲದೆ ಸಾರ್ವಜನಿಕ ಸೇವೆಗೆ ಬರುವುದು."
        },
        {
          title: "ಅಪೂರ್ಣ ಬಳಕೆಯ ಸಂಪನ್ಮೂಲಗಳು",
          desc: "ಲಭ್ಯವಿರುವ ಸರ್ಕಾರಿ ಅನುದಾನಗಳನ್ನು ಸೂಕ್ತ ಗ್ರಾಮ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ಶ್ರಮಿಸುವುದು."
        },
        {
          title: "ನಾಗರಿಕರ ನಿರೀಕ್ಷೆಗಳು",
          desc: "ಪಾರದರ್ಶಕ, ಕ್ಷಿಪ್ರ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಸೇವೆಗಳಿಗಾಗಿ ಗ್ರಾಮಸ್ಥರ ನಿರೀಕ್ಷೆಗಳನ್ನು ಪೂರೈಸುವುದು."
        }
      ],
      transition: "ನಾಯಕತ್ವವು ಎಂದಿಗೂ ಪ್ರಯೋಗ ಮತ್ತು ದೋಷವನ್ನು ಅವಲಂಬಿಸಿರಬಾರದು."
    },
    stats: {
      title: "ಸ್ಥಳೀಯ ಆಡಳಿತದ ನೋಟ",
      panchayats: "ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳು",
      wards: "ಅಂದಾಜು ವಾರ್ಡ್‌ಗಳು",
      voters: "ಗ್ರಾಮೀಣ ಮತದಾರರು",
      acs: "ಗ್ರಾಮೀಣ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರಗಳು",
      targetCandidates: "ಸಂಭಾವ್ಯ ವಾರ್ಡ್ ಸದಸ್ಯ ಅಭ್ಯರ್ಥಿಗಳು (ಗುರಿ)",
      targetWomen: "ಮಹಿಳಾ ಅಭ್ಯರ್ಥಿಗಳು (ಕಾರ್ಯಕ್ರಮದ ಮಹತ್ವಾಕಾಂಕ್ಷೆ)"
    },
    whyMatter: {
      title: "ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳ ಪ್ರಾಮುಖ್ಯತೆ",
      subtitle: "ಸ್ಥಳೀಯ ಸ್ವ ಆಡಳಿತದ ಬುನಾದಿ.",
      amenities: "ಮೂಲ ಸೌಲಭ್ಯಗಳು",
      amenitiesDesc: "ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ, ವಸತಿ, ನೈರ್ಮಲ್ಯ, ಕುಡಿಯುವ ನೀರು, ಕ್ರೀಡೆ ಮತ್ತು ಸಮುದಾಯ ಸೌಲಭ್ಯಗಳು.",
      infra: "ಮೂಲಸೌಕರ್ಯ",
      infraDesc: "ರಸ್ತೆಗಳು ಮತ್ತು ಸೇತುವೆಗಳು, ವಿದ್ಯುತ್, ನೀರು, ನೀರಾವರಿ, ಡಿಜಿಟಲ್ ಸಂಪರ್ಕ, ಸಮುದಾಯ ಆಸ್ತಿಗಳು.",
      social: "ಸಾಮಾಜಿಕ ರಕ್ಷಣೆ",
      socialDesc: "ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು, ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದ ಸಮುದಾಯಗಳು, ಮಹಿಳೆಯರು ಮತ್ತು ಮಕ್ಕಳು, ಹಿರಿಯ ನಾಗರಿಕರು, ವಿಕಲಚೇತನರು, ಸ್ಕಾಲರ್‌ಶಿಪ್‌ಗಳು ಮತ್ತು ಪಿಂಚಣಿಗಳು.",
      earning: "ಗಳಿಕೆಯ ಅವಕಾಶಗಳು",
      earningDesc: "ಕೃಷಿ, ಪಶುಸಂಗೋಪನೆ, ಮೀನುಗಾರಿಕೆ, ಅರಣ್ಯ, ಸ್ವ ಸಹಾಯ ಸಂಘಗಳು, ಕೌಶಲ್ಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ."
    },
    leadership: {
      title: "ವಾರ್ಡ್ ಮಟ್ಟದ ನಾಯಕತ್ವ ಏಕೆ ಮುಖ್ಯ?",
      subtitle: "ಸಶಕ್ತ ವಾರ್ಡ್ ಸದಸ್ಯರು ಪರಿಣಾಮಕಾರಿ ತಳಮಟ್ಟದ ಆಡಳಿತದ ಬುನಾದಿಯಾಗಿದ್ದಾರೆ.",
      points: [
        {
          title: "ಜನರಿಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದವರು",
          desc: "ವಾರ್ಡ್ ಸದಸ್ಯರು ನಾಗರಿಕರ ಮೊದಲ ಸಂಪರ್ಕ ಬಿಂದುವಾಗಿದ್ದು, ಸ್ಥಳೀಯ ಅಗತ್ಯಗಳು, ಸವಾಲುಗಳು ಮತ್ತು ಆಕಾಂಕ್ಷೆಗಳ ಆಳವಾದ ಅರಿವನ್ನು ಹೊಂದಿರುತ್ತಾರೆ."
        },
        {
          title: "ಸಹಭಾಗಿತ್ವದ ಆಡಳಿತದ ಬುನಾದಿ",
          desc: "ಬಲವಾದ ವಾರ್ಡ್ ನಾಯಕತ್ವವು ಸಕ್ರಿಯ ನಾಗರಿಕ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ, ಪ್ರತಿಯೊಬ್ಬರ ಧ್ವನಿಯೂ ಸ್ಥಳೀಯ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಿಕೆಯಲ್ಲಿ ಕೊಡುಗೆ ನೀಡುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ."
        },
        {
          title: "ಸ್ಥಳೀಯ ಸಮಸ್ಯೆಗಳನ್ನು ಸ್ಥಳೀಯ ಪರಿಹಾರಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು",
          desc: "ಪರಿಣಾಮಕಾರಿ ನಾಯಕರು ಸಮುದಾಯದ ಸವಾಲುಗಳನ್ನು ಮೊದಲೇ ಗುರುತಿಸಿ, ಅವುಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡಿ, ಉತ್ತಮ ಸಾರ್ವಜನಿಕ ಸೇವೆಗೆ ಸಮಯೋಚಿತ ಕ್ರಮ ಕೈಗೊಳ್ಳುತ್ತಾರೆ."
        },
        {
          title: "ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯನ್ನು ಮುನ್ನಡೆಸುವುದು",
          desc: "ವಾರ್ಡ್ ಮಟ್ಟದ ನಾಯಕತ್ವವು ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಯಲ್ಲಿ ಮಹಿಳೆಯರು, ಯುವಕರು, ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಸಮುದಾಯಗಳು ಪ್ರತಿನಿಧಿಸಲ್ಪಡುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ."
        },
        {
          title: "ಪಾರದರ್ಶಕ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಆಡಳಿತ ನಿರ್ಮಾಣ",
          desc: "ಸಶಕ್ತ ವಾರ್ಡ್ ಸದಸ್ಯರು ಪಾರದರ್ಶಕತೆ, ಸ್ಪಂದನಶೀಲತೆ ಮತ್ತು ನಾಗರಿಕರೊಂದಿಗೆ ನಿರಂತರ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುವ ಮೂಲಕ ನಂಬಿಕೆಯನ್ನು ಬಲಪಡಿಸುತ್ತಾರೆ."
        },
        {
          title: "ಬಲವಾದ ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳ ಮೂಲ ಕಲ್ಲುಗಳು",
          desc: "ಪ್ರತಿಯೊಂದು ಯಶಸ್ವಿ ಗ್ರಾಮ ಪಂಚಾಯತಿಯು ಸಮರ್ಥ ವಾರ್ಡ್ ಸದಸ್ಯರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಅವರು ಸ್ಥಳೀಯ ನಾಯಕತ್ವವನ್ನು ಸುಸ್ಥಿರ ಗ್ರಾಮ ಅಭಿವೃದ್ಧಿಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತಾರೆ."
        }
      ]
    },
    objectives: {
      title: "ಪಂಚಾಯತ್‌ಗಳಲ್ಲಿ ಪಂಚ್ ತರುವುದು",
      youth: "ರಾಜಕೀಯದಲ್ಲಿ ಯುವಕರು",
      youthDesc: "ಹೊಸ ತಲೆಮಾರಿನ ಸಮರ್ಥ ಯುವ ನಾಯಕರನ್ನು ತಳಮಟ್ಟದ ಆಡಳಿತಕ್ಕೆ ತರುವುದು.",
      women: "ಮಹಿಳಾ ನಾಯಕಿಯರು",
      womenDesc: "ತಮ್ಮ ಸಮುದಾಯಗಳಲ್ಲಿ ಅಭಿವೃದ್ಧಿಯನ್ನು ಮುನ್ನಡೆಸಲು ಮಹಿಳೆಯರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.",
      affordable: "ಕೈಗೆಟುಕುವ ಭಾಗವಹಿಸುವಿಕೆ",
      affordableDesc: "ಅರ್ಹತೆ ಆಧಾರಿತ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ವಿಪರೀತ ಚುನಾವಣಾ ವೆಚ್ಚವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು.",
      tech: "ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ಆಡಳಿತ",
      techDesc: "ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಾಗರಿಕರ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಸುಧಾರಿಸಲು ಡಿಜಿಟಲ್ ಸಾಧನಗಳ ಬಳಕೆ.",
      progressive: "ಪ್ರಗತಿಪರ ಸ್ಥಳೀಯ ಅಜೆಂಡಾ",
      progressiveDesc: "ಪಕ್ಷಪಾತಿ ರಾಜಕೀಯಕ್ಕಿಂತ ಅಭಿವೃದ್ಧಿ ವಿಷಯಗಳ ಮೇಲೆ ಗಮನಹರಿಸುವುದು."
    },
    timeline: {
      title: "ಉಪಕ್ರಮವು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      phase1: "ಹಂತ 1: ಸಿದ್ಧತೆ",
      phase1Desc: "ಸಂಯೋಜಕರು, ತರಬೇತುದಾರರು ಮತ್ತು ಸ್ವಯಂಸೇವಕರನ್ನು ಸ್ಥಾಪಿಸುವುದು. ತರಬೇತಿ ವಿಷಯ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಧನಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು.",
      phase2: "ಹಂತ 2: ಗುರುತಿಸುವಿಕೆ",
      phase2Desc: "ಯುವಕರು, ಮಹಿಳೆಯರು, ಸಮುದಾಯದ ಮುಖಂಡರು ಮತ್ತು ಸೇವಾ ಮನೋಭಾವವುಳ್ಳ ಸೂಕ್ತ ವಾರ್ಡ್ ಸದಸ್ಯ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಗುರುತಿಸುವುದು.",
      phase3: "ಹಂತ 3: ಅನುಷ್ಠಾನ",
      phase3Desc: "ವಾರ್ಡ್ ಸಭೆ, ಪ್ರಣಾಳಿಕೆ, ಪ್ರಚಾರ ಯೋಜನೆ ಮತ್ತು ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ ಕುರಿತು ತರಬೇತಿ ನೀಡುವುದು.",
      disclaimer: "ಅಂತಿಮ ಉಮೇದುವಾರಿಕೆ ಮತ್ತು ಅರ್ಹತೆಯು ಅನ್ವಯವಾಗುವ ಚುನಾವಣಾ ಕಾನೂನುಗಳು ಮತ್ತು ಮೀಸಲಾತಿ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ."
    },
    eligibility: {
      title: "ಯಾರು ವಾರ್ಡ್ ಸದಸ್ಯರಾಗಬಹುದು?",
      point1: "ತಮ್ಮ ಸ್ಥಳೀಯ ಸಮುದಾಯಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಆಸಕ್ತಿ ಹೊಂದಿರುವ ನಿವಾಸಿ.",
      point2: "ವಾರ್ಡ್ ಮಟ್ಟದ ಸಮಸ್ಯೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಪರಿಹರಿಸಲು ಸಿದ್ಧರಿರುವ ವ್ಯಕ್ತಿ.",
      point3: "ಯುವ ನಾಯಕರು, ಮಹಿಳೆಯರು, ಸ್ವ ಸಹಾಯ ಸಂಘದ ಸದಸ್ಯರು, ರೈತರು, ವೃತ್ತಿಪರರು ಅಥವಾ ಸ್ವಯಂಸೇವಕರು.",
      point4: "ನೈತಿಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಾರ್ವಜನಿಕ ಸೇವೆಗೆ ಬದ್ಧರಾಗಿರುವವರು.",
      point5: "ತರಬೇತಿ ಪಡೆಯಲು ಮತ್ತು ನಾಗರಿಕರೊಂದಿಗೆ ನಿಯಮಿತವಾಗಿ ಬೆರೆಯಲು ಸಿದ್ಧರಿರುವವರು.",
      disclaimer: "ವಾರ್ಡ್ ಚುನಾವಣೆಗೆ ಸ್ಪರ್ಧಿಸುವ ಅರ್ಹತೆಯು ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳು ಮತ್ತು ಅಧಿಕೃತ ಚುನಾವಣಾ ನಿಯಮಗಳಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ. ಈ ಫಾರ್ಮ್ ಸಲ್ಲಿಕೆಯು ಆಯ್ಕೆ ಅಥವಾ ಉಮೇದುವಾರಿಕೆಯನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ."
    },
    apply: {
      title: "ನೀವು ವಾರ್ಡ್ ಸದಸ್ಯರಾಗಲು ಬಯಸುವಿರಾ?",
      subtitle: "ನಿಮ್ಮ ವಾರ್ಡ್‌ಗೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಮತ್ತು ಗ್ರಾಮ ಪಂಚಾಯತಿ ಅಭಿವೃದ್ಧಿಗೆ ಕೊಡುಗೆ ನೀಡಲು ನೀವು ಬಯಸಿದರೆ, ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
      cta: "ವಾರ್ಡ್ ಸದಸ್ಯರ ಆಸಕ್ತಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ",
      fallback: "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಫಾರ್ಮ್ ಕಾಣಿಸದಿದ್ದರೆ, ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಬಟನ್ ಬಳಸಿ ತೆರೆಯಿರಿ.",
      notice: "ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕ ತಂಡವು ಪರಿಶೀಲಿಸುತ್ತದೆ. ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡುವುದರಿಂದ ಉಮೇದುವಾರಿಕೆ ಖಾತರಿಯಾಗುವುದಿಲ್ಲ.",
      privacy: "ಫಾರ್ಮ್ ಸಲ್ಲಿಸುವ ಮೂಲಕ, ಸಂವಹನ ಮತ್ತು ತರಬೇತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮಾಹಿತಿಯ ಸಂಗ್ರಹಣೆಗೆ ನೀವು ಸಮ್ಮತಿಸುತ್ತೀರಿ. ದಯವಿಟ್ಟು Google Form ನ ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ."
    },
    volunteer: {
      title: "ಸ್ವಯಂಸೇವಕರಾಗಿ ಅಥವಾ ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ",
      subtitle: "ಯುವ ಜಾಲಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು, ಎನ್‌ಜಿಒಗಳು ಮತ್ತು ಸದ್ಭಾವನಾ ರಾಯಭಾರಿಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಲು ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.",
      cta: "ಉಪಕ್ರಮದೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ"
    },
    training: {
      title: "ತರಬೇತಿ ಮತ್ತು ಬೆಂಬಲ",
      subtitle: "ಆಯ್ಕೆಯಾದ ಭಾಗವಹಿಸುವವರು ಸಾರ್ವಜನಿಕ ಸೇವೆಗೆ ಸಿದ್ಧರಾಗಲು ಸಮಗ್ರ ಬೆಂಬಲವನ್ನು ಪಡೆಯಬಹುದು.",
      items: [
        "ಪಂಚಾಯತ್ ರಾಜ್ ಮತ್ತು ವಾರ್ಡ್ ಜವಾಬ್ದಾರಿಗಳ ತಿಳುವಳಿಕೆ",
        "ನಾಗರಿಕರ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ ಮತ್ತು ವಾರ್ಡ್ ಸಭಾ ಸಿದ್ಧತೆ",
        "ಸ್ಥಳೀಯ ಸಮಸ್ಯೆಗಳ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ",
        "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳ ತಲುಪುವಿಕೆ",
        "ಪಾರದರ್ಶಕ ಆಡಳಿತಕ್ಕಾಗಿ ಡಿಜಿಟಲ್ ಸಾಧನಗಳು",
        "ನೈತಿಕ ಪ್ರಚಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಂವಹನ",
        "ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ ಮತ್ತು ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯ ಅರಿವು"
      ],
      disclaimer: "ಗಮನಿಸಿ: ಈ ಉಪಕ್ರಮವು ರಾಜಕೀಯ ಬೆಂಬಲ, ಪಕ್ಷದ ಟಿಕೆಟ್ ಅಥವಾ ಚುನಾವಣಾ ಯಶಸ್ಸನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ."
    },
    impact: {
      title: "ನಿರೀಕ್ಷಿತ ಪರಿಣಾಮ",
      targetsLabel: "ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಗುರಿಗಳು",
      point1: "ಬಲವಾದ ಸ್ಥಳೀಯ ಹೊಣೆಗಾರಿಕೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆ.",
      point2: "ಗ್ರಾಮ ಸಭೆಗಳಲ್ಲಿ ನಾಗರಿಕರ ಸುಧಾರಿತ ಭಾಗವಹಿಸುವಿಕೆ.",
      point3: "ಹೆಚ್ಚು ಸಮರ್ಥ, ತರಬೇತಿ ಪಡೆದ ವಾರ್ಡ್ ಮಟ್ಟದ ನಾಯಕತ್ವ.",
      point4: "ಸ್ಥಳೀಯ ಆಡಳಿತದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಸಮುದಾಯ ಜಾಗೃತಿ.",
      point5: "ಅರ್ಹತೆ ಆಧಾರಿತ ತಳಮಟ್ಟದ ಭಾಗವಹಿಸುವಿಕೆಯತ್ತ ಬದಲಾವಣೆ."
    },
    partners: {
      title: "ಸಶಕ್ತ ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳಿಗಾಗಿ ಒಟ್ಟಾಗಿ",
      supportedBy: "ಇವರ ಉಪಕ್ರಮ"
    },
    faq: {
      title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
      q1: "ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕ ಎಂದರೇನು?",
      a1: "ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕವು ವಾರ್ಡ್ ಮಟ್ಟದ ಆಡಳಿತದಲ್ಲಿ ಭಾಗವಹಿಸಲು ಮತ್ತು ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳನ್ನು ಬಲಪಡಿಸಲು ಸಮರ್ಥ ಯುವ ನಾಯಕರನ್ನು ಗುರುತಿಸುವ, ಸಿದ್ಧಪಡಿಸುವ ಮತ್ತು ಬೆಂಬಲಿಸುವ ಉಪಕ್ರಮವಾಗಿದೆ.",
      q2: "ಯಾರು ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬಹುದು?",
      a2: "ತಮ್ಮ ಸಮುದಾಯಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಮತ್ತು ತರಬೇತಿ ಪಡೆಯಲು ಸಿದ್ಧರಿರುವ ಯಾವುದೇ ನಿವಾಸಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬಹುದು.",
      q3: "ಇದು ಯುವಕರಿಗೆ ಮಾತ್ರವೇ?",
      a3: "ಯುವಕರ (21 ರಿಂದ 35 ವರ್ಷ) ಸಬಲೀಕರಣದ ಮೇಲೆ ಹೆಚ್ಚಿನ ಗಮನವಿದ್ದರೂ, ಪ್ರಗತಿಪರ ಮನಸ್ಥಿತಿ ಹೊಂದಿರುವ ಯಾರಾದರೂ ಭಾಗವಹಿಸಬಹುದು.",
      q4: "ಮಹಿಳೆಯರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದೇ?",
      a4: "ಹೌದು, ಖಂಡಿತ. ಸಾವಿರಾರು ಮಹಿಳೆಯರನ್ನು ತಳಮಟ್ಟದ ಸಾರ್ವಜನಿಕ ನಾಯಕತ್ವಕ್ಕೆ ತರುವುದು ಕಾರ್ಯಕ್ರಮದ ಪ್ರಮುಖ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯಾಗಿದೆ.",
      q6: "ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡುವುದರಿಂದ ಉಮೇದುವಾರಿಕೆ ಖಾತರಿಯಾಗುತ್ತದೆಯೇ?",
      a6: "ಇಲ್ಲ. ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡುವುದು ನಿಮ್ಮ ಆಸಕ್ತಿಯನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತದೆ. ಎಲ್ಲಾ ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಗಳು ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತವೆ.",
      q7: "ಭಾಗವಹಿಸುವವರಿಗೆ ತರಬೇತಿ ಸಿಗುತ್ತದೆಯೇ?",
      a7: "ಹೌದು. ಭಾಗವಹಿಸುವವರಿಗೆ ನಾಯಕತ್ವ, ಸಾರ್ವಜನಿಕ ಭಾಷಣ, ಸ್ಥಳೀಯ ಆಡಳಿತ, ಪಂಚಾಯತ್ ರಾಜ್ ಮತ್ತು ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿಯ ಕುರಿತು ರಚನಾತ್ಮಕ ತರಬೇತಿಯನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಪರಿಣಾಮಕಾರಿ ತಳಮಟ್ಟದ ನಾಯಕತ್ವಕ್ಕೆ ಅಗತ್ಯವಾದ ಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯಗಳೊಂದಿಗೆ ಭಾಗವಹಿಸುವವರನ್ನು ಸಜ್ಜುಗೊಳಿಸುವುದು ಈ ಕಾರ್ಯಕ್ರಮದ ಗುರಿಯಾಗಿದೆ.",
      q8: "ಯಾವುದೇ ನೋಂದಣಿ ಶುಲ್ಕವಿದೆಯೇ?",
      a8: "ಕೈಗೆಟುಕುವ ಭಾಗವಹಿಸುವಿಕೆಯು ನಮ್ಮ ಪ್ರಮುಖ ಗುರಿಯಾಗಿದೆ. ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ತರಬೇತಿ ವೆಚ್ಚಗಳ ಕುರಿತು ಅಧಿಕೃತ ಸಂವಹನಗಳನ್ನು ಗಮನಿಸಿ.",
      q9: "ಯಾವ ದಾಖಲೆಗಳು ಬೇಕಾಗಬಹುದು?",
      a9: "ಆರಂಭಿಕ ನೋಂದಣಿಗೆ ಫಾರ್ಮ್‌ನಲ್ಲಿರುವ ವಿವರಗಳು ಮಾತ್ರ ಸಾಕು. ಚುನಾವಣೆಗೆ ಸ್ಪರ್ಧಿಸಲು ಕಾನೂನಿನ ಪ್ರಕಾರ ಗುರುತಿನ ಮತ್ತು ವಾಸಸ್ಥಳದ ಪುರಾವೆಗಳು ಬೇಕಾಗುತ್ತವೆ.",
      q10: "ನನ್ನ ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ಬಳಸಲಾಗುತ್ತದೆ?",
      a10: "ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಸಂವಹನ, ಕಾರ್ಯಕ್ರಮ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ತರಬೇತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",
      q11: "ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಸಂಸ್ಥೆಗಳು ಭಾಗವಹಿಸಬಹುದೇ?",
      a11: "ಹೌದು, ಎನ್‌ಜಿಒಗಳು, ಯುವ ಜಾಲಗಳು ಮತ್ತು ತರಬೇತುದಾರರೊಂದಿಗಿನ ಪಾಲುದಾರಿಕೆಯನ್ನು ನಾವು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.",
      q12: "ಕರ್ನಾಟಕದ ಯಾವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಉಪಕ್ರಮ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?",
      a12: "ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರಗಳಾದ್ಯಂತ ರಾಜ್ಯವ್ಯಾಪಿ ತಲುಪುವ ಗುರಿಯನ್ನು ಉಪಕ್ರಮ ಹೊಂದಿದೆ.",
      q13: "ವಾರ್ಡ್ ಸದಸ್ಯರ ಪಾತ್ರವೇನು?",
      a13: "ವಾರ್ಡ್ ಸದಸ್ಯರು ಗ್ರಾಮ ಪಂಚಾಯತಿಯಲ್ಲಿ ತಮ್ಮ ವಾರ್ಡ್ ಅನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಾರೆ, ನಾಗರಿಕರು ಮತ್ತು ಸರ್ಕಾರದ ನಡುವಿನ ಕೊಂಡಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾರೆ.",
      q14: "ವಾರ್ಡ್ ಸಭೆ ಮತ್ತು ಗ್ರಾಮ ಸಭೆಯ ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?",
      a14: "ವಾರ್ಡ್ ಸಭೆಯು ನಿರ್ದಿಷ್ಟ ವಾರ್ಡ್‌ನ ಮತದಾರರ ಸಭೆಯಾಗಿದ್ದರೆ, ಗ್ರಾಮ ಸಭೆಯು ಇಡೀ ಗ್ರಾಮ ಪಂಚಾಯತಿಯ ಎಲ್ಲಾ ಮತದಾರರ ಸಭೆಯಾಗಿದೆ."
    },
    contact: {
      title: "ಸಂಪರ್ಕಿಸಿ",
      email: "ಇಮೇಲ್",
      phone: "ಫೋನ್",
      address: "ವಿಳಾಸ"
    },
    footer: {
      mission: "ಕರ್ನಾಟಕದ ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳನ್ನು ಬಲಪಡಿಸಲು ಸಮರ್ಥ ತಳಮಟ್ಟದ ನಾಯಕರನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು.",
      quickLinks: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
      legal: "ಕಾನೂನು",
      privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
      disclaimer: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
      copyright: "© 2026 ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      disclaimerText: "ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕವು ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿ ಉಪಕ್ರಮವಾಗಿದೆ. ನೋಂದಣಿಯು ಉಮೇದುವಾರಿಕೆ ಅಥವಾ ಚುನಾವಣೆಯನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಗಳು ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ."
    }
  }
};
