import health from '../health';

const mageList = [
  [100, { name: 'Маг', health: 100}, 'healthy'],
  [80, { name: 'Лучник', health: 80 }, 'wounded'],
  [10, { name: 'Мечник', health: 10 }, 'critical'],
];
test.each(mageList)(
  'test health mage with %s health',
  (_, object, expected) => {
    const result = health(object);
    expect(result).toBe(expected);
  },
);
