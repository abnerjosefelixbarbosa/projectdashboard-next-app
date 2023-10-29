import Responsible from "./Responsible";

export default interface Project {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  responsible: Responsible;
}
