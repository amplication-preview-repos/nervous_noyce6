import { Software as TSoftware } from "../api/software/Software";

export const SOFTWARE_TITLE_FIELD = "id";

export const SoftwareTitle = (record: TSoftware): string => {
  return record.id?.toString() || String(record.id);
};
