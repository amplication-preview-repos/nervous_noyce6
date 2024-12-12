import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "id";

export const DeviceTitle = (record: TDevice): string => {
  return record.id?.toString() || String(record.id);
};
