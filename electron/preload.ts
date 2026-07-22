import { contextBridge, ipcRenderer } from "electron";

const invoke = <T>(channel: string, payload?: unknown) => ipcRenderer.invoke(channel, payload) as Promise<T>;

contextBridge.exposeInMainWorld("envioCifras", {
  centros: { list: () => invoke("centros:list"), saveAll: (rows: unknown) => invoke("centros:save-all", rows) },
  templates: { list: () => invoke("templates:list"), saveAll: (rows: unknown) => invoke("templates:save-all", rows) },
  lotes: { list: () => invoke("lotes:list"), get: (id: number) => invoke("lotes:get", id), create: (input: unknown) => invoke("lotes:create", input), search: (id: number) => invoke("lotes:search", id), send: (id: number) => invoke("lotes:send", id) },
  microsoft: { status: () => invoke("microsoft:status"), connect: () => invoke("microsoft:connect"), disconnect: () => invoke("microsoft:disconnect"), setRoot: (rootPath: string) => invoke("microsoft:set-root", rootPath) },
  files: { upload: (itemId: number) => invoke("files:upload", itemId) },
  backup: { create: () => invoke("backup:create"), restore: () => invoke("backup:restore") }
});
