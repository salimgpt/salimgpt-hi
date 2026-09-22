/* =========================================================
   SalimGPT
   File: data/site.js
   Purpose: Central Site / Brand Configuration
   ========================================================= */

(function () {
  "use strict";


  /* =======================================================
     01. SITE CONFIGURATION
     ======================================================= */

  const site = {

    /* -----------------------------------------------------
       Brand
       ----------------------------------------------------- */

    brand: {
      name: "SalimGPT",
      nameFirst: "Salim",
      nameAccent: "GPT",

      tagline:
        "शोध से कहानी, कहानी से ज्ञान।",

      englishTagline:
        "शोध-आधारित डॉक्यूमेंट्री मीडिया",

      type:
        "शोध-आधारित हिंदी डॉक्यूमेंट्री मीडिया",

      shortDescription:
        "शोध, तथ्य-जांच, संदर्भ और स्वतंत्र प्रस्तुति के माध्यम से निर्मित हिंदी डॉक्यूमेंट्री मीडिया।",

      fullDescription:
        "SalimGPT एक स्वतंत्र शोध-आधारित हिंदी डॉक्यूमेंट्री मीडिया पहल है, जहाँ इतिहास, समाज, विज्ञान, प्रौद्योगिकी, मानव सभ्यता, रहस्य और महत्वपूर्ण समकालीन विषयों को शोध, तथ्य-जांच, मौलिक स्क्रिप्ट और स्वतंत्र दृश्य प्रस्तुति के माध्यम से समझाया जाता है।"
    },


    /* -----------------------------------------------------
       Founder / Director
       ----------------------------------------------------- */

    founder: {
      name:
        "Mohammad Salim",

      role:
        "संस्थापक एवं निदेशक",

      roleBn:
        "संस्थापक एवं निदेशक",

      responsibilities: [
        "विषय चयन",
        "शोध",
        "तथ्य-जांच",
        "स्क्रिप्ट निर्माण",
        "संपादकीय व्याख्या",
        "दृश्य योजना",
        "AI-सहायित दृश्य निर्माण",
        "वीडियो संपादन",
        "अंतिम समीक्षा",
        "प्रकाशन"
      ]
    },


    /* -----------------------------------------------------
       Project / Launch
       ----------------------------------------------------- */

    project: {
      launchDate:
        "2025-12-02",

      launchDateBn:
        "२ दिसंबर २०२५",

      language:
        "hi-IN",

      visibleLanguage:
        "हिंदी",

      country:
        "Bangladesh",

      projectSlug:
        "salimgpt",

      productionUrl:
        ""
    },


    /* -----------------------------------------------------
       Documentary Scope
       ----------------------------------------------------- */

    documentary: {
      primaryLanguage:
        "हिंदी",

      topics: [
        "इतिहास",
        "समाज",
        "विज्ञान",
        "प्रौद्योगिकी",
        "मानव सभ्यता",
        "रहस्य",
        "खोजपरक विषय",
        "ऐतिहासिक और सामाजिक घटनाएँ"
      ],

      productionModel:
        "मानव-नेतृत्व, AI-सहायित",

      writtenArchive:
        true,

      youtubeEmbedByDefault:
        false,

      youtubeThumbnailFromVideoId:
        true
    },


    /* -----------------------------------------------------
       Research Principles
       ----------------------------------------------------- */

    research: {
      principles: [
        "शोध से पहले अंतिम निष्कर्ष निर्धारित न करना",
        "महत्वपूर्ण जानकारी को संभव होने पर एक से अधिक स्रोतों से मिलान करना",
        "जानकारी एकत्र करना और तथ्य-जांच करना अलग-अलग चरण मानना",
        "तारीख, समयरेखा और ऐतिहासिक संदर्भ की पुष्टि करना",
        "तथ्य और संपादकीय व्याख्या के बीच अंतर बनाए रखना",
        "नए और मजबूत प्रमाण मिलने पर आवश्यकता के अनुसार संशोधन करना"
      ],

      possibleSourceTypes: [
        "पुस्तकें",
        "शोधपत्र",
        "सरकारी दस्तावेज़",
        "संस्थागत दस्तावेज़",
        "अंतरराष्ट्रीय रिपोर्ट",
        "ऐतिहासिक अभिलेखागार",
        "विश्वसनीय समाचार रिपोर्ट",
        "प्रासंगिक वेब स्रोत"
      ]
    },


    /* -----------------------------------------------------
       Originality
       ----------------------------------------------------- */

    originality: {
      statement:
        "SalimGPT किसी अन्य निर्माता के वीडियो, ऑडियो, स्क्रिप्ट या पूरी रचनात्मक प्रस्तुति को हूबहू कॉपी करके अपने कार्य के रूप में प्रकाशित नहीं करता।",

      script:
        "शोध से प्राप्त जानकारी को समझने, तुलना करने और आवश्यक संदर्भ निर्धारित करने के बाद अपनी भाषा और नैरेटिव संरचना में स्क्रिप्ट तैयार की जाती है।",

      video:
        "किसी अन्य निर्माता के पूरे वीडियो या दृश्यों के क्रम को हूबहू पुनःप्रकाशित करना SalimGPT के प्रोडक्शन मॉडल का हिस्सा नहीं है।",

      audio:
        "किसी अन्य व्यक्ति की नैरेशन या वॉइस रिकॉर्डिंग को सीधे SalimGPT की अपनी नैरेशन के रूप में उपयोग नहीं किया जाता।",

      editing:
        "हर डॉक्यूमेंट्री की पेसिंग, दृश्य प्रगति, विज़ुअल रिदम और समग्र प्रस्तुति SalimGPT की अपनी रचनात्मक दिशा के अनुसार तैयार की जाती है।"
    },


    /* -----------------------------------------------------
       AI Policy Summary
       ----------------------------------------------------- */

    ai: {
      model:
        "मानव-नेतृत्व, AI-सहायित",

      finalEditorialControl:
        "मानव",

      visuals:
        true,

      syntheticVoice:
        true,

      researchAssistance:
        true,

      writingAssistance:
        true,

      finalReviewByHuman:
        true,

      visualStatement:
        "आवश्यकता के अनुसार AI-generated या AI-assisted चित्र, व्याख्यात्मक दृश्य और समान अर्थ वाले विज़ुअल बनाए, बदले या संपादित किए जा सकते हैं।",

      voiceStatement:
        "डॉक्यूमेंट्री नैरेशन में AI-generated या synthetic voice का उपयोग किया जा सकता है।",

      editorialStatement:
        "AI एक प्रोडक्शन और शोध-सहायता उपकरण है; कौन-सी जानकारी स्वीकार की जाएगी, उसकी व्याख्या कैसे की जाएगी और क्या प्रकाशित होगा—इन सभी पर अंतिम संपादकीय निर्णय मनुष्य का होता है।"
    },


    /* -----------------------------------------------------
       Visual / Footage Principles
       ----------------------------------------------------- */

    visualMedia: {
      possibleTypes: [
        "स्वयं निर्मित विज़ुअल",
        "AI-generated विज़ुअल",
        "AI-assisted विज़ुअल",
        "public-domain सामग्री",
        "licensed सामग्री",
        "कानूनी रूप से उपयोग योग्य archival सामग्री",
        "व्याख्यात्मक graphics",
        "मानचित्र",
        "illustrative reconstruction"
      ],

      transformation:
        "आवश्यकता के अनुसार crop, framing, timing, composition, movement, visual treatment और editing के माध्यम से visual material को डॉक्यूमेंट्री नैरेटिव के अनुरूप बनाया जा सकता है।",

      illustrativeUse:
        "जहाँ सीधे वास्तविक footage उपलब्ध नहीं है, वहाँ दर्शकों को विषय समझने में मदद करने के लिए illustrative या conceptual visual का उपयोग किया जा सकता है।",

      transparency:
        "AI-generated या illustrative visual को अनावश्यक रूप से वास्तविक archival camera footage के रूप में भ्रामक तरीके से प्रस्तुत न करने की नीति अपनाई जाती है।"
    },


    /* -----------------------------------------------------
       Editorial Principles
       ----------------------------------------------------- */

    editorial: {
      principles: [
        "प्रमाण-आधारित व्याख्या",
        "निष्कर्ष से पहले संदर्भ",
        "स्वतंत्र संपादकीय निर्णय",
        "तथ्य और व्याख्या के बीच स्पष्ट अंतर",
        "मानव द्वारा अंतिम समीक्षा",
        "आवश्यक होने पर सुधार"
      ],

      neutralityStatement:
        "संपादकीय निष्पक्षता का अर्थ हर दावे को कृत्रिम रूप से समान महत्व देना नहीं है; बल्कि उपलब्ध प्रमाण, स्रोत और संदर्भ के आधार पर विषय को प्रस्तुत करना है।",

      editorialQuote:
        "प्रमाण जहाँ ले जाएँ, जानकारी को वहीं तक जाने देना।"
    },


    /* -----------------------------------------------------
       Trust / Correction
       ----------------------------------------------------- */

    trust: {
      infallibilityClaim:
        false,

      correctionPolicy:
        "SalimGPT स्वयं को त्रुटिहीन नहीं मानता। यदि कोई महत्वपूर्ण जानकारी गलत साबित होती है, तो आवश्यकता के अनुसार उसे सुधारने का प्रयास किया जाता है।",

      misinformationPolicy:
        "जानबूझकर झूठी या भ्रामक जानकारी प्रकाशित करना SalimGPT की संपादकीय नीति का हिस्सा नहीं है।"
    },


    /* -----------------------------------------------------
       Brand Independence
       ----------------------------------------------------- */

    independence: {
      independent:
        true,

      openAIAffiliation:
        false,

      disclaimer:
        "SalimGPT एक स्वतंत्र डॉक्यूमेंट्री मीडिया पहल है। नाम में “GPT” होने के बावजूद यह OpenAI, ChatGPT या OpenAI का कोई आधिकारिक उत्पाद, सेवा, अनुमोदित मीडिया संगठन या सहयोगी संस्था नहीं है।"
    },


    /* -----------------------------------------------------
       Legal / Copyright Summary
       ----------------------------------------------------- */

    legal: {
      copyrightOwner:
        "SalimGPT",

      director:
        "Mohammad Salim",

      reuploadPermission:
        false,

      fullScriptCopyPermission:
        false,

      fullVideoCopyPermission:
        false,

      attributionRequiredWhenApplicable:
        true
    },


    /* -----------------------------------------------------
       Local Asset Paths
       Paths are relative to project root.
       ----------------------------------------------------- */

    assets: {
      logo:
        "assets/brand/logo.svg",

      wordmark:
        "assets/brand/wordmark.svg",

      banner:
        "assets/brand/banner.webp",

      defaultOg:
        "assets/brand/default-og.webp",

      favicon:
        "favicon.svg",

      manifest:
        "manifest.webmanifest"
    },


    /* -----------------------------------------------------
       Internal Page Paths
       Root-relative inside the project structure.
       Consumers should resolve these from the page depth.
       ----------------------------------------------------- */

    pages: {
      home:
        "",

      about:
        "about/",

      director:
        "director/",

      originality:
        "originality/",

      productionProcess:
        "production-process/",

      studio:
        "studio/",

      visualMedia:
        "visual-media/",

      factChecking:
        "fact-checking/",

      aiPolicy:
        "ai-policy/",

      editorialPolicy:
        "editorial-policy/",

      ownershipCopyright:
        "ownership-copyright/",

      contentUse:
        "content-use/",

      faq:
        "faq/",

      social:
        "social/",

      contact:
        "contact/",

      privacy:
        "legal/privacy/",

      terms:
        "legal/terms/",

      disclaimer:
        "legal/disclaimer/"
    },


    /* -----------------------------------------------------
       Social Platforms
       Actual profile URLs will be added only after
       official URLs are supplied.
       ----------------------------------------------------- */

    socialPlatforms: [
      {
        id: "youtube",
        name: "YouTube",
        url: ""
      },
      {
        id: "facebook",
        name: "Facebook",
        url: ""
      },
      {
        id: "instagram",
        name: "Instagram",
        url: ""
      },
      {
        id: "threads",
        name: "Threads",
        url: ""
      },
      {
        id: "tiktok",
        name: "TikTok",
        url: ""
      }
    ]

  };


  /* =======================================================
     02. FREEZE CONFIG
     ======================================================= */

  function deepFreeze(object) {
    if (
      !object ||
      typeof object !== "object" ||
      Object.isFrozen(object)
    ) {
      return object;
    }


    Object.keys(object).forEach(
      (key) => {
        deepFreeze(
          object[key]
        );
      }
    );


    return Object.freeze(object);
  }


  /* =======================================================
     03. GLOBAL EXPORT
     ======================================================= */

  window.SALIMGPT_SITE =
    deepFreeze(site);


  /*
    Lightweight alias for future scripts.
  */

  window.salimgptSite =
    window.SALIMGPT_SITE;


  /* =======================================================
     04. READY EVENT
     ======================================================= */

  document.dispatchEvent(
    new CustomEvent(
      "salimgpt:siteDataReady",
      {
        detail: {
          site:
            window.SALIMGPT_SITE
        }
      }
    )
  );

})();
