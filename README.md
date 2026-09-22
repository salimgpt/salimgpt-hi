# SalimGPT

**शोध-आधारित हिंदी डॉक्यूमेंट्री मीडिया**

SalimGPT एक शोध-आधारित हिंदी डॉक्यूमेंट्री मीडिया प्लेटफ़ॉर्म है, जहाँ इतिहास, विज्ञान, रहस्य, तकनीक, समाज, जनस्वास्थ्य, जीवनशैली, शिक्षा और महत्वपूर्ण वैश्विक विषयों पर डॉक्यूमेंट्री तथा शोध-आधारित सामग्री प्रकाशित की जाती है।

SalimGPT की डॉक्यूमेंट्री स्क्रिप्ट, संपादकीय निर्देशन और प्रोजेक्ट प्रबंधन **Mohammad Salim** द्वारा संचालित किया जाता है।

--- 
 
# 1. प्रोजेक्ट का परिचय

SalimGPT website एक lightweight static website है, जिसे GitHub Pages पर deploy करने के लिए बनाया गया है।

इस project की सबसे महत्वपूर्ण feature है **Automatic Documentary Publishing System**।

नई documentary publish करने के लिए manually नया HTML page बनाने की आवश्यकता नहीं होती।

सिर्फ:

1. एक Markdown file बनानी होगी।
2. Documentary की 4 images upload करनी होंगी।
3. GitHub की `main` branch पर push करना होगा।

इसके बाद GitHub Actions automatically:

- documentary detect करेगा
- metadata validate करेगा
- images validate करेगा
- article HTML बनाएगा
- homepage update करेगा
- sitemap बनाएगा
- robots.txt बनाएगा
- `_site/` generate करेगा
- GitHub Pages पर deploy करेगा

---

# 2. मुख्य विशेषताएँ

SalimGPT website की मुख्य features:

- Research-based हिंदी documentary platform
- Static website architecture
- GitHub Pages hosting
- GitHub Actions deployment
- Markdown-based documentary publishing
- Automatic documentary discovery
- Automatic documentary page generation
- Automatic homepage documentary listing
- Newest documentary first
- YouTube integration
- Real YouTube thumbnail support
- YouTube thumbnail fallback system
- Local documentary image fallback
- JPG image support
- JPEG image support
- PNG image support
- WebP image support
- Automatic article image distribution
- Manual image placement support
- Automatic reading-time calculation
- Automatic Table of Contents generation
- Related documentary generation
- Automatic sitemap.xml generation
- Automatic robots.txt generation
- JSON-LD structured data
- Article structured data
- VideoObject structured data
- Breadcrumb structured data
- Responsive mobile design
- Responsive desktop design
- Search support
- Side navigation menu
- SEO-friendly documentary URLs
- No fake YouTube URL generation
- No fake thumbnail generation

---

# 3. प्रोजेक्ट संरचना

वर्तमान project structure:

```text
salimgpt-hi/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   ├── brand/
│   ├── documentaries/
│   │   └── fentanyl/
│   │       ├── fentanyl-1.jpg
│   │       ├── fentanyl-2.jpg
│   │       ├── fentanyl-3.jpg
│   │       └── fentanyl-4.jpg
│   │
│   ├── social/
│   └── ...
│
├── content/
│   └── fentanyl.md
│
├── css/
│   └── ...
│
├── data/
│   ├── site.js
│   ├── social.js
│   └── ...
│
├── js/
│   ├── documentary-list.js
│   ├── documentary.js
│   ├── home.js
│   ├── menu.js
│   ├── search.js
│   └── ...
│
├── scripts/
│   └── build.js
│
├── templates/
│   └── documentary.html
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 4. महत्वपूर्ण प्रोजेक्ट फाइलें

## 4.1 `scripts/build.js`

यह SalimGPT का मुख्य **Automatic Documentary Publishing Engine** है।

इसके कार्य:

- `content/` folder scan करना
- Markdown documentary detect करना
- Front Matter पढ़ना
- documentary metadata validate करना
- publication date validate करना
- slug validate करना
- image folder validate करना
- documentary की 4 images validate करना
- JPG/JPEG/PNG/WebP support करना
- YouTube ID extract करना
- YouTube canonical URL बनाना
- Markdown को HTML में convert करना
- heading से TOC बनाना
- reading time calculate करना
- article के भीतर images लगाना
- related documentary निर्धारित करना
- documentary page generate करना
- homepage documentary data generate करना
- newest-first sorting करना
- sitemap.xml generate करना
- robots.txt generate करना
- `.nojekyll` generate करना
- final `_site/` deployment folder बनाना

---

## 4.2 `templates/documentary.html`

सभी automatically generated documentary page का HTML template।

नई documentary publish करते समय अलग HTML file manually बनाने की आवश्यकता नहीं होती।

Build system इस template का उपयोग करके final page बनाता है।

उदाहरण:

```text
content/fentanyl.md
        ↓
templates/documentary.html
        ↓
scripts/build.js
        ↓
_site/documentaries/fentanyl/index.html
```

---

## 4.3 `content/`

सभी documentary की source Markdown files यहाँ रहेंगी।

वर्तमान example:

```text
content/fentanyl.md
```

Future example:

```text
content/artificial-intelligence.md
content/bermuda-triangle.md
content/black-hole.md
```

---

## 4.4 `assets/documentaries/`

प्रत्येक documentary की images यहाँ रहेंगी।

Folder name documentary slug के साथ match करना चाहिए।

Example:

```text
assets/documentaries/fentanyl/
```

इसके भीतर:

```text
fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg
```

---

## 4.5 `js/documentary-list.js`

Homepage का automatic documentary listing system।

इसके कार्य:

- generated documentary data पढ़ना
- published documentary filter करना
- newest-first sort करना
- homepage documentary cards बनाना
- documentary count दिखाना
- article link बनाना
- YouTube button बनाना
- thumbnail fallback संभालना

Thumbnail fallback:

```text
YouTube maxresdefault.jpg
        ↓
YouTube hqdefault.jpg
        ↓
Local .jpg
        ↓
Local .jpeg
        ↓
Local .png
        ↓
Local .webp
```

---

## 4.6 `.github/workflows/deploy.yml`

GitHub Actions deployment workflow।

Main branch पर push होने पर:

```text
Push to main
      ↓
npm ci
      ↓
npm run build
      ↓
_site/ generated
      ↓
GitHub Pages artifact upload
      ↓
GitHub Pages deployment
```

---

# 5. Automatic Documentary Workflow

पूरा workflow:

```text
New Markdown File
        +
4 Documentary Images
        ↓
Push to GitHub
        ↓
GitHub Actions Starts
        ↓
npm ci
        ↓
npm run build
        ↓
scripts/build.js
        ↓
Documentary Discovery
        ↓
Metadata Validation
        ↓
Date Validation
        ↓
Slug Validation
        ↓
Image Validation
        ↓
YouTube ID Extraction
        ↓
Markdown Rendering
        ↓
TOC Generation
        ↓
Reading Time Calculation
        ↓
Image Distribution
        ↓
Related Documentary Generation
        ↓
Documentary Page Generation
        ↓
Homepage Data Generation
        ↓
Newest-First Sorting
        ↓
Sitemap Generation
        ↓
Robots.txt Generation
        ↓
_site/
        ↓
GitHub Pages
```

---

# 6. नई डॉक्यूमेंट्री कैसे प्रकाशित करें

मान लें नई documentary का slug:

```text
new-documentary
```

सबसे पहले बनाएँ:

```text
content/new-documentary.md
```

इसके बाद बनाएँ:

```text
assets/documentaries/new-documentary/
```

इसके भीतर 4 images रखें:

```text
new-documentary-1.jpg
new-documentary-2.jpg
new-documentary-3.jpg
new-documentary-4.jpg
```

फिर GitHub की `main` branch पर push करें।

Build system बाकी काम automatically करेगा।

---

# 7. समर्थित Documentary Image Formats

Documentary images के लिए supported formats:

```text
.jpg
.jpeg
.png
.webp
```

Recommended:

```text
.jpg
```

एक ही image number के एक से अधिक format एक साथ न रखना बेहतर है।

सही:

```text
documentary-1.jpg
```

Avoid:

```text
documentary-1.jpg
documentary-1.png
documentary-1.webp
```

---

# 8. Image Naming Rule

Image naming अनिवार्य रूप से slug के अनुसार होनी चाहिए।

यदि slug है:

```text
fentanyl
```

तो:

```text
fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg
```

यदि slug है:

```text
artificial-intelligence
```

तो:

```text
artificial-intelligence-1.jpg
artificial-intelligence-2.jpg
artificial-intelligence-3.jpg
artificial-intelligence-4.jpg
```

---

# 9. Documentary Markdown Format

प्रत्येक documentary Markdown file की शुरुआत में YAML Front Matter होगा।

Example:

```yaml
---
title: "Documentary Title"
slug: "documentary-title"
date: "2026-09-05"
youtube: "https://youtu.be/VIDEO_ID"
description: "Documentary का संक्षिप्त description."
topics:
  - Topic One
  - Topic Two
  - Topic Three
status: "published"
---
```

इसके नीचे documentary का पूरा लेख होगा।

Example:

```md
यहाँ documentary का introduction होगा।

इसके बाद documentary का मुख्य research-based content होगा।
```

---

# 10. वर्तमान Fentanyl Documentary

Current source file:

```text
content/fentanyl.md
```

Current images:

```text
assets/documentaries/fentanyl/
├── fentanyl-1.jpg
├── fentanyl-2.jpg
├── fentanyl-3.jpg
└── fentanyl-4.jpg
```

Current slug:

```text
fentanyl
```

Generated page:

```text
/documentaries/fentanyl/
```

Expected generated file:

```text
_site/documentaries/fentanyl/index.html
```

---

# 11. Fentanyl Front Matter Example

```yaml
---
title: "Fentanyl — मानव इतिहास की सबसे रहस्यमय दर्दनाशक दवा"
slug: "fentanyl"
date: "2026-09-02"
youtube: "https://youtu.be/ls0oDPKPkIY?si=xhok5xEzy5vdI28z"
description: "Fentanyl का इतिहास, चिकित्सा में उपयोग, opioid crisis, अंतरराष्ट्रीय तस्करी नेटवर्क और Mexico-केंद्रित illicit production system पर SalimGPT की पूर्ण डॉक्यूमेंट्री।"
topics:
  - Fentanyl
  - Opioid
  - Synthetic Opioid
  - Drug Trafficking
  - Public Health
status: "published"
---
```

---

# 12. आवश्यक Front Matter Fields

Published documentary के लिए महत्वपूर्ण fields:

```text
title
slug
date
description
status
```

Optional लेकिन recommended:

```text
youtube
topics
imageCaptions
updated
videoDate
```

---

# 13. Documentary Status

Published documentary:

```yaml
status: "published"
```

Draft documentary:

```yaml
status: "draft"
```

Draft documentary public homepage listing में दिखाई नहीं जाएगी।

---

# 14. Date Format

Date अनिवार्य रूप से:

```text
YYYY-MM-DD
```

Valid:

```yaml
date: "2026-09-05"
```

Invalid:

```text
05-09-2026
09/05/2026
September 5 2026
```

---

# 15. Slug Rules

Slug में उपयोग कर सकते हैं:

- lowercase English letters
- numbers
- hyphen

Valid:

```text
fentanyl
opioid-crisis
history-of-ai
documentary-2026
```

Invalid:

```text
Fentanyl
fentanyl_article
fentanyl article
FENTANYL
```

Recommended:

```text
lowercase-hyphen-slug
```

---

# 16. Automatic Image Distribution

Markdown के भीतर image marker न देने पर भी build system 4 images को automatically article के अलग-अलग हिस्सों में लगाएगा।

Approximate distribution:

```text
Image 1 → लगभग 20%
Image 2 → लगभग 40%
Image 3 → लगभग 60%
Image 4 → लगभग 80%
```

---

# 17. Manual Image Placement

किसी निश्चित स्थान पर image लगाने के लिए Markdown के भीतर उपयोग करें:

```html
<!-- image:1 -->
```

```html
<!-- image:2 -->
```

```html
<!-- image:3 -->
```

```html
<!-- image:4 -->
```

Example:

```md
पहले हिस्से का लेख।

<!-- image:1 -->

अगले हिस्से का लेख।

<!-- image:2 -->
```

एक ही image marker को एक से अधिक बार उपयोग नहीं करना चाहिए।

---

# 18. Image Captions

Optional custom image captions Front Matter में उपयोग किए जा सकते हैं।

Example:

```yaml
imageCaptions:
  - "Fentanyl शोध का laboratory environment."
  - "Synthetic opioid supply-chain investigation."
  - "Opioid crisis response environment."
  - "Clinical fentanyl administration."
```

Caption न देने पर build system documentary title का उपयोग करके default caption बनाएगा।

---

# 19. Table of Contents

Markdown के:

```md
## Heading
```

और:

```md
### Subheading
```

से Table of Contents automatically बनेगा।

Example:

```md
## Fentanyl का इतिहास

Content...

## Opioid Crisis

Content...

### Prescription Opioids

Content...

## Mexico Supply Chain

Content...
```

Heading न होने पर भी build fail नहीं करेगा।

ऐसी स्थिति में TOC में chapter न होने का message दिखाया जाएगा।

---

# 20. Reading Time

Documentary article के text को automatically analyse करके reading time calculate किया जाता है।

Default reading speed:

```text
220 words per minute
```

---

# 21. YouTube Integration

Front Matter:

```yaml
youtube: "https://youtu.be/VIDEO_ID"
```

Supported common formats:

```text
https://youtu.be/VIDEO_ID
https://www.youtube.com/watch?v=VIDEO_ID
https://youtube.com/shorts/VIDEO_ID
https://youtube.com/embed/VIDEO_ID
https://youtube.com/live/VIDEO_ID
```

Direct 11-character YouTube video ID भी support किया जाता है।

Fake YouTube ID generate नहीं किया जाता।

---

# 22. YouTube Thumbnail System

Documentary homepage thumbnail priority:

```text
Generated explicit thumbnail
        ↓
YouTube maxresdefault.jpg
        ↓
YouTube hqdefault.jpg
        ↓
Uploaded local image
```

Local image fallback:

```text
.jpg
.jpeg
.png
.webp
```

---

# 23. Hero Media

YouTube video होने पर documentary page के hero section में real YouTube thumbnail उपयोग किया जाएगा।

यदि max-resolution thumbnail fail करे:

```text
maxresdefault.jpg
        ↓
hqdefault.jpg
        ↓
local documentary image
```

YouTube न होने पर uploaded documentary image उपयोग की जाएगी।

---

# 24. Homepage Automation

Build system automatically बनाता है:

```text
_site/data/documentaries.js
```

और:

```text
_site/data/documentaries.json
```

Homepage generated data का उपयोग करके documentary cards render करता है।

नई documentary जोड़ने पर `index.html` manually edit करने की आवश्यकता नहीं होती।

---

# 25. Newest-First Sorting

Documentary publication date के अनुसार newest-first order में दिखाई जाती हैं।

Example:

```text
2026-09-05
2026-09-02
2026-08-20
2026-08-10
```

सबसे नई documentary सबसे पहले रहेगी।

---

# 26. Related Documentaries

Related documentary selection मुख्य रूप से topics की similarity देखकर किया जाता है।

Example:

```yaml
topics:
  - Fentanyl
  - Opioid
  - Public Health
```

यदि किसी अन्य documentary में वही topic हो, तो उसे related section में अधिक priority मिलेगी।

---

# 27. SEO System

Build system automatically:

```text
sitemap.xml
robots.txt
```

generate करता है।

Documentary pages structured data उपयोग करती हैं।

Possible structured-data types:

```text
Article
VideoObject
BreadcrumbList
Organization
Person
ImageObject
```

---

# 28. Sitemap

Build के समय `_site/` के HTML routes scan करके sitemap बनाया जाता है।

Generated:

```text
_site/sitemap.xml
```

Documentary page की publication/update date होने पर `<lastmod>` जोड़ा जाता है।

---

# 29. Robots.txt

Generated file:

```text
_site/robots.txt
```

Basic structure:

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-SITE/sitemap.xml
```

---

# 30. Generated Output

Build के बाद final deployment-ready website यहाँ रहेगी:

```text
_site/
```

Example:

```text
_site/
├── assets/
├── css/
├── data/
├── js/
├── documentaries/
├── index.html
├── sitemap.xml
├── robots.txt
└── .nojekyll
```

---

# 31. `_site/` के बारे में महत्वपूर्ण नियम

`_site/` को manually edit न करें।

क्योंकि यह generated output है।

Source files edit करें:

```text
content/
assets/
css/
js/
templates/
scripts/
```

फिर दोबारा build करें।

---

# 32. Local Build

Node.js और npm installed होने पर पहले:

```bash
npm ci
```

फिर:

```bash
npm run build
```

Successful build होने पर:

```text
_site/
```

बन जाएगा।

---

# 33. GitHub Actions Deployment

Workflow file:

```text
.github/workflows/deploy.yml
```

Main branch पर push करने पर deployment शुरू होगा।

Flow:

```text
Push to main
        ↓
GitHub Actions
        ↓
npm ci
        ↓
npm run build
        ↓
Generate _site/
        ↓
Upload Pages Artifact
        ↓
Deploy GitHub Pages
```

---

# 34. GitHub Pages Configuration

Repository में:

```text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

यहाँ `GitHub Actions` select करें।

---

# 35. Repository Root Structure

Project files सीधे repository root में रहनी चाहिए।

Correct:

```text
repository/
├── .github/
├── assets/
├── content/
├── css/
├── data/
├── js/
├── scripts/
├── templates/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Incorrect:

```text
repository/
└── salimgpt-hi/
    ├── index.html
    ├── package.json
    └── ...
```

अर्थात unnecessary extra parent folder का उपयोग न करें।

---

# 36. Future Documentary Example

मान लें नई documentary:

```text
Artificial Intelligence
```

Slug:

```text
artificial-intelligence
```

Markdown:

```text
content/artificial-intelligence.md
```

Images:

```text
assets/documentaries/artificial-intelligence/
├── artificial-intelligence-1.jpg
├── artificial-intelligence-2.jpg
├── artificial-intelligence-3.jpg
└── artificial-intelligence-4.jpg
```

Push करने के बाद build system automatically बनाएगा:

```text
/documentaries/artificial-intelligence/
```

---

# 37. Example Future Markdown

```yaml
---
title: "Artificial Intelligence — भविष्य की तकनीक"
slug: "artificial-intelligence"
date: "2026-10-01"
youtube: "https://youtu.be/VIDEO_ID"
description: "Artificial Intelligence के इतिहास, तकनीक और भविष्य पर SalimGPT documentary."
topics:
  - Artificial Intelligence
  - Technology
  - Machine Learning
status: "published"
---
```

इसके बाद नीचे documentary content लिखना होगा।

---

# 38. Build Validation Rules

Build system published documentary के मामले में जाँच करता है:

- documentary body मौजूद है या नहीं
- title मौजूद है या नहीं
- slug valid है या नहीं
- status valid है या नहीं
- date valid है या नहीं
- description मौजूद है या नहीं
- YouTube URL valid है या नहीं
- image directory मौजूद है या नहीं
- required 4 images मौजूद हैं या नहीं
- image file valid है या नहीं
- duplicate slug है या नहीं

Invalid source होने पर deployment build fail करेगा।

यह intentional safety system है।

---

# 39. Supported Publication Status

Only:

```text
published
draft
```

Allowed।

अन्य status build error पैदा कर सकते हैं।

---

# 40. Duplicate Slug

एक ही slug दो documentary में उपयोग नहीं किया जा सकता।

Wrong:

```text
content/fentanyl.md
slug: fentanyl
```

और:

```text
content/fentanyl-history.md
slug: fentanyl
```

इससे build fail करेगा।

---

# 41. Search

Homepage documentary cards search system के साथ काम करने के लिए title और description को search metadata के रूप में उपयोग करती हैं।

नई documentary publish होने पर search system में manually entry जोड़ने की आवश्यकता नहीं होती।

---

# 42. Responsive Design

Website mobile और desktop दोनों device के लिए responsive है।

Key interface components:

- Header
- Brand logo
- Menu button
- Side drawer
- Documentary cards
- Search
- Footer
- Documentary article
- Table of Contents
- Related documentary section

---

# 43. Header and Navigation

Site header SalimGPT branding और navigation के लिए उपयोग किया जाता है।

Current sponsor advertisement system project में active नहीं है।

Future sponsor integration की आवश्यकता होने पर अलग implementation किया जा सकता है।

---

# 44. Sponsor Status

वर्तमान में:

```text
Sponsor banner: Disabled / Not integrated
```

अर्थात project deploy करने के लिए sponsor-related किसी asset या code की आवश्यकता नहीं है।

---

# 45. Branding

Brand:

```text
SalimGPT
```

Primary visual identity:

```text
Red
Black
Blue accent
```

Website documentation और documentary pages SalimGPT की research-based media identity का पालन करती हैं।

---

# 46. Founder / Director

SalimGPT के founder, director और editorial lead:

**Mohammad Salim**

---

# 47. Editorial Scope

SalimGPT की content categories में शामिल हो सकते हैं:

- History
- Science
- Mystery
- Technology
- Public Health
- Society
- Education
- Lifestyle
- Global Affairs
- Research-based explanatory documentary

---

# 48. Research Method

SalimGPT documentary बनाने में विभिन्न source उपयोग किए जा सकते हैं:

- Public reports
- Research papers
- Government publications
- International organizations
- News reports
- Public databases
- Historical archives
- Reference books
- Online research tools
- AI-assisted research tools

जानकारी प्रकाशित करने से पहले यथासंभव सत्यापन करना SalimGPT का editorial लक्ष्य है।

---

# 49. AI Policy

AI tools का उपयोग किया जा सकता है:

- Research assistance
- Information organization
- Language improvement
- Technical assistance
- Website development
- Content structure
- Production workflow

Final editorial responsibility SalimGPT की है।

---

# 50. Original Scripts

SalimGPT documentary script की final editorial ownership और responsibility:

**Mohammad Salim**

---

# 51. Copyright

SalimGPT की original:

- Scripts
- Articles
- Website content
- Branding
- Original visual assets
- Documentary production material

बिना अनुमति commercial reuse नहीं करना चाहिए।

Third-party material संबंधित copyright owner के अधीन है।

---

# 52. External Sources

Documentary research में external source उपयोग होने पर source की जानकारी contextual रूप से प्रस्तुत की जा सकती है।

SalimGPT किसी external website या third-party organization के ownership का दावा नहीं करता।

---

# 53. Security

Repository में कभी भी sensitive information commit न करें।

जैसे:

```text
API keys
Passwords
Private tokens
Secret credentials
Private account information
Recovery codes
```

---

# 54. GitHub Secrets

Future workflow में secret की आवश्यकता होने पर:

```text
GitHub Repository
→ Settings
→ Secrets and variables
→ Actions
```

का उपयोग करें।

Secret को code के भीतर hardcode न करें।

---

# 55. Development Rules

Project update करते समय:

1. `_site/` manually edit न करें।
2. Documentary Markdown source edit करें।
3. Documentary images सही folder में रखें।
4. Slug naming consistent रखें।
5. Date `YYYY-MM-DD` format में रखें।
6. Duplicate slug उपयोग न करें।
7. Broken YouTube URL उपयोग न करें।
8. Required 4 documentary images रखें।
9. Build automation unnecessarily modify न करें।
10. GitHub Actions failure होने पर logs जाँचें।

---

# 56. Recommended Documentary Workflow

प्रत्येक नई documentary के लिए:

```text
Step 1
Choose slug

Step 2
Create content/<slug>.md

Step 3
Create assets/documentaries/<slug>/

Step 4
Add 4 images

Step 5
Check Front Matter

Step 6
Push to main

Step 7
Check GitHub Actions

Step 8
Open deployed documentary page
```

---

# 57. Example Final Documentary Structure

```text
content/
├── fentanyl.md
├── artificial-intelligence.md
└── black-hole.md
```

```text
assets/documentaries/
├── fentanyl/
│   ├── fentanyl-1.jpg
│   ├── fentanyl-2.jpg
│   ├── fentanyl-3.jpg
│   └── fentanyl-4.jpg
│
├── artificial-intelligence/
│   ├── artificial-intelligence-1.jpg
│   ├── artificial-intelligence-2.jpg
│   ├── artificial-intelligence-3.jpg
│   └── artificial-intelligence-4.jpg
│
└── black-hole/
    ├── black-hole-1.jpg
    ├── black-hole-2.jpg
    ├── black-hole-3.jpg
    └── black-hole-4.jpg
```

---

# 58. Generated Routes Example

Source:

```text
content/fentanyl.md
```

Generated:

```text
/documentaries/fentanyl/
```

Source:

```text
content/artificial-intelligence.md
```

Generated:

```text
/documentaries/artificial-intelligence/
```

---

# 59. Generated Data Files

Build automatically बनाता है:

```text
_site/data/documentaries.js
```

और:

```text
_site/data/documentaries.json
```

इन files को manually maintain करने की आवश्यकता नहीं है।

---

# 60. Files That Should Not Be Manually Edited

Normally manually edit न करें:

```text
_site/
_site/data/documentaries.js
_site/data/documentaries.json
_site/sitemap.xml
_site/robots.txt
```

---

# 61. Source Files That Can Be Edited

Project development के लिए edit किया जा सकता है:

```text
content/*.md
assets/
css/
js/
templates/
scripts/build.js
index.html
data/
```

लेकिन build system change करने से पहले automation impact जाँचना चाहिए।

---

# 62. Current Image System

Current Fentanyl documentary images:

```text
fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg
```

Build system वर्तमान में support करता है:

```text
.jpg
.jpeg
.png
.webp
```

Homepage fallback system भी इन्हीं supported formats को handle कर सकता है।

---

# 63. Current Deployment Readiness

Current project architecture GitHub Pages + GitHub Actions deployment के लिए तैयार है।

Deployment से पहले सुनिश्चित करें:

```text
scripts/build.js
```

updated image-format version है।

और:

```text
js/documentary-list.js
```

updated local-thumbnail fallback version है।

---

# 64. Pre-Deployment Checklist

GitHub पर push करने से पहले:

```text
[ ] README.md root में है

[ ] .github/workflows/deploy.yml मौजूद है

[ ] package.json मौजूद है

[ ] package-lock.json मौजूद है

[ ] scripts/build.js मौजूद है

[ ] templates/documentary.html मौजूद है

[ ] content/fentanyl.md मौजूद है

[ ] assets/documentaries/fentanyl/fentanyl-1.jpg मौजूद है

[ ] assets/documentaries/fentanyl/fentanyl-2.jpg मौजूद है

[ ] assets/documentaries/fentanyl/fentanyl-3.jpg मौजूद है

[ ] assets/documentaries/fentanyl/fentanyl-4.jpg मौजूद है

[ ] js/documentary-list.js updated

[ ] repository root structure सही है

[ ] GitHub Pages Source = GitHub Actions
```

---

# 65. GitHub पर Upload करने के बाद

Upload/push करने के बाद:

```text
GitHub Repository
→ Actions
```

पर जाएँ।

Workflow run देखें।

Successful होने पर हरा check mark दिखाई देगा।

Expected build sequence:

```text
Checkout
↓
Setup Node
↓
npm ci
↓
npm run build
↓
Upload Pages Artifact
↓
Deploy GitHub Pages
```

---

# 66. If GitHub Actions Fails

GitHub Actions में red error होने पर:

1. Failed workflow खोलें।
2. Failed step खोलें।
3. Error message देखें।
4. Exact file/path/line identify करें।
5. Source fix करके फिर push करें।

Build validation intentionally strict रखा गया है ताकि broken documentary production site पर deploy न हो।

---

# 67. GitHub Pages

GitHub Pages configuration:

```text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

---

# 68. `.nojekyll`

Build system automatically:

```text
.nojekyll
```

generate करता है।

यह GitHub Pages की Jekyll processing disable करने में मदद करता है।

---

# 69. SITE_URL

Production site URL की आवश्यकता होने पर environment variable:

```text
SITE_URL
```

का उपयोग किया जा सकता है।

Example:

```text
SITE_URL=https://example.com
```

या:

```text
SITE_URL=https://username.github.io/salimgpt-hi
```

GitHub Actions environment में repository information उपलब्ध होने पर build system project Pages URL resolve कर सकता है।

---

# 70. GitHub Project Pages

Repository यदि है:

```text
username/salimgpt-hi
```

तो expected Pages URL:

```text
https://username.github.io/salimgpt-hi/
```

---

# 71. GitHub User Pages

Repository यदि है:

```text
username/username.github.io
```

तो expected URL:

```text
https://username.github.io/
```

---

# 72. Documentary URL Design

Documentary URL:

```text
/documentaries/<slug>/
```

Example:

```text
/documentaries/fentanyl/
```

यह clean और SEO-friendly route structure है।

---

# 73. Content Language

Primary language:

```text
Hindi / hi-IN
```

Technical और documentary context के अनुसार English terminology उपयोग की जा सकती है।

---

# 74. Documentary Writing Style

SalimGPT documentary content का लक्ष्य:

- Research-based
- Narrative
- Informative
- Contextual
- Accessible
- Documentary-style
- Evidence-oriented
- हिंदी audience friendly

---

# 75. Project Philosophy

SalimGPT का उद्देश्य complex विषयों को documentary storytelling के माध्यम से सरल और जानकारीपूर्ण रूप में प्रस्तुत करना है।

Technology और automation का उपयोग इसलिए किया जाता है ताकि website maintenance आसान रहे और नई documentary publish करने के लिए repeated manual HTML coding की आवश्यकता न हो।

---

# 76. Automation Philosophy

Automation की मूल अवधारणा:

```text
Content First
Code Once
Publish Repeatedly
```

नई documentary के लिए नया HTML coding नहीं।

सिर्फ:

```text
Markdown
+
Images
+
Git Push
```

---

# 77. Current Publishing Model

Current documentary publishing model:

```text
Markdown Source
        ↓
Build Engine
        ↓
HTML Page
        ↓
Homepage Listing
        ↓
SEO Data
        ↓
GitHub Pages
```

---

# 78. Current Fentanyl Workflow

```text
content/fentanyl.md
        +
assets/documentaries/fentanyl/
        ↓
scripts/build.js
        ↓
Metadata Validation
        ↓
Image Validation
        ↓
YouTube Integration
        ↓
Article Generation
        ↓
Homepage Data
        ↓
Sitemap
        ↓
_site/documentaries/fentanyl/index.html
        ↓
GitHub Pages
```

---

# 79. Maintenance

Website maintain करते समय मुख्य रूप से update होंगे:

```text
content/
assets/documentaries/
```

Design update होने पर:

```text
css/
js/
templates/
```

Build engine को आवश्यकता के बिना बदलना बेहतर नहीं है।

---

# 80. README Location

यह `README.md` file project root में रहेगी।

Correct:

```text
salimgpt-hi/
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── .github/
├── assets/
├── content/
├── css/
├── data/
├── js/
├── scripts/
└── templates/
```

README को `.github/` folder के भीतर न रखें।

---

# 81. Repository Documentation

GitHub repository खोलने पर README automatically repository के नीचे render होगी।

README project के:

- purpose
- structure
- workflow
- deployment process
- documentary publishing process
- maintenance rules

समझाने में मदद करेगी।

---

# 82. Production Notes

Production में:

- fake data उपयोग न करें
- fake YouTube ID उपयोग न करें
- broken image path न रखें
- sensitive credential commit न करें
- duplicate slug न रखें
- invalid date न रखें

---

# 83. Future Improvements

Future development के संभावित areas:

- Documentary categories
- Tag archive
- Advanced search
- Author archive
- Source/reference section
- Documentary pagination
- RSS feed
- Social sharing improvements
- Analytics
- Sponsor system
- Newsletter integration
- Advanced SEO
- Structured source citations

इन्हें current core automation के बाहर future enhancement के रूप में जोड़ा जा सकता है।

---

# 84. Sponsor System

वर्तमान में sponsor advertisement integration active नहीं है।

Future sponsor system जोड़ने पर advertisement clearly labeled होना चाहिए।

Current deployment के लिए sponsor code की आवश्यकता नहीं है।

---

# 85. Contact and Social

Contact और social network information website के existing pages/data files से संचालित होगी।

Sensitive private contact information README में रखना recommended नहीं है।

---

# 86. License / Usage

SalimGPT का original website design, scripts, documentary text, branding और original production content SalimGPT की अपनी intellectual property हो सकती है।

Third-party open-source dependencies उनके अपने license के अनुसार उपयोग की जाती हैं।

---

# 87. Dependencies

Project Node.js build dependencies `package.json` और `package-lock.json` द्वारा संचालित होती हैं।

Dependencies install:

```bash
npm ci
```

Build:

```bash
npm run build
```

---

# 88. Do Not Delete

Automatic deployment के लिए नीचे दिए गए files/folders महत्वपूर्ण हैं:

```text
.github/workflows/deploy.yml
scripts/build.js
templates/documentary.html
content/
package.json
package-lock.json
```

इन्हें आवश्यकता के बिना delete न करें।

---

# 89. Basic Troubleshooting

## Documentary homepage पर दिखाई नहीं दे रही

Check:

```text
status: "published"
```

Check:

```text
slug
```

Check:

```text
date
```

Generated data जाँचें।

---

## Documentary build fail हो रहा है

Check:

- Markdown body
- Front Matter
- date
- slug
- images
- YouTube URL
- duplicate slug

---

## Image दिखाई नहीं दे रही

Check:

```text
assets/documentaries/<slug>/
```

और naming:

```text
<slug>-1.jpg
<slug>-2.jpg
<slug>-3.jpg
<slug>-4.jpg
```

---

## YouTube thumbnail दिखाई नहीं दे रही

System fallback करेगा:

```text
maxresdefault
↓
hqdefault
↓
local documentary image
```

---

# 90. Final Deployment Checklist

Final GitHub upload से पहले:

```text
1. Project root सही
2. README.md root में
3. deploy.yml मौजूद
4. package files मौजूद
5. build.js updated
6. documentary-list.js updated
7. fentanyl.md मौजूद
8. 4 JPG images मौजूद
9. GitHub Pages = GitHub Actions
10. main branch पर push
11. Actions status check
```

---

# SalimGPT

**शोध-आधारित हिंदी डॉक्यूमेंट्री मीडिया**

Founder / Director / Editorial Lead:

**Mohammad Salim**

Website architecture:

**Static Site + Markdown Automation + Node.js Build + GitHub Actions + GitHub Pages**

---

© SalimGPT. सर्वाधिकार सुरक्षित।
