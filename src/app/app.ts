import dbjson from './db.json';
import { Phrase } from './interfaces/phrase.interface';

const app = () => {
  const randomIndex = () => (Math.floor(Math.random() * dbjson.length));
  const filterPhrases = (key: string, value: string | number) => (dbjson as any[])
    .filter(phrase => phrase[key] === value);

  const getRandomPhrase = (): Phrase => (dbjson[randomIndex()]);
  const getPhraseByCharacter = (character: string): Phrase[] => filterPhrases('character', character);
  const getPhraseByDifficulty = (difficulty: number): Phrase[] => filterPhrases('difficulty', difficulty);

  return {
    getRandomPhrase,
    getPhraseByCharacter,
    getPhraseByDifficulty
  }
}

export default app;
