// Конструктор v2: браслет собирается из отдельных бусин 10 мм, камни перетаскиваются из ленты.
// Названия и цены демонстрационные, до утверждения реального ассортимента.
import { BEADS } from './konstruktor.js';

// Бусина-заготовка: ею заполнены пустые места, её цена входит в основу.
export const FILLER = 'agate';

// count — сколько бусин в браслете; price — основа (нить или шнур, замок, работа).
export const TYPES = [
  {
    id: 'clasp',
    name: 'С плетёным замком',
    note: 'регулируется по руке',
    sizeLabel: 'Размер',
    sizes: [{ id: 'uni', name: 'универсальный', count: 16, price: 1900 }],
    // плетёный замок занимает дальнюю часть кольца
    gap: 64,
  },
  {
    id: 'stretch',
    name: 'Наборной',
    note: 'на резинке, надевается через руку',
    sizeLabel: 'Обхват запястья',
    sizes: [15, 16, 17, 18, 19, 20].map((cm, i) => ({ id: String(cm), name: `${cm} см`, count: cm + 1, price: 1500 + i * 100 })),
    gap: 0,
  },
];

// Готовые раскладки: bead — бусина, которая ставится на каждое step-е место начиная с first.
export const TEMPLATES = [
  { id: 'empty', name: 'Белый', type: 'clasp', size: 'uni', fill: [] },
  { id: 'inei', name: '«Иней»', type: 'stretch', size: '19', fill: [{ bead: 'crystal', first: 0, step: 4 }] },
];

export { BEADS };
