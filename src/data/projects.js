// ============================================================
// PROJECT DATA — Kre8withseven Portfolio
// ============================================================
// To add a project: copy a block, fill in the fields, and
// place the image in src/assets/.
// ============================================================

// ── Morenchiz assets ───────────────────────────────────────
import morenchizWingIt from '../assets/morenchiz-wingit.png';
import morenchizGizzard from '../assets/morenchiz-gizzard.png';
import morenchizSidePieces from '../assets/morenchiz-side-pice.png';
import morenchizChess from '../assets/morenchiz-chess.png';
import morenchizCorn from '../assets/morenchiz-corn.png';
import morenchizHungry from '../assets/morenchiz-hungry-for-success.png';
import morenchizPlatter from '../assets/morenchiz-platter.png';
import morenchizRoll from '../assets/morenchiz-roll-withit.png';
import morenchizSmallChops from '../assets/morenchiz-spiddy-smallchops.png';
import morenchizTreat from '../assets/morenchiz-treat.png';
import morenchizVibe from '../assets/morenchiz-vibe-time.png';

// ── The Nexus Lagos assets ──────────────────────────────────
import nexusBanner      from '../assets/nexus-banner.png';
import nexusMerchandise from '../assets/nexus-merchandise.png';
import nexusCountdown   from '../assets/nexus-countdown.png';

// ── BloomX & LoveWorld Graduate Network assets ──────────────
import bloomxWoman    from '../assets/bloomx-motivational-woman.png';
import bloomxMan      from '../assets/bloomx-motivational-man.png';
import bloomxGratCard from '../assets/bloomx-graditude-card.png';
import intentionalLifeCover from '../assets/intensional life.png';
import techWomenFest2025Cover from '../assets/tech women fest 2025.png';
import techWomenFest2026Cover from '../assets/tech women fest 2026.png';
import pulchraCranberry from '../assets/pulchra-cranberry-yogurt.png';
import pulchraHealthyChoice from '../assets/pulchra-healthy-choice.png';
import pulchraJuiceCollection from '../assets/pulchra-juice collection.png';
import pulchraNFura from '../assets/pulchra-n-fura.png';
import pulchraNaturalJuice from '../assets/pulchra-natural-juice.png';
import pulchraVanilla from '../assets/pulchra-vanilla-yogurt.png';
import pulchraYogurtCollection from '../assets/puchra-yogurt-collection.png';
import selectedBloom from '../assets/selected-works-bloom.png';
import selectedBusinessStartup from '../assets/selected-works-business-startup.png';
import selectedEasyLensDC from '../assets/selected-works-easylens-dc.png';
import selectedEasyLens from '../assets/selected-works-easylens.png';
import selectedECC from '../assets/selected-works-ecc.png';
import selectedElitesMatch from '../assets/selected-works-elitesmatch.png';
import selectedGirlfriendDay from '../assets/selected-works-girlfreind-day.png';
import selectedNightOfThousand from '../assets/selected-works-night-of-thousand.png';
import selectedOELDirector from '../assets/selected-works-oel-director.png';
import selectedOELScents from '../assets/selected-works-oelscents.png';
import selectedPorvenir from '../assets/selected-works-porvenir.png';
import selectedStrongDesire from '../assets/selected-works-strong-desire.png';
import selectedThankYou from '../assets/selected-works-thank-you.png';

// ── Portfolio Grid Projects ─────────────────────────────────
// One card per campaign. Add each artwork to its gallery array with
// a source, descriptive alt text, and optional title or description.
export const projects = [
  // ── Morenchiz ────────────────────────────────────────────
  {
    id: 'morenchiz',
    title: 'Morenchiz — Food Advertising Campaign',
    category: 'Graphic Design / Food Advertising / Social Media Creatives',
    filterKey: 'graphic',
    description:
      'A series of promotional food graphics for Morenchiz, combining bold typography, appetizing product photography, and vibrant colour palettes to drive menu engagement.',
    image: morenchizWingIt,
    imageFit: 'contain',
    gallery: [
      {
        src: morenchizWingIt,
        alt: 'Morenchiz Wing It food advertising design featuring chicken wings',
        title: 'Wing It',
        description:
          'Promotional graphic featuring chicken wings, bold typography, and food-forward composition with a clear call to action.',
      },
      {
        src: morenchizGizzard,
        alt: 'Morenchiz Gizzard Gang food advertising design',
        title: 'Gizzard Gang',
        description:
          "Campaign graphic for the Gizzard Gang menu item, using playful typography and a high-impact colour palette.",
      },
      {
        src: morenchizSidePieces,
        alt: 'Morenchiz The Side Pieces food advertising design',
        title: 'The Side Pieces',
        description:
          "Social media creative showcasing side dishes with enticing food composition and a clear ordering call to action.",
      },
      ...[
        [morenchizChess, 'Morenchiz chess-themed food advertising design'],
        [morenchizCorn, 'Morenchiz food advertising design featuring corn'],
        [morenchizHungry, 'Morenchiz Hungry for Success food advertising design'],
        [morenchizPlatter, 'Morenchiz food platter advertising design'],
        [morenchizRoll, 'Morenchiz Roll With It food advertising design'],
        [morenchizSmallChops, 'Morenchiz small chops food advertising design'],
        [morenchizTreat, 'Morenchiz food advertising design featuring a treat'],
        [morenchizVibe, 'Morenchiz Vibe Time food advertising design'],
      ].map(([src, alt]) => ({ src, alt })),
    ],
  },

  // ── The Nexus Lagos ───────────────────────────────────────
  {
    id: 'nexus',
    title: 'The Nexus Lagos',
    category: 'Campaign & Event Designs',
    filterKey: 'graphic',
    description:
      'Event branding and campaign graphics for The Nexus Lagos, applying a coordinated visual identity across event promotions, branded merchandise, and countdown graphics.',
    image: nexusBanner,
    gallery: [
      {
      src: nexusBanner,
      alt: 'The Nexus Lagos event promotional banner',
        title: 'Event Promotional Banner',
        description:
          'Event photography, speaker imagery, LoveWorld Graduates Network branding, and The Nexus Lagos identity combined with blue and gold accents.',
      },
      {
        src: nexusMerchandise,
        alt: 'The Nexus Lagos branded merchandise mockup on three T-shirts',
        title: 'Branded Merchandise Mockup',
        description:
          'The Nexus Lagos branding applied to T-shirts in black, blue, and white — demonstrating versatile visual identity across colour variations.',
      },
      {
        src: nexusCountdown,
        alt: 'The Nexus Lagos event countdown graphic with QR code',
        title: 'Event Countdown Graphic',
        description:
          'Countdown promotional graphic featuring event details, a QR code, registration information, and a prominent countdown number.',
      },
    ],
  },

  // ── BloomX & LoveWorld Graduate Network ──────────────────
  {
    id: 'bloomx',
    title: 'BloomX & LoveWorld Graduate Network',
    category: 'Social Media Creatives',
    filterKey: 'graphic',
    description:
      'Motivational and corporate communication graphics for BloomX and the LoveWorld Graduate Network, combining portrait photography, expressive typography, and coordinated purple-and-white styling.',
    image: bloomxWoman,
    gallery: [
      {
      src: bloomxWoman,
      alt: 'BloomX Monday Motivation social media graphic featuring a woman',
        title: 'Monday Motivation — Influence the System',
        description:
          'Motivational Monday post featuring a "Mon/Day" headline, notepad card, city skyline, purple chess pieces, and a cut-out portrait. BloomX footer promotes Coaching for Performance, Outcome 365, and Sabalala.',
      },
      {
        src: bloomxMan,
        alt: 'BloomX Monday Motivation leadership graphic featuring a man in a suit',
        title: 'Monday Motivation — Leadership & Influence',
        description:
          'Leadership post with bold "MONDAY" typography, a purple alarm clock replacing the letter O, a suited portrait, and the consistent BloomX promotional footer.',
      },
      {
        src: bloomxGratCard,
        alt: 'Pathfinders Conference appreciation card for Barr. Damilola Nwaribe',
        title: 'Pathfinders Conference — Thank-You Card',
        description:
          'Formal appreciation graphic for the PATHFINDERS Conference, honouring Barr. Damilola Nwaribe, Member of the Global Body of Mentors. Features script typography, an ID-badge portrait, confetti, and a gold Pathfinders shield logo.',
      },
    ],
  },
  {
    id: 'pulchra-yoghurt',
    title: 'PULCHRA Yoghurt — Product Advertising Campaign',
    category: 'Graphic Design / Product Advertising / Food & Beverage',
    filterKey: 'graphic',
    description:
      'Product-focused advertising creative for PULCHRA Yoghurt, showcasing its cranberry flavour through product imagery, prominent typography, and a clean promotional layout.',
    image: pulchraCranberry,
    imageFit: 'contain',
    gallery: [
      { src: pulchraCranberry, alt: 'PULCHRA Yoghurt cranberry flavour product advertising design' },
      { src: pulchraHealthyChoice, alt: 'PULCHRA Healthy Choice product advertising design' },
      { src: pulchraJuiceCollection, alt: 'PULCHRA juice collection advertising design' },
      { src: pulchraNFura, alt: 'PULCHRA N-Fura product advertising design' },
      { src: pulchraNaturalJuice, alt: 'PULCHRA natural juice advertising design' },
      { src: pulchraVanilla, alt: 'PULCHRA Yoghurt vanilla flavour product advertising design' },
      { src: pulchraYogurtCollection, alt: 'PULCHRA yoghurt collection advertising design' },
    ],
  },
];

// ── Filter Categories ───────────────────────────────────────
export const filterCategories = [
  { key: 'all', label: 'All Work' },
  { key: 'graphic', label: 'Graphic Design' },
  { key: 'video', label: 'Video Editing' },
];

export const selectedWorksImages = [
  { src: selectedBloom, alt: 'Selected Works graphic design featuring a Bloom invitation' },
  { src: selectedBusinessStartup, alt: 'Selected Works graphic design for a business startup' },
  { src: selectedEasyLensDC, alt: 'Selected Works EasyLens DC graphic design' },
  { src: selectedEasyLens, alt: 'Selected Works EasyLens graphic design' },
  { src: selectedECC, alt: 'Selected Works ECC graphic design' },
  { src: selectedElitesMatch, alt: 'Selected Works ElitesMatch graphic design' },
  { src: selectedGirlfriendDay, alt: 'Selected Works graphic design for a friendship day' },
  { src: selectedNightOfThousand, alt: 'Selected Works Night of a Thousand graphic design' },
  { src: selectedOELDirector, alt: 'Selected Works OEL director graphic design' },
  { src: selectedOELScents, alt: 'Selected Works OEL Scents graphic design' },
  { src: selectedPorvenir, alt: 'Selected Works Porvenir graphic design' },
  { src: selectedStrongDesire, alt: 'Selected Works Strong Desire graphic design' },
  { src: selectedThankYou, alt: 'Selected Works thank-you graphic design' },
];

// ── Morenchiz Case Study ────────────────────────────────────
export const morenchizProject = {
  id: 'morenchiz',
  title: 'Morenchiz Food Advertising Campaign',
  client: 'Morenchiz',
  category: 'Food Advertising',
  tags: ['Promotional Graphic Design', 'Social Media Creatives', 'Food Advertising'],
  description:
    'Created a coordinated series of promotional graphics for Morenchiz, a food brand, showcasing menu items through appetizing food imagery, expressive typography, vibrant colours, and clear ordering calls to action.',
  objectives: [
    'Showcase food products attractively.',
    'Create visually engaging promotional graphics.',
    'Maintain a consistent visual direction across multiple designs.',
    'Encourage customers to explore the menu and place orders.',
  ],
  skills: [
    'Graphic Design',
    'Typography',
    'Visual Composition',
    'Food Advertising',
    'Promotional Design',
    'Social Media Creative Design',
  ],
  mainImage: morenchizWingIt,
  mainImageAlt: 'Morenchiz — Wing It promotional food design',
  galleryImages: [morenchizGizzard, morenchizSidePieces],
  galleryAlts: [
    'Morenchiz — Gizzard Gang promotional food design',
    'Morenchiz — The Side Pieces promotional food design',
  ],
  allImages: [morenchizWingIt, morenchizGizzard, morenchizSidePieces],
};

// ── The Nexus Lagos Case Study ──────────────────────────────
export const nexusProject = {
  id: 'nexus',
  title: 'The Nexus Lagos',
  subtitle: 'Event Branding & Campaign Design',
  client: 'The Nexus Lagos',
  category: 'Campaign Design / Event Branding',
  tags: ['Campaign Design', 'Event Branding', 'Promotional Graphics', 'Merchandise Design'],
  description:
    'A collection of campaign graphics created for The Nexus Lagos, showcasing a coordinated visual identity across event promotions, branded merchandise, and event countdown graphics.',
  contributions: [
    'Event promotional graphic design',
    'Visual identity application',
    'Merchandise mockup presentation',
    'Typography and information hierarchy',
    'Promotional campaign consistency',
  ],
  // Individual design descriptions shown in the gallery
  imageDetails: [
    {
      title: 'Event Promotional Banner',
      description:
        'Features event photography, a speaker image, the LoveWorld Graduates Network branding, and The Nexus Lagos visual identity. Blue and gold accents communicate the event identity.',
    },
    {
      title: 'Branded Merchandise Mockup',
      description:
        'Presents The Nexus Lagos branding on three T-shirts — black, blue, and white — demonstrating how the visual identity applies across merchandise in different colour variations.',
    },
    {
      title: 'Event Countdown Graphic',
      description:
        'Promotes the upcoming event through a prominent countdown number, event details, a QR code, and registration information, all consistent with The Nexus Lagos branding.',
    },
  ],
  mainImage: nexusBanner,
  mainImageAlt: 'The Nexus Lagos — Event promotional banner',
  galleryImages: [nexusMerchandise, nexusCountdown],
  galleryAlts: [
    'The Nexus Lagos — Branded merchandise mockup on three T-shirts',
    'The Nexus Lagos — Event countdown graphic with QR code',
  ],
  allImages: [nexusBanner, nexusMerchandise, nexusCountdown],
};

// ── BloomX & LoveWorld Graduate Network Case Study ──────────
export const bloomxProject = {
  id: 'bloomx',
  title: 'BloomX & LoveWorld Graduate Network',
  subtitle: 'Social Media Campaign & Corporate Communications',
  client: 'BloomX / LoveWorld Graduate Network',
  category: 'Social Media Creatives / Corporate Communications',
  tags: [
    'Social Media Creatives',
    'Corporate Communications',
    'Leadership Campaign Design',
    'Motivational Content',
  ],
  description:
    'A collection of motivational and corporate communication graphics developed for BloomX and the LoveWorld Graduate Network. The designs combine portrait photography, expressive typography, brand elements, and coordinated purple-and-white styling to communicate leadership messages and recognise an event speaker.',
  contributions: [
    'Social media graphic design',
    'Motivational content design',
    'Corporate communication graphics',
    'Typography and information hierarchy',
    'Portrait cutout composition',
    'Visual consistency across related campaign assets',
    'Event appreciation-card design',
    'Integration of brand elements and promotional information',
  ],
  imageDetails: [
    {
      title: 'Monday Motivation — Influence the System',
      description:
        'A motivational Monday post featuring a large "Mon/Day" headline, a notepad card, a city skyline, purple chess pieces, and a cut-out portrait. The BloomX footer promotes Coaching for Performance, Outcome 365, and Sabalala with the message "Supporting professionals to lead with impact."',
    },
    {
      title: 'Monday Motivation — Leadership & Influence',
      description:
        'A leadership-themed post using bold "MONDAY" typography with a purple alarm clock as the letter O, a confident suited portrait, a purple checkmark, and a running figure. Paired with the BloomX promotional footer for visual campaign consistency.',
    },
    {
      title: 'Pathfinders Conference — Thank-You Card',
      description:
        'A formal appreciation graphic for the PATHFINDERS Conference, honouring Barr. Damilola Nwaribe, Member of the Global Body of Mentors. Features elegant script typography, an ID-badge portrait, confetti, and a gold Pathfinders shield logo.',
    },
  ],
  mainImage: bloomxWoman,
  mainImageAlt: 'BloomX — Monday Motivation social media graphic featuring a woman',
  galleryImages: [bloomxMan, bloomxGratCard],
  galleryAlts: [
    'BloomX — Monday Motivation leadership graphic featuring a man in a suit',
    'Pathfinders Conference — Thank-you appreciation card for Barr. Damilola Nwaribe',
  ],
  allImages: [bloomxWoman, bloomxMan, bloomxGratCard],
};

// ── Video Projects ──────────────────────────────────────────
export const videoProjects = [
  {
    id: 'intentional-life',
    title: 'The Intentional Life',
    subtitle: 'being fully you',
    category: 'Video Editing / Promotional Video',
    thumbnail: intentionalLifeCover,
    previewUrl: 'https://drive.google.com/file/d/1fz8MXrWjtY-myMbYHIkQiaYYRCS17EeG/preview',
    url: 'https://drive.google.com/file/d/1fz8MXrWjtY-myMbYHIkQiaYYRCS17EeG/view?usp=sharing',
  },
  {
    id: 'women-tech-fest-2025',
    title: 'Women Tech Fest 2025',
    category: 'Event Video / Video Editing',
    thumbnail: techWomenFest2025Cover,
    previewUrl: 'https://drive.google.com/file/d/1fNptT1iVG1-0ssyQqah1kqB8J0gE3SDu/preview',
    url: 'https://drive.google.com/file/d/1fNptT1iVG1-0ssyQqah1kqB8J0gE3SDu/view?usp=sharing',
  },
  {
    id: 'tech-women-fest-3-lagos-2026',
    title: 'Tech Women Fest 3.0 — Lagos 2026',
    category: 'Event Video / Video Editing',
    thumbnail: techWomenFest2026Cover,
    previewUrl: 'https://drive.google.com/file/d/16X-hz8BsBrJhYfp3Mrv0cVJQZeKDpITQ/preview',
    url: 'https://drive.google.com/file/d/16X-hz8BsBrJhYfp3Mrv0cVJQZeKDpITQ/view?usp=sharing',
  },
];
