import FilesystemDatabaseHandler from "./FilesystemDatabaseHandler";

export const handlers = {
  filesystem: FilesystemDatabaseHandler,
};

export type DbHandlers = keyof typeof handlers;
