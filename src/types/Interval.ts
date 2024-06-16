class Interval {
  constructor(private _title: string, private _seconds: number) {}

  public get title() {
    return this._title;
  }

  public get seconds() {
    return this._seconds;
  }
}

export default Interval;
