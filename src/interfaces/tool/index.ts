import { RentalInterface } from 'interfaces/rental';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  type: string;
  brand: string;
  model: string;
  price_per_day: number;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  outlet?: OutletInterface;
  _count?: {
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
  model?: string;
  outlet_id?: string;
}
