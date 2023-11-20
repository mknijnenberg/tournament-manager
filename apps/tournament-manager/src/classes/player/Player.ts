type Options = {
  name: string;
  avatar?: string;
};

type IPlayer = {
  id: string;
  name: string;
  active: boolean;
  avatar?: string;
};

class Player implements IPlayer {
  id: string;
  name: string;
  active: boolean;
  avatar?: string;

  constructor(options: Options) {
    this.id = self.crypto.randomUUID();
    this.name = options.name;
    this.avatar = options.avatar?.toString();
    this.active = true;
  }

  disable() {
    this.active = false;

    return this;
  }
}

export default Player;
