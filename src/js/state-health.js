// TODO: write your code here
export default function getStateHealth(hero) {
  if (hero.health > 50) {
    return 'healthy';
  }

  if (hero.health >= 15 && hero.health <= 50) {
    return 'wounded';
  }

  return 'critical';
}
