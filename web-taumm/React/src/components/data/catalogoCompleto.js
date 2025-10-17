import monomandos from "./Monomandos/monomandos";
import accDucha from "./Acc Ducha/accducha";
import accBano from "./Acc Baño/accbaño";
import griferiaGeneral from "./Griferia General/griferia-general";
import flexibles from "./Flexibles/flexibles";
import valvulas from "./Valvulas/valvulas";
import llaves from "./Llaves/llaves";
import fitingBonce from "./Fiting Bonce/fitingbonce";
import temporizadas from "./Temporizadas/temporizadas";
import fittingLaton from "./Fitting Laton/fittinglaton";
import sanitaria from "./Sanitaria/sanitaria";
import repuestos from "./Repuestos/repuestos";
import showerDoor from "./Shower Door/showerdoor";
import espejoVanit from "./Espejo Vanit/espejovanit";

const catalogoCompleto = [
  ...monomandos,
  ...accDucha,
  ...accBano,
  ...griferiaGeneral,
  ...flexibles,
  ...valvulas,
  ...llaves,
  ...fitingBonce,
  ...temporizadas,
  ...fittingLaton,
  ...sanitaria,
  ...repuestos,
  ...showerDoor,
  ...espejoVanit
];

export default catalogoCompleto;