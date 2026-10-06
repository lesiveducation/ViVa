export const products = [
  { id: 'product-1', image: 'images/viva/product-1.jpg', title: 'Серьги с натуральным камнем', material: 'Ручная работа · единственный экземпляр', price: '2 300 ₽', tag: 'в наличии', featured: true, type: 'earrings' },
  { id: 'product-2', image: 'images/viva/product-2.jpg', title: 'Колье с характером', material: 'Натуральные камни · авторская сборка', price: '3 900 ₽', tag: 'в наличии', featured: true, type: 'necklaces' },
  { id: 'product-3', image: 'images/viva/product-3.jpg', title: 'Браслет «Дофаминовый»', material: 'Цветные бусины · свободная посадка', price: '2 600 ₽', tag: 'новинка', featured: true, type: 'bracelets' },
  { id: 'product-4', image: 'images/viva/product-4.jpg', title: 'Колье с жемчугом', material: 'Жемчуг · подвеска', price: '3 600 ₽', type: 'necklaces' },
  { id: 'product-5', image: 'images/viva/product-5.jpg', title: 'Именное колье', material: 'Бусины · индивидуальная надпись', price: 'от 2 800 ₽', tag: 'на заказ', type: 'necklaces' },
  { id: 'product-6', image: 'images/viva/product-6.jpg', title: 'Колье с крупной подвеской', material: 'Натуральные камни', price: '3 900 ₽', type: 'necklaces' },
];

export const featuredProducts = products.filter((product) => product.featured);
