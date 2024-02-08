export interface ClimateModel {
    id?: string;
    city: string;
    temperature: number;
    humidity: number;
    pressure?: number;
    velocity: number;
    volumen?:number;
    time: any
  }
  
  export interface CreateClimateDto extends Omit<ClimateModel, 'id'> {
  }
  
  export interface UpdateClimateDto extends Partial<Omit<ClimateModel, 'id'>> {
  }
  
  export interface SelectClimateDto extends Partial<ClimateModel> {
  }