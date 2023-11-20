import { describe, expect, it } from 'vitest';
import Player from './Player';

describe('Player', () => {
  it('should create a new Player with a name', () => {
    const player = new Player({name: 'Player'});

    expect(player.name).toBe('Player');
  });

  it('should have an active state when created', () => {
    const player = new Player({name: 'Player'});

    expect(player.active).toBe(true);
  });

  it('should render player amounts when players are given as amounts', () => {
    const player = new Player({name: 'Player'});
    player.disable();

    expect(player.active).toBe(false);
  });

  it('should have no avatar when none it given', () => {
    const player = new Player({name: 'Player'});

    expect(player.avatar).toBe(undefined);
  });

  it('should have avatar when it\'s given', () => {
    const player = new Player({name: 'Player', avatar: 'avatar.png'});

    expect(player.avatar).toBe('avatar.png');
  });
});
