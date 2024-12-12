import { SoftwareWhereInput } from "./SoftwareWhereInput";
import { SoftwareOrderByInput } from "./SoftwareOrderByInput";

export type SoftwareFindManyArgs = {
  where?: SoftwareWhereInput;
  orderBy?: Array<SoftwareOrderByInput>;
  skip?: number;
  take?: number;
};
