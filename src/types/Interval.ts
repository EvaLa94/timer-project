import { v4 as uuidv4 } from 'uuid';

class Interval {
  private _id: string = uuidv4();
  constructor(private _title: string, private _seconds: number) {}

  public get title() {
    return this._title;
  }

  public get seconds() {
    return this._seconds;
  }

  public get id() {
    return this._id;
  }
}

export default Interval;
