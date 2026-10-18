// Конструктор v3: та же модель, что в v2 (бусины 10 мм на наклонённом овале), плюс подвески,
// подбор по вопросам, стартовые дизайны ViVA и «История браслета» из готовых фрагментов.
// Названия, цены и дизайны демонстрационные, до утверждения ассортимента мастером.
import { TYPES, BEADS, FILLER } from './konstruktor-v2.js';
import { PENDANTS } from './konstruktor.js';

export { TYPES, BEADS, FILLER, PENDANTS };
export const PENDANT_MAX = 3;

// Поля для «Истории браслета». color — цветовая группа, mood — настроения для подбора,
// assoc — визуальная ассоциация, origin — нейтральная справка о камне, pairs — с чем сочетается по цвету.
// Без лечебных и «магических» свойств. Справки — черновик, мастеру нужно проверить их по своим камням.
export const STONE_INFO = {
  agate: { color: 'light', mood: ['tender', 'calm'], assoc: 'молочная матовая поверхность, похожая на иней на стекле', origin: 'белый агат — халцедон с матовой обработкой поверхности', pairs: ['crystal', 'rosequartz', 'kyanite', 'smoky'] },
  crystal: { color: 'light', mood: ['tender', 'bright'], assoc: 'колкие грани, которые ловят свет', origin: 'колотый горный хрусталь — бесцветный прозрачный кварц', pairs: ['agate', 'kunzite', 'obsidian', 'opal'] },
  kunzite: { color: 'pink', mood: ['tender'], assoc: 'сиреневый отлив, как небо в сумерках', origin: 'кунцит — розово-сиреневая разновидность сподумена', pairs: ['rosequartz', 'crystal', 'agate'] },
  rosequartz: { color: 'pink', mood: ['tender', 'calm'], assoc: 'мягкий пудровый цвет', origin: 'розовый кварц — кварц нежно-розового оттенка', pairs: ['kunzite', 'agate', 'rhodonite'] },
  rhodonite: { color: 'pink', mood: ['bright'], assoc: 'розовый цвет с тёмными прожилками, как графичный рисунок', origin: 'родонит — минерал розового цвета, часто с чёрными прожилками', pairs: ['rosequartz', 'obsidian', 'smoky'] },
  opal: { color: 'light', mood: ['bright', 'tender'], assoc: 'перелив, который меняется при повороте руки', origin: 'опал — минерал из кремнезёма с характерной игрой цвета', pairs: ['crystal', 'agate', 'kunzite'] },
  kyanite: { color: 'cool', mood: ['calm', 'strict'], assoc: 'глубокий синий с бликом', origin: 'кианит — минерал с вытянутыми кристаллами, чаще синего цвета', pairs: ['agate', 'hawkeye', 'aventurine'] },
  hawkeye: { color: 'cool', mood: ['strict'], assoc: 'тёмно-синий цвет с шелковистым отблеском', origin: 'соколиный глаз — кварц с волокнистыми включениями, которые дают подвижный отблеск', pairs: ['kyanite', 'obsidian', 'crystal'] },
  aventurine: { color: 'cool', mood: ['calm'], assoc: 'мятный цвет молодой листвы', origin: 'зелёный авантюрин — кварцит с мелкими блёстками слюды', pairs: ['prehnite', 'kyanite', 'agate'] },
  prehnite: { color: 'cool', mood: ['calm', 'tender'], assoc: 'полупрозрачный оливковый цвет', origin: 'пренит — полупрозрачный минерал зеленовато-оливкового цвета', pairs: ['aventurine', 'crystal', 'smoky'] },
  smoky: { color: 'warm', mood: ['calm', 'strict'], assoc: 'прозрачный карамельный оттенок', origin: 'дымчатый кварц — кварц от светло- до тёмно-коричневого оттенка', pairs: ['jasper', 'mookaite', 'agate'] },
  mookaite: { color: 'warm', mood: ['bright'], assoc: 'красно-жёлтые разводы, как осенний пейзаж', origin: 'мокаит — разновидность яшмы из Западной Австралии', pairs: ['smoky', 'jasper', 'agate'] },
  jasper: { color: 'warm', mood: ['calm'], assoc: 'тёплый шоколадный цвет', origin: 'яшма — плотная непрозрачная порода с узором', pairs: ['smoky', 'mookaite', 'obsidian'] },
  obsidian: { color: 'dark', mood: ['strict'], assoc: 'чёрный цвет в светлую крапинку', origin: 'снежный обсидиан — вулканическое стекло со светлыми вкраплениями', pairs: ['crystal', 'hawkeye', 'rhodonite'] },
};

export const COLOR_WORDS = {
  light: 'светлые, молочные и прозрачные тона',
  pink: 'розовые и сиреневые тона',
  cool: 'сине-зелёные, прохладные тона',
  warm: 'тёплые карамельные и землистые тона',
  dark: 'тёмные графичные тона',
};

// Стартовые дизайны ViVA. Бусины расставляются группами от центра браслета (спереди) к замку:
// groups — первые группы по порядку, cycle — повтор для остальных групп; в группе — бусина и её зеркальная пара.
export const DESIGNS = [
  { id: 'inei', name: '«Иней»', note: 'белый агат и колотый хрусталь', type: 'stretch', size: '19', every: { bead: 'crystal', step: 4 } },
  { id: 'pudra', name: '«Пудра»', note: 'кунцит в центре, розовый кварц', type: 'clasp', size: 'uni', groups: ['kunzite', 'rosequartz', 'agate', 'rosequartz', 'crystal'], cycle: ['agate', 'rosequartz'] },
  { id: 'laguna', name: '«Лагуна»', note: 'кианит, авантюрин, пренит', type: 'stretch', size: '17', groups: ['kyanite'], cycle: ['crystal', 'aventurine', 'prehnite', 'kyanite'] },
  { id: 'karamel', name: '«Карамель»', note: 'мокаит, дымчатый кварц, яшма', type: 'stretch', size: '18', groups: ['mookaite'], cycle: ['smoky', 'agate', 'jasper', 'agate', 'mookaite'] },
  { id: 'polnoch', name: '«Полночь»', note: 'соколиный глаз и снежный обсидиан', type: 'clasp', size: 'uni', groups: ['hawkeye', 'crystal'], cycle: ['obsidian', 'hawkeye', 'crystal'] },
  { id: 'kaplya', name: '«Опаловая капля»', note: 'один опал в центре', type: 'stretch', size: '17', groups: ['opal', 'crystal'], cycle: ['agate', 'agate', 'crystal'] },
];

// «Подобрать за 30 секунд»
export const QUIZ = [
  { id: 'color', q: 'Какие цвета вам ближе?', opts: [['light', 'Светлые'], ['pink', 'Розовые'], ['cool', 'Сине-зелёные'], ['warm', 'Тёплые'], ['dark', 'Тёмные']] },
  { id: 'mood', q: 'Какое настроение у браслета?', opts: [['tender', 'Нежное'], ['bright', 'Яркое'], ['calm', 'Спокойное'], ['strict', 'Строгое']] },
  { id: 'style', q: 'Как расставить камни?', opts: [['minimal', 'Минимализм: пара акцентов'], ['accent', 'Акцент в центре'], ['mosaic', 'Мозаика из камней']] },
  { id: 'purpose', q: 'Для чего браслет?', opts: [['daily', 'На каждый день'], ['gift', 'В подарок'], ['evening', 'На вечер']] },
  { id: 'budget', q: 'Какой бюджет?', opts: [['3000', 'до 3 000 ₽'], ['5000', 'до 5 000 ₽'], ['8000', 'до 8 000 ₽'], ['any', 'Не важно']] },
];
