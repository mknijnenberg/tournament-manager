type Options = {
  name: string;
};

type ITeam = {
  name: string;
  active: boolean;
};

class Team implements ITeam {
  name: string;
  active: boolean;

  constructor(options: Options) {
    this.name = options.name;
    this.active = true;
  }

  disable() {
    this.active = false;

    return this;
  }
}

export default Team;
