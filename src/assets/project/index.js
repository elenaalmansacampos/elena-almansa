import mundoTech from "./mundo-tech.jpg";
import portfolio from "./portofolio.jpg";
import tarot from "./goddesses-tarot.jpg";
import duckstore from "./duckstore.jpg";
import tictactoe from "./tictactoe.jpg";
import bibliotecaFeminista from "./biblioteca-feminista.jpg";
import cinephile from "./cinephile.jpg";
import visualesHydra from "./visuales-hydra.jpg";

const imageByTitle = {
  "mundo tech": mundoTech,
  "portfolio personal": portfolio,
  "goddesses tarot": tarot,
  duckstore: duckstore,
  tictactoe: tictactoe,
  "biblioteca feminista": bibliotecaFeminista,
  cinephile: cinephile,
  "visuales hydra": visualesHydra
};

export const defaultProjectImage = portfolio;

function normalizeTitle(title) {
  return title?.trim().toLowerCase().replace(/\s+/g, " ") || "";
}

export function getProjectImage(project) {
  return (
    project?.imageUrl ||
    imageByTitle[normalizeTitle(project?.title)] ||
    defaultProjectImage
  );
}
