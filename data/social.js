/* =========================================================
   SalimGPT
   File: data/social.js
   Purpose: Official Social Platform Configuration
   ---------------------------------------------------------
   IMPORTANT:
   - Real profile URLs are intentionally left blank.
   - Add only verified official SalimGPT profile URLs.
   - Do not invent usernames or links.
   ========================================================= */

(function () {
  "use strict";


  /* =======================================================
     01. SOCIAL DATA
     ======================================================= */

  const socialPlatforms = [


    /* =====================================================
       YOUTUBE
       ===================================================== */

    {
      id: "youtube",

      name:
        "YouTube",

      label:
        "YouTube पर SalimGPT",

      description:
        "SalimGPT की मुख्य शोध-आधारित हिंदी डॉक्यूमेंट्री, नई रिलीज़ और पूर्ण वीडियो देखें।",

      url: "",

      username: "",

      icon:
        "../assets/social/youtube.svg",

      brandColor:
        "#ff0000",

      type:
        "video",

      primary:
        true,

      order:
        1,

      status:
        "active"
    },


    /* =====================================================
       FACEBOOK
       ===================================================== */

    {
      id: "facebook",

      name:
        "Facebook",

      label:
        "Facebook पर SalimGPT",

      description:
        "SalimGPT की डॉक्यूमेंट्री अपडेट, चुने हुए वीडियो, विज़ुअल पोस्ट और नई रिलीज़ की जानकारी के लिए फ़ॉलो करें।",

      url: "",

      username: "",

      icon:
        "../assets/social/facebook.svg",

      brandColor:
        "#1877f2",

      type:
        "social",

      primary:
        true,

      order:
        2,

      status:
        "active"
    },


    /* =====================================================
       INSTAGRAM
       ===================================================== */

    {
      id: "instagram",

      name:
        "Instagram",

      label:
        "Instagram पर SalimGPT",

      description:
        "SalimGPT की विज़ुअल स्टोरीटेलिंग, डॉक्यूमेंट्री हाइलाइट्स, शॉर्ट-फॉर्म कंटेंट और रचनात्मक अपडेट देखें।",

      url: "",

      username: "",

      icon:
        "../assets/social/instagram.svg",

      brandColor:
        "#e4405f",

      type:
        "social",

      primary:
        true,

      order:
        3,

      status:
        "active"
    },


    /* =====================================================
       THREADS
       ===================================================== */

    {
      id: "threads",

      name:
        "Threads",

      label:
        "Threads पर SalimGPT",

      description:
        "शोध, डॉक्यूमेंट्री विषयों, नए कार्य और SalimGPT की संक्षिप्त अपडेट के लिए फ़ॉलो करें।",

      url: "",

      username: "",

      icon:
        "../assets/social/threads.svg",

      brandColor:
        "#111111",

      type:
        "social",

      primary:
        false,

      order:
        4,

      status:
        "active"
    },


    /* =====================================================
       TIKTOK
       ===================================================== */

    {
      id: "tiktok",

      name:
        "TikTok",

      label:
        "TikTok पर SalimGPT",

      description:
        "SalimGPT के छोटे डॉक्यूमेंट्री क्लिप, संक्षिप्त व्याख्याएँ और चुना हुआ विज़ुअल कंटेंट देखें।",

      url: "",

      username: "",

      icon:
        "../assets/social/tiktok.svg",

      brandColor:
        "#111111",

      type:
        "short-video",

      primary:
        true,

      order:
        5,

      status:
        "active"
    }

  ];


  /* =======================================================
     02. SOCIAL PAGE CONFIGURATION
     ======================================================= */

  const socialConfig = {

    title:
      "सोशल नेटवर्क",

    subtitle:
      "SalimGPT के आधिकारिक प्लेटफ़ॉर्म",

    description:
      "SalimGPT की शोध-आधारित डॉक्यूमेंट्री, नई रिलीज़, विज़ुअल स्टोरीटेलिंग और महत्वपूर्ण अपडेट विभिन्न सोशल प्लेटफ़ॉर्म पर फ़ॉलो की जा सकती हैं।",

    banner:
      "../assets/social/social-banner.webp",

    warning:
      "केवल SalimGPT द्वारा सत्यापित आधिकारिक प्रोफ़ाइल और लिंक ही फ़ॉलो करें।",

    verificationNote:
      "यहाँ कोई लिंक जोड़ने से पहले यह सत्यापित किया जाना चाहिए कि वह SalimGPT का आधिकारिक अकाउंट है।",

    externalLinkTarget:
      "_blank",

    externalLinkRel:
      "noopener noreferrer"
  };


  /* =======================================================
     03. HELPERS
     ======================================================= */

  function cleanText(value) {
    if (
      value === undefined ||
      value === null
    ) {
      return "";
    }

    return String(value).trim();
  }


  function hasValidUrl(value) {
    const url =
      cleanText(value);


    if (!url) {
      return false;
    }


    try {
      const parsed =
        new URL(url);


      return (
        parsed.protocol === "https:" ||
        parsed.protocol === "http:"
      );

    } catch (error) {
      return false;
    }
  }


  function getPlatformById(id) {
    const normalizedId =
      cleanText(id)
        .toLowerCase();


    return (
      socialPlatforms.find(
        (platform) =>
          platform.id === normalizedId
      ) || null
    );
  }


  function getActivePlatforms() {
    return socialPlatforms
      .filter(
        (platform) =>
          platform.status === "active"
      )
      .sort(
        (a, b) =>
          a.order - b.order
      );
  }


  function getLinkedPlatforms() {
    return getActivePlatforms()
      .filter(
        (platform) =>
          hasValidUrl(platform.url)
      );
  }


  function getPrimaryPlatforms() {
    return getActivePlatforms()
      .filter(
        (platform) =>
          platform.primary === true
      );
  }


  /* =======================================================
     04. FREEZE DATA
     ======================================================= */

  function deepFreeze(value) {
    if (
      !value ||
      typeof value !== "object" ||
      Object.isFrozen(value)
    ) {
      return value;
    }


    Object.keys(value).forEach(
      (key) => {
        deepFreeze(
          value[key]
        );
      }
    );


    return Object.freeze(value);
  }


  /* =======================================================
     05. GLOBAL EXPORT
     ======================================================= */

  window.SALIMGPT_SOCIAL =
    deepFreeze({
      config:
        socialConfig,

      platforms:
        socialPlatforms
    });


  /*
    Compatibility alias.
  */

  window.salimgptSocial =
    window.SALIMGPT_SOCIAL;


  /* =======================================================
     06. PUBLIC HELPERS
     ======================================================= */

  window.SALIMGPT_SOCIAL_HELPERS =
    Object.freeze({

      getPlatformById,

      getActivePlatforms,

      getLinkedPlatforms,

      getPrimaryPlatforms,

      hasValidUrl

    });


  /* =======================================================
     07. READY EVENT
     ======================================================= */

  document.dispatchEvent(
    new CustomEvent(
      "salimgpt:socialDataReady",
      {
        detail: {
          social:
            window.SALIMGPT_SOCIAL,

          activeCount:
            getActivePlatforms().length,

          linkedCount:
            getLinkedPlatforms().length
        }
      }
    )
  );

})();