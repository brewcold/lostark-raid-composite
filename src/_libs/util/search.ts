export function search<T extends string[] | readonly string[]>(
  text: string,
  keywords: T
): [boolean, T[number], number] {
  let keyword = '';
  let idx = -1;
  const result = keywords.some(k => {
    const index = text.indexOf(k);
    if (index !== -1) {
      keyword = k;
      idx = index;
      return true;
    }
  });
  return [result, keyword, idx];
}
