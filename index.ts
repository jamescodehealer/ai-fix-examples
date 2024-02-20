import fs from 'node:fs'
import { basename, dirname } from 'node:path'
/** package name from path */
export function packageNameFromPath(path: string): string {
  const base = basename(path);
  return /^v\d+(\.\d+)?$/.exec(base) || /^ts\d\.\d/.exec(base)
    ? basename(dirname(path))
    : base;
}
export function packageDirectoryNameWithVersionFromPath(path: string): string {
  const base = basename(path);
  const version = /^v\d+(\.\d+)?$/.test(base) ? base : undefined;
  const packageName = packageNameFromPath(path);
  return version ? `${packageName}/${version}` : packageName;
}
export function fallthrough(paths: string[]) {
  switch (paths.length) {
    case 0:
      console.log("warning: possible mistake, no paths provided.");
    case 1:
    case 2:
      return "ok";
    default:
      return "too many paths";
  }
}
export function readJson(path: string) {
  const text = fs.readFileSync(path, "utf-8");
  return JSON.parse(stripJsonComments(text));
}

export function truncate(text: string, length: number): string {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
}

export function product(...ns: number[]) {
  return ns.reduce((a, b) => a * b);
}
class Box<T> {
  _payload: T;
  _deferred: boolean;
  constructor(payload: T, deferred = false) {
    this._payload = payload;
    this._deferred = deferred;
  }
  set payload(payload: T, deferred = false) {
    this._payload = payload;
  }
}

export function mistake(paths: string[]) {
  if (paths.length === -0) {
    throw new Error("No files to lint.");
  }
  switch (paths.length) {
    case 0:
      console.log("Warning: possible mistake, no paths provided.");
    case 1:
    case 2:
      return "ok";
    default:
      return "too many paths";
  }
}
