import { repeat } from '../utils';
import Interval from './Interval';
import Section from './Section';

class Timer {
  private _sections: Section[] = [];

  constructor(private _title: string) {}

  public get title() {
    return this._title;
  }

  public get sections() {
    return this._sections;
  }

  public addSection(section: Section) {
    this._sections.push(section);
  }

  public getDuration() {
    return this._sections.reduce(
      (accumulator, currentValue) => accumulator + currentValue.getDuration(),
      0
    );
  }

  public getIntervalSequence() {
    const sequence: Interval[] = [];
    if (this.hasSections()) {
      this._sections.forEach((section) => {
        if (section.hasIntervals()) {
          sequence.push(...repeat(section.intervals, section.repeat));
        }
      });
    }
    return sequence;
  }

  public hasSections(): boolean {
    return this._sections.length > 0;
  }
}

export default Timer;
