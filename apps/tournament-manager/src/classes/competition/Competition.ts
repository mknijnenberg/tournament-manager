const competitionCategories = {
  single: 'Single',
  dual: 'Dual',
  team: 'Team',
}

// league / cup / tournament / championship

type ICompetition = {
  name: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  category: typeof competitionCategories[keyof typeof competitionCategories];
}

class Competition implements ICompetition {  
  constructor(
    public name: string,
    public description: string,
    public startDate?: Date,
    public endDate?: Date,
    public category: typeof competitionCategories[keyof typeof competitionCategories]
  ) {
    this.name = name;
    this.description = description;
    this.category = category;

    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Competition;