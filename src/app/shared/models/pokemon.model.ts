export class Pokemon {
  public order: number;
  public weight: number;
  public height: number;
  public species: Species;
  public sprites: Sprites;
  public base_experience: number;
}

export class Species {
  public name: string;
  public url: string;
}

export class Sprites {
  public front_default: string;
}
