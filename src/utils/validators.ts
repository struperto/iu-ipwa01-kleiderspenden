export function isLocalZip(zip: string, prefix = '80'): boolean {
    return zip.startsWith(prefix);
  }