

class DataSourceEntity {
  private _category: string;
  private _index: string;
  private _videoType: string;
  private _part1: string;
  private _part2: string;
  private _title: string;
  private _description: string | undefined;
  private _playlist: string | undefined;
  private _hashtags: string | undefined;


  constructor(data: Record<string, any>){
    this._index = data.get("index");
    this._category = data.get("category");
    this._videoType = data.get("videoType");
    this._part1 = data.get("part1");
    this._part2 = data.get("part2");
    this._title = data.get("title");
    this._description = data.get("description");
    this._playlist = data.get("playlist");
    this._hashtags = data.get("hashtags");
  }


  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }

  public get index(): string {
    return this._index;
  }
  public set index(value: string) {
    this._index = value;
  }

  public get videoType(): string {
    return this._videoType;
  }
  public set videoType(value: string) {
    this._videoType = value;
  }

  public get part1(): string {
    return this._part1;
  }
  public set part1(value: string) {
    this._part1 = value;
  }

  public get part2(): string {
    return this._part2;
  }
  public set part2(value: string) {
    this._part2 = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get description(): string | undefined {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  public get playlist(): string | undefined {
    return this._playlist;
  }
  public set playlist(value: string | undefined) {
    this._playlist = value;
  }

  public get hashtags(): string | undefined {
    return this._hashtags;
  }
  public set hashtags(value: string | undefined) {
    this._hashtags = value;
  }

  public toString(): string {
    return `Index : ${this._index} \nCategory : ${this._category} \nVideo Type : ${this._videoType} \nPart 1 : ${this._part1} \nPart 2 : ${this._part2} \nTitle : ${this._title} \nDescription : ${this._description} \nPlaylist : ${this._playlist} \nHashtags : ${this._hashtags}`;
  }
  
}

export { DataSourceEntity };