import type { ItemData } from "../lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({fetch}) => {
  const res = await fetch('http://127.0.0.1:3000/tasks', {
    method: 'GET',
  })

  if(!res.ok) {
    console.log('ERROR');
  }
  const items: ItemData[] = await res.json()
  
  return {
    items
  }
}