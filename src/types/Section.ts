import Interval from './Interval';

class Section {
  private _intervals: Interval[] = [];

  constructor(private _title: string, private _repeat: number) {}

  public get title() {
    return this._title;
  }

  public get repeat() {
    return this._repeat;
  }

  public get intervals() {
    return this._intervals;
  }

  public addInterval(interval: Interval) {
    this._intervals.push(interval);
  }

  public getDuration() {
    return this._intervals.reduce(
      (accumulator, currentValue) => accumulator + currentValue.seconds,
      0
    );
  }

  public hasIntervals(): boolean {
    return this._intervals.length > 0;
  }
}

export default Section;
