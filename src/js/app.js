// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

function healthState(params) {
    const { health } = params;

    if (health > 50) {
        return 'healthy';
    } else if (health < 15) {
        return 'critical';
    } else {
        return 'wounded';
    }
}

function sortByHealthDesc(heroesHealth) {
    heroesHealth.sort((a, b) => a.health - b.health).reverse();
    return heroesHealth;
}

export { sortByHealthDesc, healthState };