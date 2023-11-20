type Options = {
  name: string;
};

type IPoule = {
  name: string;
};

class Poule implements IPoule {
  name: string;

  constructor(options: Options) {
    this.name = options.name;
  }
}

export default Poule;
