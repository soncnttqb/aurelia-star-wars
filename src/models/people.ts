import { Expose } from 'class-transformer';

export class People {
  public name: string = '';
	public height: number;
  public mass: number;

  @Expose({ name: 'hair_color' })
  public hairColor: string;

  @Expose({ name: 'skin_color' })
  public skinColor: string;
  
  @Expose({ name: 'eye_color' })
  public eyeColor: string;
  
  @Expose({ name: 'birth_year' })
  public birthYear: string;
  
	public gender: string;
	public homeworld: string;
	public created: string;
	public edited: string;
  public url: string;
}
