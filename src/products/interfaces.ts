import {
  OkPacket,
  ProcedureCallPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2";

export type ProductRes = {
  json: (
    arg0:
      | OkPacket
      | RowDataPacket[]
      | ResultSetHeader[]
      | RowDataPacket[][]
      | OkPacket[]
      | ProcedureCallPacket
  ) => void;
  status: (arg0: number) => {
    (): any;
    new (): any;
    send: { (arg0: string): void; new (): any };
  };
};
