import { Section } from "./Section";

export class Page {
  public id?: string;
  public churchId?: string;
  public url?: string;
  public title?: string;
  public headerImage?: string;

  public sections?: Section[];
}