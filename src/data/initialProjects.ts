import { Project } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Lumina Noir: Luxury Perfume Cinematic Commercial',
    titleUrdu: 'لومینا نوائر: لگژری پرفیوم کے لیے سینیمیٹک اشتہار',
    client: 'Maison De L\'Ombre (Paris / Dubai)',
    category: 'commercial',
    description: 'Complete AI-generated commercial video campaign featuring hyper-photorealistic crystal flacons on obsidian stone with micro-gold dust physics and bespoke cinematic sound design.',
    descriptionUrdu: 'مکمل اے آئی سے تیار کردہ کمرشل ویڈیو جس میں کرسٹل پرفیوم بوتل، بلیک اوبسیڈین پتھر، تیرتے ہوئے گولڈ پارٹیکلز اور سٹوڈیو ساؤنڈ ڈیزائن شامل ہے۔',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'ElevenLabs', 'Topaz AI'],
    metrics: {
      highlight: '3.4M+ Views across TikTok & Instagram Ads',
      highlightUrdu: '۳.۴ ملین سے زائد ویوز انسٹاگرام اور ٹک ٹاک پر',
      turnaround: '48 Hours',
      views: '3.4M'
    },
    thumbnailUrl: '',
    artworkType: 'perfume',
    promptSnippet: 'Cinematic commercial shot of luxury faceted obsidian perfume bottle on wet black volcanic slate, micro gold dust suspended in soft amber rim light, anamorphic bokeh, 8k photo realism --ar 16:9 --style raw',
    completionDate: 'October 2026',
    featured: true,
    clientFeedback: {
      quote: 'The AI visual fidelity rivaled a $50k physical camera shoot. Delivered within 48 hours for our Dubai flagship launch.',
      quoteUrdu: 'اے آئی کی کوالٹی پچاس ہزار ڈالر کے سٹوڈیو شوٹ جیسی تھی۔ دبئی لانچ کے لیے صرف ۲ دنوں میں مکمل کر دیا گیا!',
      clientName: 'Tariq Al-Mansoor',
      clientCompany: 'Creative Director, L\'Ombre Luxury'
    }
  },
  {
    id: 'proj-2',
    title: 'Apex Aero-GT: Electric Hypercar Reveal Teaser',
    titleUrdu: 'ایپیکس ایرو جی ٹی: الیکٹرک ہائپر کار کا گلوبل ٹیزر',
    client: 'Apex Mobility Motors',
    category: 'video',
    description: 'Dynamic automotive reveal video featuring ultra-realistic reflections, rain-slicked asphalt at twilight, carbon fiber body details, and motion camera track shots.',
    descriptionUrdu: 'سپر فاسٹ الیکٹرک کار کا لانچ ٹیزر جس میں گیلی سڑکوں پر لائٹ کے عکس، کاربن فائبر کی باریکیاں اور سینیمیٹک کیمرہ موومنٹ شامل ہیں۔',
    tools: ['Kling AI v1.5', 'Flux.1 Pro', 'Adobe Premiere Pro', 'Suno AI'],
    metrics: {
      highlight: '2.1M Impressions & 42% Hook Rate',
      highlightUrdu: '۲.۱ ملین امپریشنز اور ۴۲ فیصد ہک ریٹ',
      turnaround: '3 Days',
      views: '2.1M'
    },
    thumbnailUrl: '',
    artworkType: 'supercar',
    promptSnippet: 'Cinematic tracking shot of aerodynamic electric concept hypercar speeding on rainy Tokyo highway at dusk, glowing cyber headlights, water spray physics, 35mm filmic lighting --v 6.1',
    completionDate: 'September 2026',
    featured: true,
    clientFeedback: {
      quote: 'Exceptional motion control and photorealism. Our investors and buyers could not believe this was 100% AI generated.',
      quoteUrdu: 'بہترین کیمرہ موشن اور ریئلزم۔ ہمارے انویسٹرز یقین نہیں کر سکے کہ یہ مکمل اے آئی سے بنی ہے۔',
      clientName: 'Marc Steiner',
      clientCompany: 'VP Marketing, Apex EV'
    }
  },
  {
    id: 'proj-3',
    title: 'Aria: Virtual AI Fashion Influencer & Lookbook',
    titleUrdu: 'آریا: ورچوئل اے آئی فیشن ماڈل اور برانڈ لوک بک',
    client: 'Velvet Horizon Streetwear',
    category: 'visuals',
    description: 'Creation of a fully consistent digital brand ambassador with realistic skin textures, multi-outfit seasonal lookbooks, and high-fashion editorial styling.',
    descriptionUrdu: 'ایک مکمل طور پر ایک جیسا چہرہ رکھنے والی ڈیجیٹل فیشن ماڈل جس کے مختلف فیشن آؤٹ فٹس، موسم بہار کا کیٹلاگ اور فوٹو شوٹس بنائے گئے۔',
    tools: ['Flux.1 Dev', 'PuLID / InstantID', 'Photoshop AI', 'Magnific AI'],
    metrics: {
      highlight: '100% Facial Consistency across 40+ Outfits',
      highlightUrdu: 'چالیس سے زائد ملبوسات میں سو فیصد چہرے کی مستقل مزاجی',
      turnaround: '4 Days',
      views: '850K'
    },
    thumbnailUrl: '',
    artworkType: 'fashion',
    promptSnippet: 'High-fashion editorial portrait of 24yo female model with natural skin pores, wearing avant-garde metallic oversized jacket, dramatic studio shadow, Leica M11 50mm f/1.2 aesthetic',
    completionDate: 'August 2026',
    featured: false,
    clientFeedback: {
      quote: 'Saved us thousands on model agencies, studio rentals, and travel. Aria is now the official face of our digital campaign.',
      quoteUrdu: 'ماڈل ایجنسیوں اور سٹوڈیو کے بھاری اخراجات بچ گئے۔ آریا اب ہماری مہم کا باضابطہ چہرہ ہے۔',
      clientName: 'Sarah Jenkins',
      clientCompany: 'Head of Brand, Velvet Horizon'
    }
  },
  {
    id: 'proj-4',
    title: 'AquaBurst: High-Speed Beverage Splash Commercial',
    titleUrdu: 'ایکوا برسٹ: ہائی اسپیڈ ڈرنک اسپلش اور فریشنس ویڈیو',
    client: 'AquaBurst Beverages Inc.',
    category: 'commercial',
    description: 'High-speed liquid simulation visual commercial with suspended lime slices, ice condensation beads, effervescent bubbles, and vibrant thirst-quenching pacing.',
    descriptionUrdu: 'ٹھنڈے مشروب کا اشتہار جس میں ہوا میں تیرتے لیموں کے ٹکڑے، برف کے قطرے، کاربونیٹڈ ببلز اور تازگی کے شاندار مناظر شامل ہیں۔',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'Soundly AI', 'After Effects'],
    metrics: {
      highlight: '68% Lift in E-commerce Conversion',
      highlightUrdu: 'آن لائن آرڈرز میں ۶۸ فیصد اضافہ',
      turnaround: '24 Hours',
      views: '1.8M'
    },
    thumbnailUrl: '',
    artworkType: 'beverage',
    promptSnippet: 'Macro commercial phantom camera 1000fps capture of icy lime soda can bursting through liquid splash wall, crystal droplets frozen in mid-air, studio rim lighting, vivid green and blue tones',
    completionDate: 'September 2026',
    featured: false,
    clientFeedback: {
      quote: 'Produced high-speed fluid dynamics that usually require specialty robot arms and high-speed Phantom cameras.',
      quoteUrdu: 'ایسے ہائی اسپیڈ لیکویڈ شاٹس تیار کیے جن کے لیے عام طور پر لاکھوں کے روبوٹک کیمرے درکار ہوتے ہیں۔',
      clientName: 'Bilal Khan',
      clientCompany: 'Brand Strategist, Citrus Ventures'
    }
  },
  {
    id: 'proj-5',
    title: 'Neon Odyssey: Sci-Fi Worldbuilding & Concept Film',
    titleUrdu: 'نیون اوڈیسی: فیوچرسٹک سائنس فکشن کانسپٹ فلم',
    client: 'Nexus Interactive Studios',
    category: 'video',
    description: 'Cinematic worldbuilding teaser for a cyberpunk game IP, rendering vast floating megalopolises, holographic advertisements, atmospheric volumetric fog, and orchestral AI score.',
    descriptionUrdu: 'سائنس فکشن گیم کے لیے کانسپٹ ٹیزر جس میں تیرتے ہوئے شہر، ہولوگرام سائن بورڈز، دھند اور پردیسی دنیا کے مسحور کن مناظر دکھائے گئے ہیں۔',
    tools: ['Runway Gen-3', 'Midjourney v6.1', 'Udio Music', 'Luma Dream Machine'],
    metrics: {
      highlight: 'Featured in AI Film Festival 2026',
      highlightUrdu: 'اے آئی فلم فیسٹیول ۲۰۲۶ میں باضابطہ نمائش',
      turnaround: '5 Days',
      views: '4.9M'
    },
    thumbnailUrl: '',
    artworkType: 'cyberpunk',
    promptSnippet: 'Breathtaking establishing shot of cybernetic megacity skyline in 2099, towering glass monoliths with glowing amber and violet neon typography, airborne vehicles, rain atmosphere --ar 2.39:1',
    completionDate: 'July 2026',
    featured: true,
    clientFeedback: {
      quote: 'Blew the gaming community away on Reddit and Twitter. Enabled us to secure pitch meetings with major publishers.',
      quoteUrdu: 'سوشل میڈیا پر وائرل ہوا اور ہمیں بڑے پبلشرز کے ساتھ میٹنگز دلوانے میں مددگار ثابت ہوا۔',
      clientName: 'Alexander Vance',
      clientCompany: 'Creative Lead, Nexus Games'
    }
  },
  {
    id: 'proj-6',
    title: 'FinEdge AI: Viral Social Reel & Explainer Series',
    titleUrdu: 'فِن ایج: سوشل میڈیا کے لیے وائرل اے آئی ریلز سیریز',
    client: 'FinEdge Global App',
    category: 'social',
    description: 'A 12-episode series of high-hook short-form videos combining dynamic 3D kinetic AI avatars, data visualizations, sound effects, and punchy viral storytelling.',
    descriptionUrdu: 'بارہ مختصر ویڈیوز کی سیریز جس میں پرکشش ہکس، اینیمیٹڈ اے آئی پریزینٹر اور مالیاتی ایپ کے فیچرز کو سادہ انداز میں سمجھایا گیا۔',
    tools: ['Claude 3.5 Sonnet', 'HeyGen', 'Midjourney v6.1', 'ElevenLabs Turbo'],
    metrics: {
      highlight: '5.2M Collective Organic Social Views',
      highlightUrdu: 'مجموعی طور پر ۵.۲ ملین آرگینک ویوز حاصل کیے',
      turnaround: '7 Days',
      views: '5.2M'
    },
    thumbnailUrl: '',
    artworkType: 'concept',
    promptSnippet: 'Minimalist sleek 3D financial vault icon unfolding into glowing holographic transaction streams, dark aesthetic, amber accent lighting, hyper-clean render --v 6.1',
    completionDate: 'June 2026',
    featured: false,
    clientFeedback: {
      quote: 'Our user acquisition cost plummeted by 45% using these AI-driven social video hooks.',
      quoteUrdu: 'ان اے آئی ریلز کی بدولت ہمارے نئے کسٹمرز حاصل کرنے کے اخراجات میں ۴۵ فیصد کمی آئی۔',
      clientName: 'Zainab Qureshi',
      clientCompany: 'Growth Director, FinEdge'
    }
  }
];
