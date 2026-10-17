// Конструктор украшений: названия и цены демонстрационные, до утверждения реального ассортимента.
// Координаты посадки камня даны в пикселях холста основы 1000×1000.

export const BASES = [
  {
    id: 'necklace',
    name: 'Колье «Лиана»',
    material: 'Серебро 925, плотная панцирная цепь',
    price: 4900,
    sizeLabel: 'Длина цепи',
    sizes: ['40 см', '45 см', '50 см'],
    sizeDefault: '45 см',
    mount: { type: 'pendant', x: 490.4, y: 645.2, k: 1 },
  },
  {
    id: 'bracelet',
    name: 'Браслет «Шёпот»',
    material: 'Серебро 925, тонкая цепь, крючок',
    price: 3900,
    sizeLabel: 'Обхват запястья',
    sizes: ['15 см', '16 см', '17 см', '18 см'],
    sizeDefault: '16 см',
    mount: { type: 'pendant', x: 476.8, y: 773.2, k: 0.85 },
  },
  {
    id: 'ring',
    name: 'Кольцо «Солитер»',
    material: 'Серебро 925 с позолотой, четыре крапана',
    price: 6900,
    sizeLabel: 'Размер кольца',
    sizes: ['15,5', '16', '16,5', '17', '17,5', '18'],
    sizeDefault: '17',
    mount: { type: 'ring', cx: 499.2, cy: 401, r: 163.8, prongs: { x: 342, y: 259, w: 323 } },
  },
];

export const STONES = [
  { id: 'pink', name: 'Розовый турмалин', cut: 'Капля', mood: 'нежный, тёплый', price: 3500, ratio: 277 / 203, pendantW: 175, ringW: 1.0 },
  { id: 'blue', name: 'Голубой топаз', cut: 'Маркиз', mood: 'свежий, холодный', price: 2900, ratio: 420 / 253, pendantW: 140, ringW: 0.9 },
  { id: 'green', name: 'Зелёный аметист', cut: 'Изумрудная огранка', mood: 'спокойный, травяной', price: 2400, ratio: 420 / 270, pendantW: 150, ringW: 0.86 },
  { id: 'ruby', name: 'Рубин', cut: 'Круг', mood: 'яркий, вечерний', price: 6500, ratio: 412 / 420, pendantW: 170, ringW: 1.04, centered: true },
];
