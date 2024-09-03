export const EXTERNAL_URL_RE = /^[a-z]+:/i
export const PATHNAME_PROTOCOL_RE = /^pathname:\/\//

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}
