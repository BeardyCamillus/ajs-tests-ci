import { sortByHealthDesc } from '../app';

const unsorted = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
];

const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
];

test('heroes params should not be the same after sorting', () => {
    const sorted = sortByHealthDesc(unsorted);
    expect(sorted).not.toBe(expected);
});

test('should be sorted', () => {
    const sorted = sortByHealthDesc(unsorted);
    expect(sorted).toEqual(expected);
});


