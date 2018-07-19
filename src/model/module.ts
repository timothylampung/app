export interface Module {
  SecurityToken: string;
  Success: boolean;
  Message: string;
  ModuleList: ModuleData[];
}

export interface metaData{
  SecurityToken: string;
  Success: boolean;
  Message: string;
}

export interface ModuleList extends metaData {
  ModuleList : ModuleData[];
}


export interface ModuleData {
  id: number;
  unit_id: number;
  name: string;
  dashboard_path: string;
}
