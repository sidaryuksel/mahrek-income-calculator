import { useCallback /*, useState*/ } from "react";
/*
interface ITranslate {
  x: number;
  y: number;

}
*/
export const useCenteredTree = () => {
  //const [translate, setTranslate] = useState<ITranslate>({ x: 0, y: 0 });
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      //const { width, height } = containerElem.getBoundingClientRect();
    //  setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [/*translate,*/ containerRef];
};
