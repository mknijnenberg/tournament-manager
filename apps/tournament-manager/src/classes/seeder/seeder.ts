import Match from "../match/Match";
import Player from "../player/Player";

type SlotType = 'match' | 'break' | null;

type Slot = {
  id: string;
  round: number;
  field: number;
  type: SlotType;
  match: Match | null;
}

type Slots = Map<Slot['id'], Slot>;
type Matches = Map<Match['id'], Match>;

type ISeeder = {
  calculate: () => Slots;
}

type Options = {
  players?: Player[];
}

class Seeder implements ISeeder {
  fields: number;
  matches: Matches = new Map();
  slots: Slots = new Map();
  players: Player[];
  
  constructor(options: Options = {}) {
    this.players = options?.players || [];
    this.fields = options?.fields || 1;
  }

  calculate() {
    this.matches = this.#generateMatches(this.players);
    this.slots = this.#generateSlots(this.matches, this.fields);

    return this.slots;
  }

  #generateMatches = (players: Player[]): Matches => {
    const newMatches: Matches = new Map();
  
    for (let i = 0; i < players.length - 1; i++) {
      for (let j = i + 1; j < players.length; j++) {
        const match = new Match({
          type: 'player',
          field: 1,
          sideA: players[i],
          sideB: players[j],
        });
        
        newMatches.set(match.id, match);
      }
    }
  
    return newMatches;  
  };

  #generateSlots = (matches: Matches, fields: number): Slots => {
    const slots: Slots = new Map();
    const matchesPerRound = matches.size / fields;

    console.log('matches: ', matches);
  
    for (let i = 0; i < matchesPerRound; i++) {
      const roundId = i + 1;

      for (let j = 0; j < fields; j++) {
        const fieldId = j + 1;

        const slotId = slots.size + 1;

        const slot = {
          id: `Slot${slotId}-Round${roundId}-Field${fieldId}`,
          round: roundId,
          field: fieldId,
          type: null,
          match: null,
        };
  
        slots.set(slot.id, slot);
      }
    }
  
    return slots;
  }
}

export default Seeder;

