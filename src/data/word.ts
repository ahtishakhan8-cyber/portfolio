export type WordMeaning = {
  partOfSpeech: string
  english: string
  urdu: string
}

export const SEARCHED_WORD = 'welcome'

export const WORD_MEANINGS: WordMeaning[] = [
  {
    partOfSpeech: 'Verb',
    english:
      'greet, salute, receive, meet, embrace, fete, usher in, greet, salute, receive, meet, embrace, fete, usher in',
    urdu: 'سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، آگہی کرنا، سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، گلے لگانا، اندر داخل ہونا۔',
  },
  {
    partOfSpeech: 'Adjective',
    english:
      'wanted, appreciated, popular, desireable, accepted, acceptable, pleasing, agreeable, gratifying, heartening, promising',
    urdu:'چاہتا تھا، تعریف کی، مقبول، خواہش مند، قابل قبول، قابل قبول، خوشگوار، راضی، اطمینان بخش، حوصلہ افزائی، وعدہ',
  },
  {
    partOfSpeech: 'Noun',
    english:
      'greetings, salutation, hail, welcoming, reception, warm reception, favourable reception, acceptance, hospitality, red carpet',
    urdu:'سلام، سلام، اولے، استقبال، استقبال، استقبال، گرم استقبال، سازگار استقبال، قبولیت، مہمان نوازی، سرخ قالین',
  },
]

export type CommonWord = {
  id: string
  english: string
  urdu: string
}

export const COMMON_WORDS: CommonWord[] = [
  { id: 'youre-welcome', english: "you're welcome", urdu: 'خوش آمدید' },
  { id: 'welcome-back', english: 'welcome back', urdu: 'واپسی پر خوش آمدید' },
  { id: 'warm-welcome', english: 'warm welcome', urdu: 'پرتپاک استقبال' },
  { id: 'welcome-aboard', english: 'welcome aboard', urdu: 'بورڈ پر خوش آمدید' },
  { id: 'welcome-home', english: 'welcome home', urdu: 'گھر میں خوش آمدید' },
  { id: 'welcome-change', english: 'a welcome change', urdu: 'خوش آئند تبدیلی' },
  { id: 'welcome-guest', english: 'welcome guest', urdu: 'معزز مہمان' },
  { id: 'welcome-note', english: 'welcome note', urdu: 'خیر مقدمی نوٹ' },
]

export const OTHER_WORDS: string[] = [
  'Welcoming',
  'Well',
  'Wellness',
  'Welcomes',
  'Welcomed',
  'Welcome mat',
  'Welfare',
  'Well-being',
  'Welcomer',
  'Weld',
]
