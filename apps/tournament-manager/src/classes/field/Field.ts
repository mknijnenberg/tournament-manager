type Options = {
  name: string;
};

type IField = {
  name: string;
};

class Field implements IField {
  name: string;

  constructor(options: Options) {
    this.name = options.name;
  }
}

export default Field;
