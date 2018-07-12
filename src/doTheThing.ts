interface Options {
  id: number;
}

export default function doTheThing({id}: Options) {
  return `Check out this ID! ${id}`;
}
