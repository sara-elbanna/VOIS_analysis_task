export async function fetchDataApi (): Promise<any> {
  return await fetch('http://localhost:3000/data.json')
}
